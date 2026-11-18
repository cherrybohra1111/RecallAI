import { Router } from 'express'
import {
  createDeck,
  deleteDeck,
  getDeckById,
  listDecks,
  updateDeck
} from '../controllers/deckController.js'
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

router.delete(
  '/:deckId',
  requireAuth,
  deckIdValidator(),
  validateRequest,
  deleteDeck
)

router.put(
  '/:deckId',
  requireAuth,
  deckIdValidator(),
  createDeckValidator(),
  validateRequest,
  updateDeck
)

export default router