import { Request, Response } from "express";
import UserService from "../services/user.service";
import { hashPassword } from "../utils/hashString";

class AuthController {

    constructor () {}

    async login (req: Request, res: Response) {
        const { email, password } = req.body;
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