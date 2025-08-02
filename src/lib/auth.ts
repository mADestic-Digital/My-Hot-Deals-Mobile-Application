import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcryptjs from "bcryptjs"

const prisma = new PrismaClient()

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Find admin by email
          const admin = await prisma.admin.findUnique({
            where: {
              email: credentials.email as string
            }
          })

          if (!admin) {
            return null
          }

          // Verify password
          const isPasswordValid = await bcryptjs.compare(
            credentials.password as string,
            admin.password
          )

          if (!isPasswordValid) {
            return null
          }

          // Return admin data in NextAuth user format
          return {
            id: admin.id,
            email: admin.email,
            name: admin.name,
            image: admin.image
          }
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt" as const
  },
  pages: {
    signIn: "/", // Redirect to home page where your modal is
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    }
  }
}

export default NextAuth(authOptions)
export { authOptions }