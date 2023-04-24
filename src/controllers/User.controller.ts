import { Request, Response } from "express";
import { Userservice } from "../services/User.service";
import { User } from "../model/user";

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
            .then(data => { })
            .catch(err => {
              console.log(err)
            });
        }
      })
  }

  async login(req: Request, res: Response) {
    const service = new Userservice();

    try {
      return await service.login(req, res)
    } catch (err) {
      return res.status(400).json(err);
    }

  }
}