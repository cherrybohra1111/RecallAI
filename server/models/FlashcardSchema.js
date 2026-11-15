import mongoose from 'mongoose'
import { FLASHCARD_STATUS } from '../utils/constants.js'

const flashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: Object.values(FLASHCARD_STATUS),
    default: FLASHCARD_STATUS.UNREVIEWED,
  },
})

export default flashcardSchema