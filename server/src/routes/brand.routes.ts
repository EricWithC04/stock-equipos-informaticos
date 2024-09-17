import { Router } from "express";
import BrandController from "../controllers/brand.controllers";
import { validator } from "../middleware/validator";
import { brandSchema } from "../schemas/Brand.schema";

const {
    getBrands,
    createBrand,
    updateBrand,
    deleteBrand
} = BrandController

const router = Router();

router.get("/", getBrands);
router.post("/", brandSchema, validator, createBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);

export default router