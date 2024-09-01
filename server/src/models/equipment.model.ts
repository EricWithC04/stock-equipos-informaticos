import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { Equipment } from '../interfaces/equipment.interface';

class EquipmentModel extends Model<Equipment> implements Equipment {
    public id!: number;
    public model!: string;
    public serial!: string;
    public stock!: number;
}

EquipmentModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    model: {
        type: DataTypes.STRING
    },
    serial: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    }
}, { sequelize, tableName: 'equipments' })

export { EquipmentModel }