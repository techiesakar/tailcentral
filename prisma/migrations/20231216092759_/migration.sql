/*
  Warnings:

  - The primary key for the `Block` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Component` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_blockId_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "refresh_token_expires_in" TEXT;

-- AlterTable
ALTER TABLE "Block" DROP CONSTRAINT "Block_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Block_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Block_id_seq";

-- AlterTable
ALTER TABLE "Component" DROP CONSTRAINT "Component_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "blackThumb" DROP NOT NULL,
ALTER COLUMN "lightThumb" DROP NOT NULL,
ALTER COLUMN "htmlCode" DROP NOT NULL,
ALTER COLUMN "jsxCode" DROP NOT NULL,
ALTER COLUMN "blockId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Component_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Component_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT,
ADD COLUMN     "role" TEXT DEFAULT 'GUEST';

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
