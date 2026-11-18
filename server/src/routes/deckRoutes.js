import { Router } from 'express'
import { createDeck } from '../controllers/deckController.js'
import { requireAuth } from '../middleware/requireAuth.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { createDeckValidator } from '../validators/deckValidators.js'

const router = Router()

router.post(
  '/',
  requireAuth,
  createDeckValidator(),
  validateRequest,
  createDeck
)

export default router