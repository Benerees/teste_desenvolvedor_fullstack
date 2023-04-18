import { Request, Response } from "express";
import { Userservice } from "../services/User.service";
import { User, userInstance } from "../model/user";
import sequelize from "../config/database.config";

export class UserController {


  async createUsuario() {

    const testeUsuario = {
      id: '1',
      name: 'teste',
      password: 'teste',
      email: 'teste@gmail.com'
    }

    User.findOne({ where: { email: 'teste@gmail.com' } })
      .then(data => {

        if (!data) {
          User.create(testeUsuario)
            .then(data => {

            })
            .catch(err => {
              console.log(err)
            });
        }
      })
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body

    const service = new Userservice();

    try {
      const result = await service.login(req, res)
    } catch (err) {
      return res.status(400).json(err);
    }

  }
}