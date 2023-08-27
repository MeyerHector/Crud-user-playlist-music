import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import path from 'path'
import { dirname } from 'path'


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

import { conexionDB } from './db.js'
conexionDB()

import { userRouter } from './src/routes/user.routes.js'
app.use(userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})