import { sequelize, Model, DataTypes } from '../../db.js'
import { music } from './music.js';
import { user } from './user.js'

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

playlist.hasMany(music, {foreignKey:'playlist_id'})


try {
    playlist.sync({ force: false }).then(() => {
        console.log('Tabla de playlists creada');
    });
} catch (error) {
    console.log('error al crear la tabla playlist', error)
}