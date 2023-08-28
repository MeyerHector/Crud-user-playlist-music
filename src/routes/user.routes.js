import { Router } from 'express'
import { createUserCtrl } from '../controllers/user.controllers.js'

import { validateSchema } from '../middlewares/express-validator.js'
import { createUserSchema } from '../middlewares/user.schema.js'
const userRouter = Router()

userRouter.post('/api/user', createUserSchema, validateSchema, createUserCtrl)

export { userRouter }