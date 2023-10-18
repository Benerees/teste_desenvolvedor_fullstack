import { Router } from 'express'
import { PoligonoController } from '../controllers/poligonoController'
import { UserController } from '../controllers/userController';
import { Userservice } from '../services/userService';
import authTokenMiddleware from '../middlewares/authTokenMiddlewaree';

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