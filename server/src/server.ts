import express from 'express' // por estar definido no package o type: module
import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes, convertMinutesToHourString } from './utils/date-util';
import cors from 'cors'

import {
    city,
    comment,
    country,
    rate,
    recommendation,
    review,
    user,
} from './routes';

const prisma = new PrismaClient({
    log: ['query']
})

const app = express()
app.use(express.json())
app.use(cors())

app.use('/countries', country)
app.use('/cities', city)
app.use('/comments', comment)
app.use('/rates', rate)
app.use('/recommendations', recommendation)
app.use('/reviews', review)
app.use('/users', user)


app.listen(3000, () => {
    console.log("O app ta na porta 3000")
})
// intellicode