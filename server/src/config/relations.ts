import { EquipmentModel } from "../models/equipment.model";
import { BrandModel } from "../models/brand.model";
import { CategoryModel } from "../models/category.model";

export const associations = () => {
    return new Promise(( resolve, reject ) => {
        try {
            BrandModel.hasMany(EquipmentModel, {
                foreignKey: 'brandId',
                sourceKey: 'id',
            })
            EquipmentModel.belongsTo(BrandModel, {
                foreignKey: 'brandId',
                targetKey: 'id',
                as: 'brand'
            })
            
            CategoryModel.hasMany(EquipmentModel, {
                foreignKey: 'categoryId',
                sourceKey: 'id',
            })
            EquipmentModel.belongsTo(CategoryModel, {
                foreignKey: 'categoryId',
                targetKey: 'id',
                as: 'category'
            })
            resolve({ message: "Relaciones establecidas" });
        } catch (err) {
            console.error(err);
            reject(err);
        }
    })
}