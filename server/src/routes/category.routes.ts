import { Router } from "express";
import CategoryController from "../controllers/category.controllers";
import { validator } from "../middleware/validator";
import { categorySchema } from "../schemas/Category.schema";

const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = CategoryController

const router = Router();

router.get("/", getCategories);
router.post("/", categorySchema, validator, createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router