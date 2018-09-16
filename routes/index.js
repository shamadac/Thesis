const express = require('express')
const path = require('path')
const router = express.Router()

// load index.html on all route requests
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

module.exports = {
  indexRouter: router,
  apiRouter: require('./api')
}