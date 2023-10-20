import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Polygon } from "../model/polygon";
import { PolygonNotFoundError } from "../errors/polygonNotFoundError";
import { GeometryType } from "../types/geometryType";
import { PolygonType } from "types/polygonType";

export class PoligonoService {

    async create(polygon: PolygonType) {

        polygon.id = randomUUID()

        const result = await Polygon.create(polygon)

        return result.dataValues;
    }

    async getAll() {
        const data = await Polygon.findAll({ order: [['updatedAt', 'DESC']] })

        if (data.length === 0)
            throw new PolygonNotFoundError();

        const allData = data.map(item => item.dataValues);

        return allData
    }

    async getById(id: string) {

        const data = await Polygon.findByPk(id)

        if (!data)
            throw new PolygonNotFoundError();

        return data.dataValues
    }

    async put(polygon: PolygonType) {


        const result = await Polygon.update({ geometry: polygon.geometry }, { where: { id: polygon.id } })

        return result
    }

    async delete(id: string) {


        await Polygon.destroy({ where: { id: id } })

        return true
    }
}