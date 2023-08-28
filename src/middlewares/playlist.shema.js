import { checkSchema } from 'express-validator'

export const createPlaylistSchema = checkSchema({
    title: {
        isLength: {
            //la propiedad title debe tener entre 3 y 25 caracteres
            options: [{ min: 3 }, { max: 25 }],
            errorMessage: "Title must be between 3 and 25 characters long"
        }
    }
})