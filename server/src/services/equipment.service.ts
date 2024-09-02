import { Equipment } from "../interfaces/equipment.interface";
import { BrandModel } from "../models/brand.model";
import { CategoryModel } from "../models/category.model";
import { EquipmentModel } from "../models/equipment.model";

class EquipmentService {

    constructor() {}

    public async getEquipments() {
        const equipment = await EquipmentModel.findAll({
            attributes: ['id', 'model', 'serial', 'stock'],
            include: [
                { 
                    model: BrandModel,
                    as: "brand",
                    attributes: ['name'],
                },
                { 
                    model: CategoryModel,
                    as: "category",
                    attributes: ['name'],
                },
            ]
        });
        return equipment;
    }

    public async getOneEquipment(id: number) {
        const equipment = await EquipmentModel.findOne({ where: { id } });
        return equipment;
    }

    public async createEquipment(data: Equipment) {
        const equipment = await EquipmentModel.create(data);
        return equipment;
    }

    public async updateEquipment(id: number, data: Equipment) {
        const equipment = await EquipmentModel.update(data, { where: { id } });
        return equipment;
    }

}

export default new EquipmentService()