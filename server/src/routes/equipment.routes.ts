import { Router } from "express";
import EquipmentController from "../controllers/equipment.controllers";

const {
    getEquipments,
    getOneEquipment,
    createEquipment,
    updateEquipment
} = EquipmentController

const router = Router();

router.get("/", getEquipments);
router.get("/:id", getOneEquipment);
router.post("/", createEquipment);
router.put("/:id", updateEquipment);

export default router