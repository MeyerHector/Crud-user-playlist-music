import { playlist } from '../models/playlist.js'

export const findAllPlaylist = async (req, res) => {
    try {
        //captura el user_id del req.parans
        const user_id = req.params.id;

        //hace la consulta de todas las playlist que correspondan a ese usuario y se encuentren activas
        const allPlaylist = await playlist.findAll({
            where: {
                state: true,
                user_id: user_id
            }

        })
        //si no hay playlist devuelve status 404 con mensaje de error
        if(!allPlaylist) {
            throw ({
                status:404,
                message:'There are no playlist avalible'
            })
        }

        //si salio todo bien devuelve todas las playlist en formato json
        return res.json(allPlaylist)

    //si hubo un error, lo captura y lo muestra por consola con status 505
    } catch (error) {
        console.log('Could not find playlists', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const findById = async (req, res) => {
    try {
        //captura el user_id y el id de la playlist desde el req.params
        const user_id = req.params.user_id;
        const id = req.params.id

        //hace la consulta que corresponda a esos ids
        const playlistById = await playlist.findOne({
            where: {
                id: id,
                user_id: user_id
            }
        })

        //si no devuelve nada hace un throw con status 404 y mensaje de error
        if(!playlistById) {
            throw({
                status:404,
                message:`There's no playlist number ${id}`
            })
        }
        return res.json(playlistById);     
        
        //captura el error y lo devuelve en la consola con status 500
    } catch (error) {
        console.log('Could not find playlist', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const createPlaylistCtrl = async (req, res) => {
    //captura los valores que van dentro del req.body y req.params
    const { title } = req.body;
    const { id } = req.params.id

    try {
        //llama a la funcion create para el modelo playlist con los valores anteriormente capturado
        const newPlaylist = await playlist.create({
            user_id: id,
            title: title
        })

        //si no captura los datos devuelve status 400
        if (!newPlaylist) {
            throw ({
                status: 400,
                message: 'Could not create playlist'
            })
        }
        //sino devuelve el objeto como json
        return res.json(newPlaylist)

        //si hubo un error lo captura y lo devuelve en la consola con status 500
    } catch (error) {
        console.log('Could not create playlist', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const updatePlaylistCtrl = async (req, res) => {
    //captura los datos del req.body y req.params
    const { title } = req.body;
    const { user_id } = req.params.user_id
    const { id } = req.params.id
    try {
        //genera una consulta update con los datos capturados
        const updatedPlaylist = await playlist.update({
            title
        }, {
            where: {
                id: id,
                user_id: user_id
            }
        })
        
        //si la consulta esta vacia devuelve status 400 con mensaje
        if (!updatedPlaylist) {
            throw ({
                status: 400,
                message: 'Could not update playlist'
            })
        }
        //sino devuelve un mensaje de confirmacion junto con la playlist actualizada
        return res.json({
            message: 'Playlist updated successfully',
            updatedPlaylist
        })

    //si hubo un error devuelve status 500 y el mensaje de error
    } catch (error) {
        console.log('Could not update playlist', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const deletePlaylistCtrl = async (req, res) => {
    //captura el id en el req.params
    const { id } = req.params.id;

    try {
        //hace un update, el cual de manera logica elimina la playlist, cambiando el status a false
        const deletedPlaylist = await playlist.update({
            state: false
        }, {
            where: {
                id,
                state: true
            }
        })

        //si no se hizo la actualizacion devuelve status 400 y mensaje
        if(!deletedPlaylist) {
            trow ({
                status: 400,
                message: 'Could not delete playlist'
            })
        }
        
        //si salio todo bien devuelve el updated objet con un mensaje de confirmacion
        return res.json({deletedPlaylist, message: 'Playlist deleted successfully' });


        //si hubo un error devuelve status 500 con su mensaje
    } catch (error) {
        console.log('Could not delete playlist', error)
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}