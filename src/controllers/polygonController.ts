import { Request, Response } from "express";
import { PoligonoService } from "../services/polygonService"
import { GeometryType } from "../types/geometryType";
import { PolygonType } from "types/polygonType";

const service = new PoligonoService()

export class PolygonController {

    async createPolygon(req: Request, res: Response) {
        const geometria: PolygonType = {
            id: req.params['id'],
            geometry: req.body.features[0].geometry
        }

        try {
            const result = await service.create(geometria);

            return res.status(201).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async getAllPolygons(req: Request, res: Response) {
        try {
            const result = await service.getAll();

            return res.status(200).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async getByIdPolygon(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await service.getById(id);

            return res.status(200).json({ message: 'Success', result: result })
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async deletePolygon(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await service.delete(id)

            return res.status(204).json({ message: 'Success'})
        } catch (err: any) {
            let statusCode = 500;

            if (err.statusCode) {
                statusCode = err.statusCode;
            }

            return res.status(statusCode).json({ error: 'Get Poligon failed', message: err.message });
        }
    }

    async putPolygon(req: Request, res: Response) {
        const geometria: PolygonType = {
            id: req.params['id'],
            geometry: req.body.features[0].geometry
        }

        try {   
            const result = await service.put(geometria)

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