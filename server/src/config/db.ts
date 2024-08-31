import { Sequelize } from "sequelize";
import env from "../environments/environments"

const {
    NAME,
    PASSWORD,
    USER,
    HOST,
    PORT,
    DIALECT
} = env.DB

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: HOST,
    port: parseInt(PORT),
    dialect: DIALECT,
    logging: false
})

export { sequelize }