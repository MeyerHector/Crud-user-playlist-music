import { Router } from 'express'
import { createPlaylistCtrl, deletePlaylistCtrl, findAllPlaylist, findById, updatePlaylistCtrl } from '../controllers/playlist.controllers.js'

import { validateSchema } from '../middlewares/express-validator.js'
import { createPlaylistSchema } from '../models/playlist.shema.js'
const playlistRouter = Router()

playlistRouter.get('/api/user/:id/playlists', findAllPlaylist)

playlistRouter.get('/api/user/:user_id/playlist/:id', findById)

playlistRouter.post('/api/user/:id/createPlaylist', createPlaylistSchema, validateSchema, createPlaylistCtrl)

playlistRouter.put('/api/user/:user_id/updatePlaylist/:id', createPlaylistSchema, validateSchema, updatePlaylistCtrl)

playlistRouter.delete('/api/user/:user_id/deletePlaylist/:id', deletePlaylistCtrl)

export { playlistRouter }