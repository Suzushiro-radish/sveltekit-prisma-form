-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "sex" INTEGER NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "postal_code" CHAR(7) NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "tel" VARCHAR(20),
    "email" VARCHAR(200),
    "inquery_type" TEXT NOT NULL,
    "inquery_body" VARCHAR(1000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
