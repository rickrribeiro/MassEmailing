import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})

router.get('/getByRecommendation/:id', async (req,res) => {
    const recommendationId = req.params.id;
    const rate = await prisma.rate.findMany({
        select:{
            id: true,
            value: true,
            createdAt: true,
            recommendationId: true,
            user:{
                select:{
                    id: true,
                    name: true,
                    username: true
                }
            }
        },
        where: {
            id: recommendationId
        }
    })
    return res.json(rate)
});


module.exports = router;