import { music } from '../models/music.js'
import { playlist } from '../models/playlist.js';

export const addMusic = async (req, res) => {
    const { music_name, album, author, youtube_link } = req.body;
    const playlist_id = req.params.id;
    try {
        const playlistSelected = await playlist.findOne({
            where: {
                id : playlist_id
            }
        })

        const newMusic = await music.create({
            playlist_id: playlist_id,
            music_name: music_name,
            album: album,
            author: author,
            youtube_link: youtube_link
        })
        if(!newMusic) {
            throw ({
                status: 400,
                message:'Music has not been added'
            })
        }
        
        const response = {
            playlistSelected,
            newMusic
        }

        return res.json(response)
    } catch (error) {
        console.log('Could not add the music', error)
        return res.status(error.status || 500).json(error.message || 'Internal server error')
    }
}

export const findAllPlaylistMusic = async (req, res) => {
    
    const playlist_id = req.params.id;

    try {
        const playlistSelected = await playlist.findOne({
            where: {
                id: playlist_id
            }
        })

        if (!playlistSelected) {
            throw ({
                status: 404,
                message:`The selected Playlist does not exist.`
            })
        }
        const allPlaylistMusic = await music.findAll({
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
        
        const response = {
            playlist: playlistSelected,
            music: allPlaylistMusic
        }

        return res.json(response)
    } catch (error) {
        console.log('Could not find music', error);
        return res.status(error.status || 500).json(error.message || 'Internal server error')
    }
}


export const findOneMusic = async (req, res) => {
    const id_music = req.params.id
    try {
    const musicSelected = await music.findOne({
            where: {
                id: id_music
            }
        })

        if(!musicSelected) {
            throw ({
                status: 404,
                message: 'Could not find any music with that Id'
            })
        }
        return res.json(musicSelected)
    } catch (error) {
        console.log('Could not find that music', error)
        return res.status(error.status || 500).json(error.message || "Internal Server Error")
    }
}
 