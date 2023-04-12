import { Request, Response } from "express";

export class CreatePoligono {
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

        return
    }
}