import { Router } from 'express'
//importacion de los controladores y valiciones
import { createPlaylistCtrl, deletePlaylistCtrl, findAllPlaylist, findById, updatePlaylistCtrl } from '../controllers/playlist.controllers.js'
import { validateSchema } from '../middlewares/express-validator.js'
import { createPlaylistSchema } from '../middlewares/playlist.shema.js'

//definicion del router
const playlistRouter = Router()

//traer todas las playlist
playlistRouter.get('/api/user/:id/playlists', findAllPlaylist)

//traer una playlist
playlistRouter.get('/api/user/:user_id/playlist/:id', findById)

//crear una playlist
playlistRouter.post('/api/user/:id/playlist', createPlaylistSchema, validateSchema, createPlaylistCtrl)

//actualizar una playlist
playlistRouter.put('/api/user/:user_id/playlist/:id', createPlaylistSchema, validateSchema, updatePlaylistCtrl)

//eliminar de manera logica una playlist
playlistRouter.delete('/api/user/:user_id/playlist/:id', deletePlaylistCtrl)

//exportacion del router
export { playlistRouter }