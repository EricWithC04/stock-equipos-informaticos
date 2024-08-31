import { Router } from "express";
import BrandController from "../controllers/brand.controllers";

const {
    getBrands,
    createBrand,
    updateBrand,
    deleteBrand
} = BrandController

const router = Router();

router.get("/", getBrands);
router.post("/", createBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);

export default router