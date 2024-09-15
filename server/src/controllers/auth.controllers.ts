import { Request, Response } from "express";
import UserService from "../services/user.service";
import { hashPassword } from "../utils/hashString";
import { createJWT } from "../utils/jsonwebtoken";

class AuthController {

    constructor () {}

    async login (req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            
            const user = await UserService.getUserByEmailAndPassword(email, password);

            if (!user) {
                return res.status(400).json({
                    message: 'Credenciales inválidas!'
                })
            }

            const token = await createJWT({ id: user.id });
            res.status(200).json({ token });
        } catch (err) {
            console.error(err);
        }
    }

    async register(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const hashedPassword = await hashPassword(password);

            const user = await UserService.createUser({
                name,
                email,
                password: hashedPassword
            })

            if (!user) {
                return res.status(400).json({
                    message: 'El usuario no pudo ser creado!'
                })
            }

            res.status(201).json(user)
        } catch (err) {
            console.error(err);
        }
    }
}

export default new AuthController()