// sets global variables on process.env from .env file
require('dotenv').config();

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
const { NODE_ENV, DB_URL } = process.env;

const { apiRouter } = require('./routes/index');

var app = express();
var db;

// connect to database
mongoose.connect(DB_URL, { useNewUrlParser: true });
db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

if(NODE_ENV === 'development') {
  app.use(logger('dev'));
  db.once('open', () => console.log('Connected to MongoDB'));
}

if(NODE_ENV === 'production') {
  // production middleware here
  app.use(helmet());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// api route
app.use('/api', apiRouter);

// error handler
app.use((err, res, req, next) => {
  console.log('There was an error!')
  res.end()
})

// load index.html on all route requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

module.exports = { app, db };
