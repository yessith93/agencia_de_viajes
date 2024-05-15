import app from './app.js'
import router from './routes/index.js'
import db from './config/db.js'

const port = process.env.PORT || 5173

db.authenticate()
    .catch( error => console.log(error));

// Serve HTML
app.use('/',router)

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})