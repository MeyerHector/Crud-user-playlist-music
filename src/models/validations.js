//importacion de los modelos
import { playlist } from './playlist.js';
import { user } from './user.js';
import { music } from './music.js';

//definicion de las asociaciones
user.hasMany(playlist, {foreignKey:'user_id'})
playlist.hasMany(music, {foreignKey:'playlist_id'})
