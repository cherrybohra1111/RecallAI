import dns from 'node:dns'
dns.setServers(['1.1.1.1', '8.8.8.8'])

const { default: app } = await import('./app.js')
const { connectDB } = await import('./config/db.js')


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