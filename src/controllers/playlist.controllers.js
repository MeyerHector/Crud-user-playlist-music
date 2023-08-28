import { playlist } from '../models/playlist.js'

export const findAllPlaylist = async (req, res) => {
    try {
        const user_id = req.params.id;

        const allPlaylist = await playlist.findAll({
            where: {
                state: true,
                user_id: user_id
            }

        })
        if(!allPlaylist) {
            throw ({
                status:404,
                message:'There are no playlist avalible'
            })
        }

        return res.json(allPlaylist)
    } catch (error) {
        console.log('Could not find playlists', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const findById = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const id = req.params.id

        const playlistById = await playlist.findOne({
            where: {
                id: id,
                user_id: user_id
            }
        })
        if(!playlistById) {
            throw({
                status:404,
                message:`There's no playlist number ${id}`
            })
        }
        return res.json(playlistById);     
        
    } catch (error) {
        console.log('Could not find playlist', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const createPlaylistCtrl = async (req, res) => {
    const { title } = req.body;
    try {
        const newPlaylist = await playlist.create({
            user_id: req.params.id,
            title
        })

        if (!newPlaylist) {
            throw ({
                status: 400,
                message: 'Could not create playlist'
            })
        }

        return res.json(newPlaylist)

    } catch (error) {
        console.log('Could not create playlist', error)
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const updatePlaylistCtrl = async (req, res) => {
    const { title } = req.body;
    try {
        const updatedPlaylist = await playlist.update({
            title
        }, {
            where: {
                id: req.params.id,
                user_id: req.params.user_id
            }
        })

        if (!updatedPlaylist) {
            throw ({
                status: 400,
                message: 'Could not update playlist'
            })
        }
        return res.json({
            message: 'Playlist updated successfully',
            updatedPlaylist
        })
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}

export const deletePlaylistCtrl = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPlaylist = await playlist.update({
            state: false
        }, {
            where: {
                id,
                state: true
            }
        })

        if(!deletedPlaylist) {
            trow ({
                status: 400,
                message: 'Could not delete playlist'
            })
        }
        return res.json({deletedPlaylist, message: 'Playlist deleted successfully' });

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}