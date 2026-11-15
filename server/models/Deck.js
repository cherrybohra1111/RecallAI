import mongoose from 'mongoose'
import flashcardSchema from './FlashcardSchema.js'

const deckSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    notes: {
      type: String,
      required: true,
      trim: true,
    },
    cards: {
      type: [flashcardSchema],
      default: [],
    },
  },
  { timestamps: true }
)

const Deck = mongoose.model('Deck', deckSchema)

export default Deck