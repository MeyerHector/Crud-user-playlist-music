import { sequelize, Model, DataTypes } from '../../db'

export const music = sequelize.define('comment', {
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
        type: DataTypes.STRING(20)
    },
    author: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},
    {
        timestamps: false,
    })


try {
    music.sync({ force: false }).then(() => {
        console.log('Tabla de musicas creada');
    });
} catch (error) {
    console.log('error al crear la tabla musicas', error)
}