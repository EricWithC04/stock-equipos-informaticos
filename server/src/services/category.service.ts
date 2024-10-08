import { Category } from "../interfaces/category.interface";
import { CategoryModel } from "../models/category.model";

class CategoryService {
    private static instance: CategoryService
    private constructor() {}

    public static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance;
    }

    public async getCategories() {
        const categories = await CategoryModel.findAll();
        return categories
    }

    public async createCategory(data: Category) {
        const category = await CategoryModel.create(data);
        return category
    }

    public async updateCategory(id: number, data: Category) {
        const category = await CategoryModel.update(data, { where: { id } });
        return category
    }

    public async deleteCategory(id: number) {
        const category = await CategoryModel.destroy({ where: { id } });
        return category
    }
}

export default CategoryService.getInstance()