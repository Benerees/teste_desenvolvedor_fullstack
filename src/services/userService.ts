import { Request, Response } from "express";
import { User } from "../model/user";
import jwt from "jsonwebtoken";
import { userNotFoundError } from "../errors/userNotFoundError";
import { userInvalidCredentials } from "../errors/userInvalidCredentialsError";
import { UserType } from "types/userType";

export class Userservice {
    async login(userReq: UserType) {
        const user = await User.findOne({ where: { email: userReq.email } });

        if (!user) {
            throw new userNotFoundError();
        }

        const userData = user.dataValues;

        if (userData.password != userReq.password) 
            throw new userInvalidCredentials()
            
        const token = jwt.sign({ sub: userData.email }, 'auth');
        
        return token;
    }
}