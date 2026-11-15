import { validationResult } from 'express-validator'

export function validateRequest(req, res, next) {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    const errors = result.array().map(({ path, msg }) => ({
      field: path,
      message: msg,
    }))

    return res.status(400).json({
      message: 'Request validation failed.',
      errors,
    })
  }

  next()
}