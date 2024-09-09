import categoryService from "../services/category.service"

const initialCategories = [
    { name: "Notebook" },
    { name: "Impresora" },
    { name: "Router" },
    { name: "Proyector" },
]

export const seedCategories = async () => {
    const categories = await categoryService.getCategories()

    if (categories.length === 0) {
        for (const category of initialCategories) {
            await categoryService.createCategory(category)
        }
    }
}