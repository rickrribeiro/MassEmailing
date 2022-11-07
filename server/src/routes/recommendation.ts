import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})

router.get('/get/:id', async (req,res) => {
    const recommendationId: string = req.params.id;
    const recommendation = await prisma.recommendation.findUniqueOrThrow({
        select:{
            id: true,
            description: true,
            contact: true,
            createdAt: true,
            rates: true,
            user:{
                select:{
                    name: true,
                    username: true,
                    nacionality: true,
                    currentLocation:{
                        select:{
                            name: true,
                            country:{
                                select:{
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        },
        where: {
            id: recommendationId
        }
    })
    return res.json(recommendation)
});

router.get('/getByUser/:id', async (req,res) => {
    const userId: string = req.params.id;
    const recommendation = await prisma.recommendation.findMany({
        select:{
            id: true,
            description: true,
            contact: true,
            createdAt: true,
            rates: true,
            user:{
                select:{
                    name: true,
                    username: true,
                    nacionality: true,
                    currentLocation:{
                        select:{
                            name: true,
                            country:{
                                select:{
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        },
        where: {
            id: userId
        }
    })
    return res.json(recommendation)
});

router.get('/getByCity/:id', async (req,res) => {
    const cityId = req.params.id;
    const recommendation = await prisma.recommendation.findMany({
        select:{
            id: true,
            description: true,
            contact: true,
            createdAt: true,
            rates: true,
            user:{
                select:{
                    id: true,
                    name: true,
                    username: true,
                    nacionality: true,
                    currentLocation:{
                        select:{
                            name: true,
                            country:{
                                select:{
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        },
        where: {
            id: cityId
        }
    })
    return res.json(recommendation)
});

module.exports = router;