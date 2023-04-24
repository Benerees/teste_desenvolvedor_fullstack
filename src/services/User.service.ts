import { Request, Response } from "express";
import { User } from "../model/user";
import  jwt  from "jsonwebtoken";

export class Userservice {
    
    async login(req: Request, res: Response) {
        const body = req.body

        User.findOne({ where: { email: body.email } })
            .then(data => {
                if (!data) {
                    const message = {
                        message: 'Usuário não encontrado'
                    };
                    return res.status(204).json(message);
                }

                const userData = data.dataValues

                if(userData.password == body.password){
                    const token = jwt.sign({ sub: userData.email}, 'auth')

                    return res.status(204).json({token:token})
                }else{
                    const message = {
                        message: 'Credenciais inválidas'
                    };

                    return res.status(200).json(message);
                }
            })
            .catch(error => {
                return res.status(400).json(error);
            })
    }
}