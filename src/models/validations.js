import { sequelize, Model, DataTypes } from '../../db.js';
import { playlist } from './playlist.js';
import { user } from './user.js';
import { music } from './music.js';

user.hasMany(playlist, {foreignKey:'user_id'})
playlist.hasMany(music, {foreignKey:'playlist_id'})
