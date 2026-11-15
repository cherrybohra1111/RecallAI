import { Router } from 'express'
import { registerUser } from '../controllers/authController.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { registerValidator } from '../validators/authValidators.js'

const router = Router()

router.post(
  '/register',
  registerValidator(),
  validateRequest,
  registerUser
)

export default router