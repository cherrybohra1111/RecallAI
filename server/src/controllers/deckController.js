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

export async function listDecks(req, res, next) {
  try {
    const decks = await Deck.find({ owner: req.user._id })
      .select('title subject createdAt updatedAt')
      .sort({ updatedAt: -1 })
      .lean()

    return res.status(200).json({ decks })
  } catch (error) {
    return next(error)
  }
}

export async function getDeckById(req, res, next) {
  try {
    const deck = await Deck.findOne({
      _id: req.params.deckId,
      owner: req.user._id,
    })

    if (!deck) {
      return res.status(404).json({ message: 'Deck not found.' })
    }

    return res.status(200).json({ deck })
  } catch (error) {
    return next(error)
  }
}