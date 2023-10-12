import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Poligono } from "../model/poligono";
import { PoligonoNotFoundError } from "../errors/poligono-not-found-error";

export class PoligonoService {

    async create(req: Request, res: Response) {
        const coordinatesJson = req.body.features[0].geometry.coordinates

        const coordinates = {
            id: randomUUID(),
            longitude: [] as any,
            latitude: [] as any
        }

        coordinatesJson.forEach((x: any) => {
            coordinates.longitude.push(x[0]);
            coordinates.latitude.push(x[1]);
        });

        const result = await Poligono.create(coordinates)
        
        return result.dataValues;
    }

    async get(req: Request, res: Response) {
        const data = await Poligono.findAll({ order: [['updatedAt', 'DESC']] })

        if (data.length === 0)
            throw new PoligonoNotFoundError();
        
        return data[0].dataValues
    }

    async getId(req: Request, res: Response) {
        const { id } = req.params;

        const data = await Poligono.findByPk(id)

        if (!data)
            throw new PoligonoNotFoundError();
        
        return data.dataValues
    }

    async put(req: Request, res: Response) {
        const coordinatesJson = req.body.features[0].geometry.coordinates

        const coordinates = {
            longitude: [] as any,
            latitude: [] as any
        }

        coordinatesJson.forEach((x: any) => {
            coordinates.longitude.push(x[0]);
            coordinates.latitude.push(x[1]);
        });

        const { id } = req.params;

        const result = await Poligono.update(coordinates, { where: { id: id } })
        
        return result
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        await Poligono.destroy({ where: { id: id } })
        
        return true
    }
}