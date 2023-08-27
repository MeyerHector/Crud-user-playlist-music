import { checkSchema } from "express-validator";

export const createMusicSchema = checkSchema({
    music_name:{
        isLength:{
            options:{min:2},
            errorMessage:"music name must be at least 2 characters long"
        }
    },
    author:{
        isLength:{
            options:{min:3},
            errorMessage:"author's name must be at least 3 characters long"
        }
    }
})