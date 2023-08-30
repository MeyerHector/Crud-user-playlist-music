//Importacion de middlewares
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'



//configuracion del app y los middlewares
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//importacion y ejecucion de la conexion (xd) a la base de datos
import { conexionDB } from './db.js'
conexionDB()


//configuracion de rutas
import { userRouter } from './src/routes/user.routes.js'
import { playlistRouter } from './src/routes/playlist.routes.js'
import { musicRouter } from './src/routes/music.routes.js'
app.use(userRouter);
app.use(playlistRouter);
app.use(musicRouter);


//configuracion del app.listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})