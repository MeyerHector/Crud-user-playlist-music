import { checkSchema } from 'express-validator'

export const createUserSchema = checkSchema({
    username:{
        isLength:{
            //la propiedad username debe tener entre 3 y 25 caracteres
            options:[{min:3},{max:15}],
            errorMessage: "Username must be between 3 and 15 characters long"
        },
    },
    email: {
        //la propiedad email debe ser un email valido
        errorMessage: 'Invalid email',
        isEmail: true
    },
    password: {
        isLength:{
            //la propiedad password debe tener minimo 8 caracteres
            options: {min:8},            
            errorMessage: 'Password must be at least 8 characters long.',
        }
    },
})