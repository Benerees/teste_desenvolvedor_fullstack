import {Router} from 'express'
import {returnMsg, returnAuth} from '../controllers/index.controller'

const router = Router();

router.get('/v1', returnMsg)
router.post('/v1/auth', returnAuth)

export default router;