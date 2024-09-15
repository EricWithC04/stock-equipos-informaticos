import jwt from "jsonwebtoken";
import env from "../environments/environments";

export const createJWT = (payload: { id: number }) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, env.SECRET, (err, token) => {
            if (err) {
                reject("Error while creating the token");
            }

            resolve(token);
        });
    });
};