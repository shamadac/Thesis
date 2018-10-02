require('dotenv').config()
const mongoose = require('mongoose')
const { DB_URL } = process.env
let db

// connect to database
mongoose.connect(DB_URL, { useNewUrlParser: true })
db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db