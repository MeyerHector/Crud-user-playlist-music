import { Router } from 'express'
//importacion de validaciones y controladores
import { validateSchema } from '../middlewares/express-validator.js'
import { createMusicSchema } from '../middlewares/music.schema.js'
import { addMusic, findAllPlaylistMusic, findOneMusic } from '../controllers/music.controllers.js'

//definicion del controlador
const musicRouter = Router()

//traer todas las musicas de una playlist
musicRouter.get('/api/playlist/:id/music', findAllPlaylistMusic)

//traer una musica
musicRouter.get('/api/music/:id', findOneMusic)

//agregar una musica a una playlist
musicRouter.post('/api/playlist/:id/Music', validateSchema, createMusicSchema, addMusic)

//exportacion de las rutas
export { musicRouter }