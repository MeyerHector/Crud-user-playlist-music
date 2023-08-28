import { checkSchema } from 'express-validator'

export const createUserSchema = checkSchema({
    username:{
        isLength:{
            options:[{min:3},{max:15}],
            errorMessage: "Username must be between 3 and 15 characters long"
        },
    },
    email: {
        errorMessage: 'Invalid email',
        isEmail: true
    },
    password: {
        isLength:{
            options: {min:8},            
            errorMessage: 'Password must be at least 8 characters long.',
        }
    },
})