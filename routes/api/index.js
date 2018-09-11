const express = require('express')
const router = express.Router()

router.get('/data', require('./get-data'))

module.exports = router