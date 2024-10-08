import { body } from "express-validator";

export const brachSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser una cadena de texto")
        .isLength({ min: 1 }).withMessage("El nombre debe tener al menos 1 caracter")
]