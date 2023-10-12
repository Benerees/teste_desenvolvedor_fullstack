import { Request, Response } from "express";
import { PoligonoService } from "../services/Poligono.service"
import jwt from "jsonwebtoken"
import { tokenNotFoundError } from "../errors/token-not-found-error";
import { tokenInvalidError } from "../errors/token-invalid-error";

export class PoligonoController {

    async createPoligono(req: Request, res: Response) {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: new tokenNotFoundError().message });
        }

        const jwtError = await jwt.verify(token, 'auth', (err: any, decoded: any) => {
            return err
        });

        if (jwtError != null)
            return res.status(403).json({ message: new tokenInvalidError().message });

        const service = new PoligonoService()

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
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: new tokenNotFoundError().message });
        }

        const jwtError = await jwt.verify(token, 'auth', (err: any, decoded: any) => {
            return err
        });

        if (jwtError != null)
            return res.status(403).json({ message: new tokenInvalidError().message });

        const service = new PoligonoService()

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
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: new tokenNotFoundError().message });
        }

        const jwtError = await jwt.verify(token, 'auth', (err: any, decoded: any) => {
            return err
        });

        if (jwtError != null)
            return res.status(403).json({ message: new tokenInvalidError().message });

        const service = new PoligonoService()
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
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: new tokenNotFoundError().message });
        }

        const jwtError = await jwt.verify(token, 'auth', (err: any, decoded: any) => {
            return err
        });

        if (jwtError != null)
            return res.status(403).json({ message: new tokenInvalidError().message });

        const service = new PoligonoService()
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
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: new tokenNotFoundError().message });
        }

        const jwtError = await jwt.verify(token, 'auth', (err: any, decoded: any) => {
            return err
        });

        if (jwtError != null)
            return res.status(403).json({ message: new tokenInvalidError().message });

        const service = new PoligonoService()
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