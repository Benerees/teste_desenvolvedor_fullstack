import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenNotFoundError } from '../errors/tokenNotFound-error';
import { tokenInvalidError } from '../errors/tokenInvalidError'
function authTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token)
        return res.status(401).json({ message: new tokenNotFoundError().message });

    jwt.verify(token, 'auth', (err: any, decoded: any) => {
        if (err)
            return res.status(403).json({ message: new tokenInvalidError().message });

        next();
    });
}

export default authTokenMiddleware;
