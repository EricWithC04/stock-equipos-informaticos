import { Router } from "express";
import CategoryController from "../controllers/category.controllers";

const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = CategoryController

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router