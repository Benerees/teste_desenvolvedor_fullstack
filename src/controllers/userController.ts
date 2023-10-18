import { Request, Response } from "express";
import { Userservice } from "../services/userService";
import { User } from "../model/user";

const service = new Userservice();

export class UserController {

  async login(req: Request, res: Response) {
    try {
      const result = await service.login(req, res)
      
      return res.status(200).json({message: 'Success', token: result })
    } catch (err: any) {
      let statusCode = 500;

      if (err.statusCode) {
        statusCode = err.statusCode;
      }

      return res.status(statusCode).json({ error: 'Login failed', message: err.message });
    }

  }
}