import { Brand } from "../interfaces/brand.interface";
import { BrandModel } from "../models/brand.model";

class BrandService {

    constructor() {}

    public async getBrands() {
        const brands = await BrandModel.findAll();
        return brands
    }

    public async createBrand(data: Brand) {
        const brand = await BrandModel.create(data);
        return brand
    }

    public async updateBrand(id: number, data: Brand) {
        const brand = await BrandModel.update(data, { where: { id } });
        return brand
    }

    public async deleteBrand(id: number) {
        const brand = await BrandModel.destroy({ where: { id } });
        return brand
    }
}

export default new BrandService()