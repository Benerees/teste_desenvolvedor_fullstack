import { Router } from 'express'
import { PolygonController } from '../controllers/polygonController'
import { UserController } from '../controllers/userController';
import { Userservice } from '../services/userService';
import { authTokenMiddleware } from '../middlewares/authTokenMiddlewaree';

const router = Router();
const userController = new UserController()
const polygonController = new PolygonController()

router.post('/login', userController.login);

router.post('/posts',  authTokenMiddleware ,polygonController.createPolygon);
router.put('/posts/:id', authTokenMiddleware, polygonController.putPolygon);
router.get('/posts', authTokenMiddleware, polygonController.getAllPolygons);
router.get('/posts/:id', authTokenMiddleware, polygonController.getByIdPolygon);
router.delete('/posts/:id', authTokenMiddleware, polygonController.deletePolygon);

export default router;