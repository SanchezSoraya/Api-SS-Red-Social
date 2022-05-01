import {Router} from 'express'; 
import  {deleteHistoria, getHistoria, getHistorias, postHistoria, putHistoria} from '../controllers/historia'

export const router= Router()

router.route('/api/historia').post(postHistoria);
router.route('/api/historia/:id').get(getHistoria).put(putHistoria).delete(deleteHistoria);
router.route('/api/historia/listar').get(getHistorias);
