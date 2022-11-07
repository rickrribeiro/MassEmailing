import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})


router.get('/get/:id', async (req,res) => {
    const reviewId = req.params.id;
    const review = await prisma.review.findUniqueOrThrow({
        select:{
            id: true,
            createdAt: true,
            rentPrice: true,
            nature: true,
            internetQuality: true,
            tinder: true,
            city:{
                select:{
                    id: true,
                    name: true
                }
            },
            user:{
                select:{
                    id: true,
                    username: true,
                    name: true
                }
            }
        },
        where: {
            id: reviewId
        }
    })
    return res.json(review)
});

router.get('/getByCity/:id', async (req,res) => {
    const cityId = req.params.id;
    const review = await prisma.review.findMany({
        select:{
            id: true,
            createdAt: true,
            rentPrice: true,
            nature: true,
            internetQuality: true,
            tinder: true,
            comments: true,
            city:{
                select:{
                    id: true,
                    name: true
                }
            },
            user:{
                select:{
                    id: true,
                    username: true,
                    name: true
                }
            }
        },
        where: {
            id: cityId
        }
    })
    return res.json(review)
});

module.exports = router;