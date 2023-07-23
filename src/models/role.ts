import db from '../db/conection'
import { DataTypes } from "sequelize";


const Role = db.define('role',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
    },
})


export default Role;