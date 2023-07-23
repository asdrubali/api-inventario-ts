import db from '../db/conection';
import { DataTypes } from 'sequelize';   



const Category = db.define('categories',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
})


export default Category;