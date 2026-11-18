import { Router } from 'express'
import { createDeck, listDecks, getDeckById } from '../controllers/deckController.js'
import { requireAuth } from '../middleware/requireAuth.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { createDeckValidator, deckIdValidator } from '../validators/deckValidators.js'

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

router.get(
  '/:deckId',
  requireAuth,
  deckIdValidator(),
  validateRequest,
  getDeckById
)
export default router