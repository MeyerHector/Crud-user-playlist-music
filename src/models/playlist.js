import { sequelize, Model, DataTypes } from '../../db.js'

//definicion del modelo playlist
export const playlist = sequelize.define('playlist', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
},
    {
        timestamps: true,
    })


    //sincronizacion de la base de datos con la tabla
try {
    playlist.sync({ force: false }).then(() => {
        console.log('Tabla de playlists creada');
    });
} catch (error) {
    console.log('error al crear la tabla playlist', error)
}