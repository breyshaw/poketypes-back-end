import { Router } from 'express'
import * as typesCtrl from '../controllers/types.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

//index
router.get('/', typesCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

//create
router.post('/', checkAuth, typesCtrl.createType)

export {
  router
}