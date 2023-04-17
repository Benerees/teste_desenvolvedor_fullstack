import {Router} from 'express'
import {PoligonoController} from '../controllers/Poligono.controller'
import { UserController } from '../controllers/User.controller';

const router = Router();

router.post('/login', new UserController().login);

router.post('/posts',new PoligonoController().createPoligono);
router.put('/posts/:id', new PoligonoController().put);
router.get('/posts', new PoligonoController().getPoligonos);
router.get('/posts/:id', new PoligonoController().getId);
router.delete('/posts/:id', new PoligonoController().delete);

export default router;