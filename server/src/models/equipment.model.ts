import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { Equipment } from '../interfaces/equipment.interface';

class EquipmentModel extends Model<Equipment> implements Equipment {
    public id!: number;
    public name!: string;
    public model!: string;
    public serial!: string;
}

EquipmentModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.STRING
    },
    serial: {
        type: DataTypes.STRING
    }
}, { sequelize, tableName: 'equipments' })

export { EquipmentModel }