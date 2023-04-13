import {Router} from 'express'
import {createPoligonoController} from '../controllers/createPoligono.controller'

const router = Router();

router.post('/v1/auth', new createPoligonoController().returnAuth);
router.post('/create', new createPoligonoController().createBanco);


router.post('/login');

router.post('/posts');
router.put('/posts/{id}');
router.get('/posts');
router.get('/posts/{id}');
router.delete('/posts/{id}');

export default router;