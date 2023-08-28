import { checkSchema } from "express-validator";

export const createMusicSchema = checkSchema({
    music_name:{
        isLength:{
            options:{min:1},
            errorMessage:"music name must be at least 1 character long"
        }
    },
    author:{
        isLength:{
            options:{min:3},
            errorMessage:"author's name must be at least 3 characters long"
        }
    }
})