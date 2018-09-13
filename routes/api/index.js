const express = require('express')
const router = express.Router()
const { responseHandler } = require('../helpers')

router.get('/data', require('./get-data'))
router.get('/form-data', require('./form-data'))
router.post('/register', require('./register'), responseHandler)

module.exports = router