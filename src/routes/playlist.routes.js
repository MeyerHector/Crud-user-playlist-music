import { Router } from 'express'
import { createPlaylistCtrl, deletePlaylistCtrl, updatePlaylistCtrl } from '../controllers/playlist.controllers.js'

import { validateSchema } from '../middlewares/express-validator.js'
import { createPlaylistSchema } from '../models/playlist.shema.js'
const playlistRouter = Router()

playlistRouter.post('/api/:id/createPlaylist', createPlaylistSchema, validateSchema, createPlaylistCtrl)

playlistRouter.put('/api/:user_id/updatePlaylist/:id', createPlaylistSchema, validateSchema, updatePlaylistCtrl)

playlistRouter.delete('/api/:user_id/deletePlaylist/:id', deletePlaylistCtrl)

export { playlistRouter }