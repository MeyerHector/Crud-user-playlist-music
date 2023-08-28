import { Router } from 'express'

import { validateSchema } from '../middlewares/express-validator.js'
import { createMusicSchema } from '../models/music.schema.js'
import { addMusic, findAllPlaylistMusic } from '../controllers/music.controllers.js'

const musicRouter = Router()

musicRouter.get('/api/playlist/:id/music', findAllPlaylistMusic)

musicRouter.post('/api/playlist/:id/addMusic', validateSchema, createMusicSchema, addMusic)

export { musicRouter }