import { Request, Response } from "express";
import { CreatePoligono } from "../services/createPoligono.service"
import  {coordenadasInstance} from "../model/coordenadas";

export class createPoligonoController {

    async returnAuth(req: Request, res: Response) {
        const service = new CreatePoligono();

        const result = await service.execute(req, res)

        return result;
    }

    async createBanco(req: Request, res: Response){
        const id = 1;
        await coordenadasInstance.create({...req.body, id})

        return;
    }


}