// sets global variables on process.env from .env file
require('dotenv').config()

const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const helmet = require('helmet')
const { seedDatabase } = require('./db/utils')
const { NODE_ENV, DB_URL } = process.env
const { apiRouter } = require('./routes/index')
const app = express()

const sessionOptions = {
  secret: 'thesis',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}

let db

app.use(session(sessionOptions))
app.use(bodyParser.json())

// connect to database
mongoose.connect(DB_URL, { useNewUrlParser: true })
db = mongoose.connection

if(NODE_ENV === 'development') {
  app.use(logger('dev'))
  db.once('open', () => {
    console.log('Connected to MongoDB')
    seedDatabase(true)
  })
  db.on('error', console.error.bind(console, 'connection error:'))
}

if(NODE_ENV === 'production') {
  app.set('trust proxy', 1)

  // production middleware here
  app.use(helmet())

  // use mongo for storing sessions
  sessionOptions.store = new MongoStore({
    mongooseConnection: db
  })

  sessionOptions.cookie.secure = true
}

app.use(session(sessionOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')))

// app.use('/', indexRouter)

// api route
app.use('/api', apiRouter)

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'))
})

// error handler, needs 4 params
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ ...err.error, authenticated: false })
})

module.exports = { app, db }
