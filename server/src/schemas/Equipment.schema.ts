import { body } from "express-validator";

export const equipmentSchema = [
    body("categoryId")
        .exists().withMessage("La categoria es requerida")
        .isNumeric().withMessage("La categoria debe ser un id de categoria"),
    body("brandId")
        .exists().withMessage("La marca es requerida")
        .isNumeric().withMessage("La marca debe ser un id de marca"),
    body("model")
        .exists().withMessage("El modelo es requerido")
        .isString().withMessage("El modelo debe ser una cadena de texto")
        .isLength({ min: 1 }).withMessage("El modelo debe tener al menos 1 caracter"),
    body("serial")
        .exists().withMessage("El numero de serie es requerido")
        .isString().withMessage("El numero de serie debe ser una cadena de texto")
        .isLength({ min: 1 }).withMessage("El numero de serie debe tener al menos 1 caracter"),
    body("stock")
        .exists().withMessage("La cantidad en stock es requerida")
        .isNumeric().withMessage("La cantidad en stock debe ser un numero"),
]