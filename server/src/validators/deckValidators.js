import { body, param } from 'express-validator'
import { FLASHCARD_STATUS } from '../../utils/constants.js'

export function createDeckValidator() {
  return [
    body('title')
      .isString()
      .withMessage('Title must be text.')
      .bail()
      .trim()
      .notEmpty()
      .withMessage('Title is required.')
      .bail()
      .isLength({ max: 120 })
      .withMessage('Title cannot exceed 120 characters.'),

    body('subject')
      .isString()
      .withMessage('Subject must be text.')
      .bail()
      .trim()
      .notEmpty()
      .withMessage('Subject is required.')
      .bail()
      .isLength({ max: 100 })
      .withMessage('Subject cannot exceed 100 characters.'),

    body('notes')
      .isString()
      .withMessage('Notes must be text.')
      .bail()
      .trim()
      .notEmpty()
      .withMessage('Notes are required.')
      .bail()
      .isLength({ max: 50000 })
      .withMessage('Notes cannot exceed 50,000 characters.'),

    body('cards')
      .isArray({ max: 100 })
      .withMessage('Cards must be an array with at most 100 cards.'),

    body('cards.*.question')
      .isString()
      .withMessage('Each card question must be text.')
      .bail()
      .trim()
      .notEmpty()
      .withMessage('Each card needs a question.')
      .bail()
      .isLength({ max: 500 })
      .withMessage('A question cannot exceed 500 characters.'),

    body('cards.*.answer')
      .isString()
      .withMessage('Each card answer must be text.')
      .bail()
      .trim()
      .notEmpty()
      .withMessage('Each card needs an answer.')
      .bail()
      .isLength({ max: 5000 })
      .withMessage('An answer cannot exceed 5,000 characters.'),

    body('cards.*.status')
      .optional()
      .isIn(Object.values(FLASHCARD_STATUS))
      .withMessage('A card has an invalid status.'),
  ]
}

export function deckIdValidator() {
  return [
    param('deckId')
      .isMongoId()
      .withMessage('Invalid deck ID.'),
  ]
}