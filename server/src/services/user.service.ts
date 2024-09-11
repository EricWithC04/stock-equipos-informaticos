import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

class UserService {

    constructor() {}

    async getUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    async getOneUser(id: number) {
        const user = await UserModel.findOne({ where: { id } });
        return user;
    }

    async createUser(data: User) {
        const user = await UserModel.create(data);
        return user;
    }

    async updateUser(id: number, data: User) {
        const user = await UserModel.update(data, { where: { id } });
        return user;
    }

    async deleteUser(id: number) {
        const user = await UserModel.findOne({ where: { id } });

        if (!user) {
            throw new Error('User not found');
        }

        user.update({ state: false });

        return user;
    }
}

export default new UserService()