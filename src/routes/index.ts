import { Router } from 'express'
import { PoligonoController } from '../controllers/Poligono.controller'
import { UserController } from '../controllers/User.controller';
import { Userservice } from '../services/User.service';

const router = Router();
const userController = new UserController()
const poligonoController = new PoligonoController()

router.post('/login', userController.login);

router.post('/posts', poligonoController.createPoligono);
router.put('/posts/:id', poligonoController.put);
router.get('/posts', poligonoController.getPoligonos);
router.get('/posts/:id', poligonoController.getId);
router.delete('/posts/:id', poligonoController.delete);

export default router;