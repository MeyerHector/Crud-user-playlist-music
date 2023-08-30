import { sequelize, Model, DataTypes } from '../../db.js';

//definicion del modelo music
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


    //sincronizacion de la base de datos con la tabla
try {
    music.sync({ force: false }).then(() => {
        console.log('Music table created');
    });
} catch (error) {
    console.log('error al crear la tabla musicas', error)
}