import { Model, DataTypes } from 'sequelize';
import { Brand } from '../interfaces/brand.interface';
import { sequelize } from '../config/db';

class BrandModel extends Model<Brand> implements Brand {
    public id!: number
    public name!: string
}

BrandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { sequelize, tableName: 'brands' })

export { BrandModel }