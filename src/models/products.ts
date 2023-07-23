import db from '../db/conection'
import { DataTypes } from 'sequelize';   
import Category from './Categories';
import { ProductsInterface } from '@interfaces/'


const Products = db.define<ProductsInterface>('products',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
    },
    id_category: {
        type: DataTypes.STRING,
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

Products.belongsTo(Category, { foreignKey: 'id_category' });

export default Products;