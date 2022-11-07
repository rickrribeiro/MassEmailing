import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})

router.get('/getAll', async (req,res) => {
    const countries = await prisma.country.findMany({
        select:{
            id: true,
            name: true,
        },
        orderBy: {
            name: 'desc'
        }
    })
    return res.json(countries)
});

router.get('/get/:id', async (req,res) => {
    const countryId = req.params.id;
    const country = await prisma.country.findUniqueOrThrow({
        select:{
            id: true,
            name: true,
        },
        where: {
            id: countryId
        }
    })
    return res.json(country)
});


module.exports = router;