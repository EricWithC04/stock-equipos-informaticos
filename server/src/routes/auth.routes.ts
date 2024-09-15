import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers";

const {
    register,
    login
} = AuthControllers

const router = Router();

router.post("/login", login)
router.post("/register", register)

export default router