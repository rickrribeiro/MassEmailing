/*
  Warnings:

  - Added the required column `internetQuality` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nature` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tinder` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cityId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rentPrice" INTEGER NOT NULL,
    "nature" INTEGER NOT NULL,
    "tinder" INTEGER NOT NULL,
    "internetQuality" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Review_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("cityId", "createdAt", "id", "rentPrice", "userId") SELECT "cityId", "createdAt", "id", "rentPrice", "userId" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
