import { sequelize, Model, DataTypes } from '../../db'
import { user } from './user'
import { music } from './music'

export const playlist = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
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

try {
    post.sync({ force: false }).then(() => {
        console.log('Tabla de playlists creada');
    });
} catch (error) {
    console.log('error al crear la tabla playlist', error)
}