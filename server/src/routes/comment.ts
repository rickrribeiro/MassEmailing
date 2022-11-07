import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})


router.get('/get/:id', async (req,res) => {
    const commentId = req.params.id;
    const comment = await prisma.comment.findUniqueOrThrow({
        select:{
            id: true,
            comment: true,
            reviewId: true,
            createdAt: true,
            user: {
                select:{
                    name: true,
                    id: true,
                    username: true,
                    nacionality: true,
                    currentLocation: {
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
            id: commentId
        }
    })
    return res.json(comment)
});

router.get('/getByReview/:id', async (req,res) => {
    const reviewId = req.params.id;
    const comment = await prisma.comment.findMany({
        select:{
            id: true,
            comment: true,
            reviewId: true,
            createdAt: true,
            user: {
                select:{
                    id: true,
                    name: true,
                    username: true,
                    nacionality: true,
                    currentLocation: {
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
            id: reviewId
        }
    })
    return res.json(comment)
});


module.exports = router;