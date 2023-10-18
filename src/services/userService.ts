import { Request, Response } from "express";
import { User } from "../model/user";
import jwt from "jsonwebtoken";
import { userNotFoundError } from "../errors/userNotFoundError";
import { userInvalidCredentials } from "../errors/userInvalidCredentialsError";

export class Userservice {
    async login(req: Request, res: Response) {
        const body = req.body

        const user = await User.findOne({ where: { email: body.email } });

        if (!user) {
            throw new userNotFoundError();
        }

        const userData = user.dataValues;

        if (userData.password != body.password) 
            throw new userInvalidCredentials()
            
        const token = jwt.sign({ sub: userData.email }, 'auth');
        return token;
    }
}