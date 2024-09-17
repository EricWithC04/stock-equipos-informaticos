import { Router } from "express";
import EquipmentController from "../controllers/equipment.controllers";
import { validator } from "../middleware/validator";
import { equipmentSchema } from "../schemas/Equipment.schema";

const {
    getEquipments,
    getOneEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment
} = EquipmentController

const router = Router();

router.get("/", getEquipments);
router.get("/:id", getOneEquipment);
router.post("/", equipmentSchema, validator, createEquipment);
router.put("/:id", updateEquipment);
router.delete("/:id", deleteEquipment);

export default router