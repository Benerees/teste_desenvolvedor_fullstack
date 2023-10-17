import { Router } from 'express'
import { PoligonoController } from '../controllers/Poligono.controller'
import { UserController } from '../controllers/User.controller';
import { Userservice } from '../services/User.service';
import authTokenMiddleware from '../middlewares/authToken-middlewaree';

const router = Router();
const userController = new UserController()
const poligonoController = new PoligonoController()

router.post('/login', userController.login);

router.post('/posts',  authTokenMiddleware ,poligonoController.createPoligono);
router.put('/posts/:id', authTokenMiddleware, poligonoController.put);
router.get('/posts', authTokenMiddleware, poligonoController.getPoligonos);
router.get('/posts/:id', authTokenMiddleware, poligonoController.getId);
router.delete('/posts/:id', authTokenMiddleware, poligonoController.delete);

export default router;