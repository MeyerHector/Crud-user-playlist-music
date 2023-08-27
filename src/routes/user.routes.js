import { Router } from 'express'
import { createUserCtrl } from '../controllers/user.controllers.js'

import { validateSchema } from '../middlewares/express-validator.js'
import { createUserSchema } from '../models/user.schema.js'
const userRouter = Router()

userRouter.post('/api/createUser', createUserSchema, validateSchema, createUserCtrl)

export { userRouter }