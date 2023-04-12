import { Request, Response } from "express";
import { CreatePoligono } from "../services/createPoligono.service"

export const returnMsg = (req: Request, res: Response) => {
    const response =
    {
        status: '200',
        message: 'Bem vindo a API GeoPoly!'
    }
    console.log(response);
    return res.status(200).json(response);
}

export class createPoligonoController {

    async returnAuth(req: Request, res: Response) {
        const service = new CreatePoligono();

        const result = await service.execute(req, res)

        return result;
    }


}