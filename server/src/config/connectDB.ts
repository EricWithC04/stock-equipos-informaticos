import { sequelize } from "./db";

export const connectionDB = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos');

            sequelize.sync({ force: true })
                .then(() => {
                    console.log('Base de datos sincronizada');
                })
    })
    .catch(err => {
        console.log(err);
    })
}