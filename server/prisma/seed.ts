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
      const thailand =   await prisma.country.upsert({
          where: { name: 'Tailand' },
          update: {},
          create: {
            name: 'Tailand'
           },
        })
      const japan =   await prisma.country.upsert({
        where: { name: 'Japan' },
        update: {},
        create: {
          name: 'Japan'
          },
      })
      const usa =   await prisma.country.upsert({
        where: { name: 'United States' },
        update: {},
        create: {
          name: 'United States'
          },
      })

        return {
          argentina,
          brazil,
          irlanda,
          thailand,
          japan,
          usa
        }
}

async function seedCities(countries:{[key:string]:{id: string}}){
  const salvador =   await prisma.city.upsert({
    where: { name: 'Salvador' },
    update: {},
    create: {
      name: 'Salvador',
      photoUrl:'https://img.icons8.com/color/2x/brazil-circular.png',
      countryId: countries.brazil.id
    },
  })

  const sp =   await prisma.city.upsert({
    where: { name: 'São Paulo' },
    update: {},
    create: {
      name: 'São Paulo',
      photoUrl:'https://img.icons8.com/color/2x/brazil-circular.png',
      countryId: countries.brazil.id
    },
  })
  
  const buenos_aires =   await prisma.city.upsert({
    where: { name: 'Buenos Aires' },
    update: {},
    create: {
      name: 'Buenos Aires',
      photoUrl:'https://img.icons8.com/color/2x/argentina.png',
      countryId: countries.argentina.id
    },
  })

  const mendoza =   await prisma.city.upsert({
    where: { name: 'Mendoza' },
    update: {},
    create: {
      name: 'Mendoza',
      photoUrl:'https://img.icons8.com/color/2x/argentina.png',
      countryId: countries.argentina.id
    },
  })

  const galway =   await prisma.city.upsert({
    where: { name: 'Galway' },
    update: {},
    create: {
      name: 'Galway',
      photoUrl:'https://img.icons8.com/color/2x/ireland.png',
      countryId: countries.irlanda.id
    },
  })

  const cork =   await prisma.city.upsert({
    where: { name: 'Cork' },
    update: {},
    create: {
      name: 'Cork',
      photoUrl:'https://img.icons8.com/color/2x/ireland.png',
      countryId: countries.irlanda.id
    },
  })

  const chiang_mai =   await prisma.city.upsert({
    where: { name: 'Chiang Mai' },
    update: {},
    create: {
      name: 'Chiang Mai',
      photoUrl:'https://img.icons8.com/color/2x/thailand.png',
      countryId: countries.thailand.id
    },
  })

  const phuket =   await prisma.city.upsert({
    where: { name: 'Phuket' },
    update: {},
    create: {
      name: 'Phuket',
      photoUrl:'https://img.icons8.com/color/2x/thailand.png',
      countryId: countries.thailand.id
    },
  })

  const tokyo =   await prisma.city.upsert({
    where: { name: 'Tokyo' },
    update: {},
    create: {
      name: 'Tokyo',
      photoUrl:'https://img.icons8.com/color/2x/japan.png',
      countryId: countries.japan.id
    },
  })

  const osaka =   await prisma.city.upsert({
    where: { name: 'Osaka' },
    update: {},
    create: {
      name: 'Osaka',
      photoUrl:'https://img.icons8.com/color/2x/japan.png',
      countryId: countries.japan.id
    },
  })
  const nyc =   await prisma.city.upsert({
    where: { name: 'New York' },
    update: {},
    create: {
      name: 'New York',
      photoUrl:'https://img.icons8.com/color/2x/usa-circular.png',
      countryId: countries.usa.id
    },
  })
  const los_angeles =   await prisma.city.upsert({
    where: { name: 'Los Angeles' },
    update: {},
    create: {
      name: 'Los Angeles',
      photoUrl:'https://img.icons8.com/color/2x/usa-circular.png',
      countryId: countries.usa.id
    },
  })

  return {
    salvador,
    sp,
    buenos_aires,
    mendoza,
    galway,
    cork,
    chiang_mai,
    phuket,
    tokyo,
    osaka,
    nyc,
    los_angeles
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