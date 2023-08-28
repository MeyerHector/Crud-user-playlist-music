import { music } from '../models/music.js'

export const addMusic = async (req, res) => {
    const { music_name, author } = req.body;
    const playlist_id = req.params.id;
    const newMusic = music.create({
        playlist_id: playlist_id,
        music_name: music_name,
        author: author
    })

    if(!newMusic) {
        throw ({
            status: 400,
            message:'Music has not been added'
        })
    }

    return res.json(newMusic)
}

export const findAllPlaylistMusic = async (req, res) => {
    
    const { playlist_id } = req.params.id;

    try {
        const allPlaylistMusic = music.findAll({
            where: {
                playlist_id: playlist_id
            }
        })
    
        if(!allPlaylistMusic) {
            throw ({
                status: 404,
                message: `Could not find music for that playlist`
            })
        }
    
        return res.json(allPlaylistMusic)
    } catch (error) {
        console.log('Could not find music', error);
        return res.status(error.status || 500).json(error.message || 'internal server error')
    }
}