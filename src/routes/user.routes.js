import { Router } from 'express'
//importacion de las validaciones y rutas
import { createUserCtrl } from '../controllers/user.controllers.js'
import { validateSchema } from '../middlewares/express-validator.js'
import { createUserSchema } from '../middlewares/user.schema.js'

//definicion del controlador
const userRouter = Router()

//agregar un nuevo usuario
userRouter.post('/api/user', createUserSchema, validateSchema, createUserCtrl)

//exportacion de la ruta
export { userRouter }