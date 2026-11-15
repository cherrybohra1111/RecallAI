import { Router } from 'express'
import { getCurrentUser, loginUser, registerUser } from '../controllers/authController.js'
import { requireAuth } from '../middleware/requireAuth.js'
import { validateRequest } from '../middleware/validateRequest.js'
import {
  loginValidator,
  registerValidator,
} from '../validators/authValidators.js'
const router = Router()

router.post(
  '/register',
  registerValidator(),
  validateRequest,
  registerUser
)

router.post(
  '/login',
  loginValidator(),
  validateRequest,
  loginUser
)

router.get('/me', requireAuth, getCurrentUser)
export default router
