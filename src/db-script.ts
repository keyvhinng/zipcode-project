import { PrismaClient } from "@prisma/client";

import { zipCodeData } from "../data/zipCode";

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    zipCodeData.map(async (row) => {
      const { ZipCode, City, County } = row;
      return prisma.zipCode.create({
        data: {
          zipcode: ZipCode,
          city: City,
          county: County,
        },
      });
    })
  );
  console.log(`Succesfully inserted ${zipCodeData.length} rows`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
