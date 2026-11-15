import dns from 'node:dns'
import app from './app.js'
import { connectDB } from './config/db.js'

dns.setServers(['1.1.1.1', '8.8.8.8'])

const PORT = process.env.PORT || 3000

async function startServer() {
  try {
    await connectDB()
    
    app.listen(PORT, () => {
      console.log(`RecallAI server listening on port ${PORT}`)
    })
  }
  catch (error){
    console.error('Failed to start server:', error.message)
    process.exit(1)  
  }
}

startServer()