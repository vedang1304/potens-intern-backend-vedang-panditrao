-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requiredSkill" TEXT NOT NULL,
    "minimumExperience" INTEGER NOT NULL,
    "maximumExperience" INTEGER NOT NULL,
    "minimumEducation" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "workMode" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
