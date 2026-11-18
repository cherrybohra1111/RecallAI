import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import authRoutes from './routes/authRoutes.js'
import deckRoutes from './routes/deckRoutes.js'

const app = express()


app.use(express.json())

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRoutes)
app.use('/api/decks', deckRoutes)

export default app