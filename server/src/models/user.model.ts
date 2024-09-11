import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { User } from '../interfaces/user.interface';

class UserModel extends Model<User> implements User {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: 'user' | 'admin';
    public state!: boolean
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
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { sequelize, tableName: 'users' })

export { UserModel }