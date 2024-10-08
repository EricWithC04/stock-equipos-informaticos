import { Model, DataTypes } from 'sequelize';
import { Branch } from '../interfaces/branch.interface';
import { sequelize } from '../config/db';

class BranchModel extends Model<Branch> implements Branch {
    public id!: number
    public name!: string
}

BranchModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { sequelize, tableName: 'branchs' })

export { BranchModel }