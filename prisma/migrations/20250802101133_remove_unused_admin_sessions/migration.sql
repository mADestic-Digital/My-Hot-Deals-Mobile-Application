/*
  Warnings:

  - You are about to drop the `admin_sessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."admin_sessions" DROP CONSTRAINT "admin_sessions_adminId_fkey";

-- DropTable
DROP TABLE "public"."admin_sessions";
