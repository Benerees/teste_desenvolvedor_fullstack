import {Router} from 'express'
import {returnMsg, createPoligonoController} from '../controllers/createPoligono.controller'

const router = Router();

router.get('/v1', returnMsg)
router.post('/v1/auth', new createPoligonoController().returnAuth)

export default router;