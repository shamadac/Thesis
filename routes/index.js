const express = require('express')
const router = express.Router()

router.post('/register', require('./register'))

module.exports = {
  indexRouter: router,
  apiRouter: require('./api')
}