import { Router } from 'express'
import { createPlaylistCtrl, deletePlaylistCtrl, findAllPlaylist, findById, updatePlaylistCtrl } from '../controllers/playlist.controllers.js'

import { validateSchema } from '../middlewares/express-validator.js'
import { createPlaylistSchema } from '../middlewares/playlist.shema.js'
const playlistRouter = Router()

playlistRouter.get('/api/user/:id/playlists', findAllPlaylist)

playlistRouter.get('/api/user/:user_id/playlist/:id', findById)

playlistRouter.post('/api/user/:id/playlist', createPlaylistSchema, validateSchema, createPlaylistCtrl)

playlistRouter.put('/api/user/:user_id/playlist/:id', createPlaylistSchema, validateSchema, updatePlaylistCtrl)

playlistRouter.delete('/api/user/:user_id/playlist/:id', deletePlaylistCtrl)

export { playlistRouter }