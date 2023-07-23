import { Sequelize } from 'sequelize';

const userDb = process.env.USER_DB;
const nameDb = process.env.NAME_DB;
const hostDb = process.env.HOST_DB;

if (!userDb || !nameDb || !hostDb) {
  throw new Error('Faltan configurar algunas variables de entorno para la conexión a la base de datos.');
}

const db = new Sequelize(userDb, nameDb, 'xmu9RTaSOUQ2ffP', {
  host:  hostDb,
  port: 5432,
  dialect: 'postgres'
});

export default db;
