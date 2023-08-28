import { checkSchema } from "express-validator";

export const createMusicSchema = checkSchema({
    music_name:{
        isLength:{
            //la propiedad music_name debe tener minimo una letra
            options:{min:1},
            errorMessage:"music name must be at least 1 character long"
        }
    },
    author:{
        isLength:{
            //la propiedad author debe tener minimo una letra
            options:{min:3},
            errorMessage:"author's name must be at least 3 characters long"
        }
    }
})