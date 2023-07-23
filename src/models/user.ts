import { DataTypes, Model } from 'sequelize';
import db from '../db/conection'
import Role from './role';
import { UserInstance } from '@interfaces/';



const User = db.define<UserInstance>('users', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_role: {
    type: DataTypes.INTEGER,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
  }
});

User.belongsTo(Role, { foreignKey: 'id_role' });

export default User;
