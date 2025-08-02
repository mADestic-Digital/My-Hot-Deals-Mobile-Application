import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcryptjs from "bcryptjs"
import type { JWT } from "next-auth/jwt"
import type { Session } from "next-auth"
import type { User } from "next-auth"

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    email?: string
    name?: string
  }
}

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
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id
        token.email = user.email as string
        token.name = user.name as string
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
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