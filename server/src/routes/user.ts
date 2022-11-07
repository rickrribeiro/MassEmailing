import express from 'express'
const router = express.Router();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
})


router.get('/get/:id', async (req,res) => {
    const userId: string = req.params.id;
    const user = await prisma.user.findUniqueOrThrow({
        select:{
            id: true,
            name: true,
            nacionality: true,
            isAdmin: true,
            email: true,
            username: true,
            bio: true,
            profilePhotoUrl: true,
            currentLocation:{
                select:{
                    name: true,
                    country: {
                        select:{
                            name: true
                        }
                    }
                }
            }
        },
        where: {
            id: userId
        }
    })
    return res.json(user)
});

router.get('/getByCity/:id', async (req,res) => {
    const cityId = req.params.id;
    const user = await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            nacionality: true,
            isAdmin: true,
            email: true,
            username: true,
            bio: true,
            profilePhotoUrl: true,
            currentLocation:{
                select:{
                    name: true,
                    country: {
                        select:{
                            name: true
                        }
                    }
                }
            }
        },
        where: {
            id: cityId
        }
    })
    return res.json(user)
});


module.exports = router;
