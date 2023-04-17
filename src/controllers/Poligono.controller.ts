import { Request, Response } from "express";
import { PoligonoService } from "../services/Poligono.service"
import  jwt  from "jsonwebtoken"

export class PoligonoController {

    async createPoligono(req: Request, res: Response) {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        jwt.verify(token, 'auth', (err: any, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
        });

        const service = new PoligonoService();

        try {
            const result = await service.create(req, res);

            return result;

        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async getPoligonos(req: Request, res: Response) {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        jwt.verify(token, 'auth', (err: any, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
        });

        const service = new PoligonoService();

        try {
            const result = await service.get(req, res);

            return result
        } catch (err) {
            return res.status(400).json(err)
        }
    }

    async getId(req: Request, res: Response) {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        jwt.verify(token, 'auth', (err: any, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
        });

        const service = new PoligonoService();

        try {
            const result = await service.getId(req, res);

            return result
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async delete(req: Request, res: Response) {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        jwt.verify(token, 'auth', (err: any, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
        });

        const service = new PoligonoService();

        try {
            const result = await service.delete(req, res)
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async put(req: Request, res: Response) {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({ message: 'Token não encontrado' });
        }

        jwt.verify(token, 'auth', (err: any, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
        });

        const service = new PoligonoService();

        try {
            const result = await service.put(req, res)
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}