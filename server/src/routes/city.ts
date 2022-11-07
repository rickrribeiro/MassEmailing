import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})

router.get('/getAll', async (req,res) => {
    const cities = await prisma.city.findMany({
        select:{
            id: true,
            name: true,
            photoUrl: true,
            country: {
                select:{
                    name: true,
                    id: true
                }
            }
        },
        orderBy: {
            name: 'desc'
        }
    })
    return res.json(cities)
});

router.get('/get/:id', async (req,res) => {
    const cityId = req.params.id;
    const city = await prisma.city.findUniqueOrThrow({
        select:{
            id: true,
            name: true,
            photoUrl: true,
            country: {
                select:{
                    name: true,
                    id: true
                }
            }
        },
        where: {
            id: cityId
        }
    })
    return res.json(city)
});


module.exports = router;