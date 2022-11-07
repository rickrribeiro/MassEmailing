import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function seedCountries(){
    await prisma.country.upsert({
        where: { name: 'Argentina' },
        update: {},
        create: {
          name: 'Argentina'
        },
      })
    await prisma.country.upsert({
        where: { name: 'Brazil' },
        update: {},
        create: {
          name: 'Brazil'
        },
      })
      await prisma.country.upsert({
          where: { name: 'Irlanda' },
          update: {},
          create: {
              name: 'Irlanda'
            },
        })
        await prisma.country.upsert({
          where: { name: 'Tailândia' },
          update: {},
          create: {
            name: 'Tailândia'
          },
        })
}

async function seedCities(){

}

async function seedUsers(){

}


async function main(){
    await seedCountries();
    await seedCities();
    await seedUsers();
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })