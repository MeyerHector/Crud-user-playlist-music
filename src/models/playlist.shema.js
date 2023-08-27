import { checkSchema } from 'express-validator'

export const createPlaylistSchema = checkSchema({
    title: {
        isLength: {
            options: [{ min: 3 }, { max: 25 }],
            errorMessage: "Title must be between 3 and 25 characters long"
        }
    }
})