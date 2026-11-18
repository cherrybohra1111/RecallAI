import Deck from '../../models/Deck.js'

export async function createDeck(req, res, next) {
  try {
    const { title, subject, notes, cards } = req.body

    const deck = await Deck.create({
      title,
      subject,
      notes,
      cards,
      owner: req.user._id,
    })

    return res.status(201).json({ deck })
  } catch (error) {
    return next(error)
  }
}