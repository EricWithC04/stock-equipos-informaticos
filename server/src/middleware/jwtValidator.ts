import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../environments/environments";

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(400).json({ message: "No se ha enviado el token" });
        }

        const { id } = jwt.verify(token, env.SECRET) as { id: number };

        req.body.userId = id;
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}