import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Poligono } from "../model/poligono";

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

        Poligono.create(coordinates)
            .then(data => {
                return res.status(201).json({ message: 'Poligono cadastrado!' });
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json(error);
            })
    }

    async get(req: Request, res: Response) {
        Poligono.findAll({ order: [['updatedAt', 'DESC']] })
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json(error);
            })
    }

    async getId(req: Request, res: Response) {
        const { id } = req.params;

        Poligono.findByPk(id)
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json(error);
            })
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

        Poligono.update(coordinates, { where: { id: id } })
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json(error);
            })
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        Poligono.destroy({ where: { id: id } })
            .then(data => {
                return res.status(200).json(data);
            })
            .catch(error => {
                console.log(error)
                return res.status(400).json(error);
            })
    }
}