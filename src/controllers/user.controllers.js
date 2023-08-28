import { user } from '../models/user.js'

export const createUserCtrl = async (req, res) => {
    try {
        //crea un objeto newUser, que se almacena en la tabla 'user' a travez de la funcion de sequelize 'create', los valores se encuentran en el req.body
        const newUser = await user.create(req.body);

        //si no se ingreso nada, devuelve status 400 con un mensaje de error
        if(!newUser){
            throw ({
                status: 400,
                message:'Could not create user'
            })
        }
        //de otro modo devuelve status 201 y el usuario en json
        return res.status(201).json(newUser)
    //si no se pudo hacer la solicitud catchea el error y lo devuelve con status 500
    } catch (error) {
        console.log('Could not create the user', error)
        res.status(500).json({error: error.message})
    }
}