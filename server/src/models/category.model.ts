import { Model, DataTypes } from 'sequelize';
import { Category } from '../interfaces/category.interface';
import { sequelize } from '../config/db';

class CategoryModel extends Model<Category> implements Category {
    public id!: number
    public name!: string
}

CategoryModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { sequelize, tableName: 'categories' })

export { CategoryModel }