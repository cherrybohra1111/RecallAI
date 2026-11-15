import User from '../../models/User.js'
import { hashPassword } from '../../utils/password.js'

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