//importacion de sequelize
import { Sequelize, Model, DataTypes } from 'sequelize'

//conexion a la base de datos
export const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || "mysql",
    }
)

//funcion de la conexion a la base de datos
export const conexionDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexión a la base de datos exitosa')
    } catch (error) {
        console.log('Error al conectar a la base de datos', error);
    }

}

export { Model, DataTypes}