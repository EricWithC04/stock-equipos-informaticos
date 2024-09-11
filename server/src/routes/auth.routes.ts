import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers";

const {
    register
} = AuthControllers

const router = Router();

router.post("/login", () => {})
router.post("/register", register)

export default router