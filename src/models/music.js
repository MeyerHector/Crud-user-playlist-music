import { sequelize, Model, DataTypes } from '../../db.js';
import { playlist } from './playlist.js';

export const music = sequelize.define('music', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    playlist_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    music_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    album: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    author: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    youtube_link: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
    }
)


try {
    music.sync({ force: false }).then(() => {
        console.log('Tabla de musicas creada');
    });
} catch (error) {
    console.log('error al crear la tabla musicas', error)
}