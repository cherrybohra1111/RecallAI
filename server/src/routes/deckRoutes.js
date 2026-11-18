import { Router } from 'express'
import { createDeck, listDecks } from '../controllers/deckController.js'
import { requireAuth } from '../middleware/requireAuth.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { createDeckValidator } from '../validators/deckValidators.js'

const router = Router()

router.get(
    '/',
    requireAuth, 
    listDecks
)

router.post(
  '/',
  requireAuth,
  createDeckValidator(),
  validateRequest,
  createDeck
)

export default router