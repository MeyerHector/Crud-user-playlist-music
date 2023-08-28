import { Router } from 'express'

import { validateSchema } from '../middlewares/express-validator.js'
import { createMusicSchema } from '../middlewares/music.schema.js'
import { addMusic, findAllPlaylistMusic, findOneMusic } from '../controllers/music.controllers.js'

const musicRouter = Router()

musicRouter.get('/api/playlist/:id/music', findAllPlaylistMusic)

musicRouter.get('/api/music/:id', findOneMusic)

musicRouter.post('/api/playlist/:id/Music', validateSchema, createMusicSchema, addMusic)

export { musicRouter }