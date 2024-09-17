import { body } from "express-validator";

export const categorySchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser una cadena de texto")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracter")
]