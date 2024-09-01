import { sequelize } from "./db";
import { associations } from "./relations";

export const connectionDB = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos');

            sequelize.sync({ alter: true })
                .then(() => {
                    console.log('Base de datos sincronizada');
                })

            associations()
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
    })
    .catch(err => {
        console.log(err);
    })
}