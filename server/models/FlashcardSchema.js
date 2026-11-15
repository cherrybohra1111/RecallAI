import mongoose from 'mongoose'

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
    enum: ['unreviewed', 'known', 'needs_review'],
    default: 'unreviewed',
  },
})

export default flashcardSchema