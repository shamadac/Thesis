const express = require('express')
const router = express.Router()
const auth = require('./auth')
const { responseHandler } = require('../helpers')

router.get('/data', require('./get-data'))
router.get('/form-data', require('./form-data'))
router.get('/auth', auth, responseHandler)
router.post('/register', require('./register'), responseHandler)
router.post('/login', require('./login'), responseHandler)

module.exports = router