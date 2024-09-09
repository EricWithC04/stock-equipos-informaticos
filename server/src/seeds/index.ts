import { seedCategories } from "./categories.seeds";

export const seedAll = async () => {
    await seedCategories();
}