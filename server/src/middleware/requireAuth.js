import User from '../../models/User.js'

export async function requireAuth(req, res, next) {
  try {
    const userId = req.session?.userId

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required.' })
    }

    const user = await User.findById(userId)

    if (!user) {
      return res.status(401).json({ message: 'Authentication required.' })
    }

    req.user = user
    return next()
  } catch (error) {
    return next(error)
  }
}