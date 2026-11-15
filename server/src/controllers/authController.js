import User from '../../models/User.js'
import { hashPassword, verifyPassword } from '../../utils/password.js'

export async function registerUser(req, res, next) {
  try {
    const { email, username, password } = req.body

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    })

    if (existingUser) {
      return res.status(409).json({
        message: 'Email or username is already registered.',
      })
    }

    const passwordHash = await hashPassword(password)

    const user = await User.create({
      email,
      username,
      passwordHash,
    })

    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'Email or username is already registered.',
      })
    }

    next(error)
  }
}

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+passwordHash')

    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return res.status(401).json({ message: 'Invalid email or password.' })
    }

    // Give the authenticated user a fresh session ID.
    await new Promise((resolve, reject) => {
      req.session.regenerate((error) => {
        if (error) reject(error)
        else resolve()
      })
    })

    req.session.userId = user.id

    // Wait for MongoDB to save the session before returning success.
    await new Promise((resolve, reject) => {
      req.session.save((error) => {
        if (error) reject(error)
        else resolve()
      })
    })

    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    })
  } catch (error) {
    return next(error)
  }
}

export function getCurrentUser(req, res) {
  return res.status(200).json({
    user: {
      id: req.user.id,
      email: req.user.email,
      username: req.user.username,
    },
  })
}