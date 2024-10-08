import { Router } from "express";
import BranchController from "../controllers/branch.controllers";
import { validator } from "../middleware/validator";
import { brachSchema } from "../schemas/Branch.schema";

const {
    getBranchs,
    createBranch,
    updateBranch,
    deleteBranch
} = BranchController

const router = Router();

router.get("/", getBranchs);
router.post("/", brachSchema, validator, createBranch);
router.put("/:id", updateBranch);
router.delete("/:id", deleteBranch);

export default router