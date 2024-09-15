import { Environments } from "../interfaces/environments.interface"
import { Dialect } from "sequelize"
import "dotenv/config"

const environments: Environments = {
    PORT: process.env.PORT!,
    HOST: process.env.HOST!,
    SECRET: process.env.SECRET!,
    DB: {
        NAME: process.env.DB_NAME!,
        USER: process.env.DB_USER!,
        PASSWORD: process.env.DB_PASSWORD!,
        PORT: process.env.DB_PORT!,
        HOST: process.env.DB_HOST!,
        DIALECT: process.env.DB_DIALECT as Dialect
    }
}

export default environments