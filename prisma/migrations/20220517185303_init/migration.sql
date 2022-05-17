-- CreateTable
CREATE TABLE "MCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mainStack" VARCHAR(255) NOT NULL,
    "currentEnrollment" BOOLEAN NOT NULL DEFAULT false,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MCommander_name_key" ON "MCommander"("name");
