import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function seedCountries(){
    const argentina = await prisma.country.upsert({
        where: { name: 'Argentina' },
        update: {},
        create: {
          name: 'Argentina'
        },
      })
    const brazil = await prisma.country.upsert({
        where: { name: 'Brazil' },
        update: {},
        create: {
          name: 'Brazil'
        },
      })
    const irlanda = await prisma.country.upsert({
          where: { name: 'Irlanda' },
          update: {},
          create: {
              name: 'Irlanda'
            },
        })
      const tailand =   await prisma.country.upsert({
          where: { name: 'Tailand' },
          update: {},
          create: {
            name: 'Tailand'
           },
        })
        return {
          argentina,
          brazil,
          irlanda,
          tailand
        }
}

async function seedCities(countries:{[key:string]:{id: string}}){
  const salvador =   await prisma.city.upsert({
    where: { name: 'Salvador' },
    update: {},
    create: {
      name: 'Salvador',
      photoUrl:'a',
      countryId: countries.brazil.id
    },
  })

  const sp =   await prisma.city.upsert({
    where: { name: 'São Paulo' },
    update: {},
    create: {
      name: 'São Paulo',
      photoUrl:'a',
      countryId: countries.brazil.id
    },
  })

  return {
    salvador,
    sp
  }
}

async function seedUsers(){

}


async function main(){
    const countries = await seedCountries();
    const cities = await seedCities(countries);
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