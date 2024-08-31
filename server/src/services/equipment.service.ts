import { Equipment } from "../interfaces/equipment.interface";
import { EquipmentModel } from "../models/equipment.model";

class EquipmentService {

    constructor() {}

    public async getEquipments() {
        const equipment = await EquipmentModel.findAll();
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