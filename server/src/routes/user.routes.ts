import { Router } from "express";
import UserControllers from "../controllers/user.controllers";

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
router.post("/", ctrlCreateUser);
router.put("/:id", ctrlUpdateUser);
router.delete("/:id", ctrlDeleteUser);

export default router