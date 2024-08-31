import { Dialect } from "sequelize"

export interface Environments {
    PORT: string
    HOST: string
    DB: {
        NAME: string
        USER: string
        PASSWORD: string
        PORT: string
        HOST: string
        DIALECT: Dialect
    }
}