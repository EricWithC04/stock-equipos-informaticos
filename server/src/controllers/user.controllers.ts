import { Request, Response } from "express";
import UserService from "../services/user.service";
import { User } from "../interfaces/user.interface";

class UserControllers {

    constructor () {}

    async ctrlGetUsers(_req: Request, res: Response) {
        try {
            const users = await UserService.getUsers();
        
            if (!users || !users.length) {
                return res.status(404).json({ message: "No hay usuarios registrados" });
            }
        
            res.status(200).json(users);
        } catch (err) {
            console.error(err);
        }
    };

    async ctrlGetOneUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UserService.getOneUser(parseInt(id));
        
            if (!user) {
                return res.status(404).json({ message: "No existe el usuario" });
            }
        
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
        }
    };

    async ctrlCreateUser(req: Request, res: Response) {
        try {
            const data: User = req.body;
            const user = await UserService.createUser(data);
        
            if (!user) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido crear el usuario!'
                });
            }
        
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
        }
    };

    async ctrlUpdateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: User = req.body;

            const user = await UserService.updateUser(parseInt(id), data);

            if (!user) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido actualizar el usuario!'
                });
            }

            res.status(200).json(user);
        } catch (err) {
            console.error(err);
        }
    }

    async ctrlDeleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UserService.deleteUser(parseInt(id));
        
            if (!user) {
                return res.status(404).json({ message: "No existe el usuario" });
            }
        
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
        }
    }
}

export default new UserControllers()