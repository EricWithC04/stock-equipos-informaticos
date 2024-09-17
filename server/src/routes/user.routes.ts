import { Router } from "express";
import UserControllers from "../controllers/user.controllers";
import { validator } from "../middleware/validator";
import { userSchema } from "../schemas/User.schema";

const {
    ctrlGetUsers,
    ctrlGetOneUser,
    ctrlCreateUser,
    ctrlUpdateUser,
    ctrlDeleteUser
} = UserControllers

const router = Router();

router.get("/", ctrlGetUsers);
router.get("/:id", ctrlGetOneUser);
router.post("/", userSchema, validator, ctrlCreateUser);
router.put("/:id", ctrlUpdateUser);
router.delete("/:id", ctrlDeleteUser);

export default router