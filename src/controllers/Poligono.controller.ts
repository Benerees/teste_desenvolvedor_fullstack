import { Request, Response } from "express";
import { PoligonoService } from "../services/Poligono.service"
import jwt from "jsonwebtoken"
import { tokenNotFoundError } from "../errors/token-not-found-error";
import { tokenInvalidError } from "../errors/token-invalid-error";

const service = new PoligonoService()

export class PoligonoController {

    async createPoligono(req: Request, res: Response) {

        try {
            const result = await service.create(req, res);

            return res.status(201).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async getPoligonos(req: Request, res: Response) {
        try {
            const result = await service.get(req, res);

            return res.status(200).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async getId(req: Request, res: Response) {
        try {
            const result = await service.getId(req, res);

            return res.status(200).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const result = await service.delete(req, res)

            return res.status(204).json({ message: 'Success'})
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async put(req: Request, res: Response) {
        try {
            const result = await service.put(req, res)

            return res.status(200).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }
}