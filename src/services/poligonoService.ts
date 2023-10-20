import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Poligono } from "../model/poligono";
import { PoligonoNotFoundError } from "../errors/poligonoNotFoundError";
import { GeometryType } from "../types/geometryType";

export class PoligonoService {

    async create(req: Request) {
        const coordinatesJson: GeometryType = req.body.features[0].geometry

        const geometry = {
            id: randomUUID(),
            geometry: coordinatesJson
        }

        const result = await Poligono.create(geometry)

        return result.dataValues;
    }

    async get(req: Request) {
        const data = await Poligono.findAll({ order: [['updatedAt', 'DESC']] })

        if (data.length === 0)
            throw new PoligonoNotFoundError();

        const allData = data.map(item => item.dataValues);

        return allData
    }

    async getById(req: Request) {
        const { id } = req.params;

        const data = await Poligono.findByPk(id)

        if (!data)
            throw new PoligonoNotFoundError();

        return data.dataValues
    }

    async put(req: Request) {
        const coordinatesJson: GeometryType = req.body.features[0].geometry

        const { id } = req.params;

        const result = await Poligono.update({geometry: coordinatesJson}, { where: { id: id } })

        return result
    }

    async delete(req: Request) {
        const { id } = req.params;

        await Poligono.destroy({ where: { id: id } })

        return true
    }
}