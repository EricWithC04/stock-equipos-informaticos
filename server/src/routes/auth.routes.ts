import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers";
import { validator } from "../middleware/validator";
import { userSchema, loginSchema } from "../schemas/User.schema";

const {
    register,
    login
} = AuthControllers

const router = Router();

router.post("/login", loginSchema, validator, login)
router.post("/register", userSchema, validator, register)

export default router