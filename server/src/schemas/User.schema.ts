import { body } from "express-validator";

export const userSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser una cadena de texto")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
    body("email")
        .exists().withMessage("El email es requerido")
        .isEmail().withMessage("Email invalido"),
    body("password")
        .exists().withMessage("La contraseña es requerida")
        .isString().withMessage("La contraseña debe ser un string")
        .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
]

export const loginSchema = [
    body("email")
        .exists().withMessage("El email es requerido")
        .isEmail().withMessage("Email invalido"),
    body("password")
        .exists().withMessage("La contraseña es requerida")
        .isString().withMessage("La contraseña debe ser un string")
        .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
]