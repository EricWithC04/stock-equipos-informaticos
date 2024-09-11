import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { User } from '../interfaces/user.interface';

class UserModel extends Model<User> implements User {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: 'user' | 'admin';
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.ENUM('user', 'admin')
    }
}, { sequelize, tableName: 'users' })

export { UserModel }