import { body } from 'express-validator'

export function registerValidator() {
  return [
    body('email')
      .isString()
      .withMessage('Email must be text.')
      .bail()
      .trim()
      .isEmail()
      .withMessage('Please provide a valid email.')
      .normalizeEmail(),

    body('username')
      .isString()
      .withMessage('Username must be text.')
      .bail()
      .trim()
      .toLowerCase()
      .isLength({ min: 3, max: 30 })
      .withMessage('Username must be 3–30 characters.')
      .matches(/^[a-z0-9_]+$/)
      .withMessage('Username can use lowercase letters, numbers, and underscores.'),

    body('password')
      .isString()
      .withMessage('Password must be text.')
      .bail()
      .custom((password) => password.trim().length > 0)
      .withMessage('Password cannot be blank.')
      .bail()
      .isLength({ min: 8, max: 128 })
      .withMessage('Password must be 8–128 characters.'),
  ]
}