import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Poligono } from "../model/poligono";

export class PoligonoService {
    async create(req: Request, res: Response) {
        const coordenadasJson = req.body.features[0].geometry.coordinates

        const testeCoordendas = {
            id: randomUUID(),
            longitude: [] as any,
            latitude: [] as any
        }

        coordenadasJson.forEach((x: any) => {
            testeCoordendas.longitude.push(x[0]);
            testeCoordendas.latitude.push(x[1]);
        });

        Poligono.create(testeCoordendas)
        .then(data => {
            return res.status(200).json({message: 'Poligono cadastrado!'});
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json(error);
        })
        
    }

    async get (req: Request, res: Response) {


        Poligono.findAll({order: [['updatedAt', 'DESC']]})
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json(error);
        })
    }

    async getId (req: Request, res: Response){
        const {id} = req.params;

        Poligono.findByPk(id)
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(error => {
            return res.status(400).json(error);
        })
    }

    async put (req: Request, res: Response){
        const coordenadasJson = req.body.features[0].geometry.coordinates

        const testeCoordendas = {
            longitude: [] as any,
            latitude: [] as any
        }

        coordenadasJson.forEach((x: any) => {
            testeCoordendas.longitude.push(x[0]);
            testeCoordendas.latitude.push(x[1]);
        });


        const {id} = req.params;

        Poligono.update(testeCoordendas,{where: {id: id}})
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(error => {
            return res.status(400).json(error);
        })
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        Poligono.destroy({where: {id: id}})
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(error => {
            return res.status(400).json(error);
        })
    }

    async execute(req: Request, res: Response) {

        const corpo = req.body

        if (Object.keys(corpo).length != 2) {
            const response =
            {
                status: '400',
                message: 'Formato da requisição inválido!'
            }

            return res.status(200).json(response);
        }


        if (corpo.email == 'autenticando@spotsat.com.br' && corpo.senha == 'Autentica123') {
            const response =
            {
                status: '200',
                message: 'Autenticado com sucesso!'
            }

            return res.status(200).json(response);
        } else {
            const response =
            {
                status: '401',
                message: 'Falha ao autenticar!'
            }

            return res.status(401).json(response);
        }
    }
}