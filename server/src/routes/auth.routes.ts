import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers";
import UserControllers from "../controllers/user.controllers";
import { validator } from "../middleware/validator";
import { userSchema, loginSchema } from "../schemas/User.schema";
import { authenticateUser } from "../middleware/jwtValidator";

const {
    register,
    login
} = AuthControllers

const router = Router();

router.get("/user-data", authenticateUser, UserControllers.ctrlGetUserDataByToken)
router.post("/login", loginSchema, validator, login)
router.post("/register", userSchema, validator, register)

export default router