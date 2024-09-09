import { sequelize } from "./db";
import { associations } from "./relations";
import { seedAll } from "../seeds";

export const connectionDB = async () => {
    sequelize.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos');

            sequelize.sync({ alter: true })
                .then(async () => {
                    console.log('Base de datos sincronizada');

                    await seedAll()
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