import app from './app.js'
import router from './routes/index.js'

const port = process.env.PORT || 5173

// Serve HTML
app.use('/',router)

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})