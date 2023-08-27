import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import path from 'path'
import { dirname } from 'path'

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

import { conexionDB } from './db.js'
conexionDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})