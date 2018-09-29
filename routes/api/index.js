const express = require('express')
const router = express.Router()
const auth = require('./auth')
const { responseHandler } = require('../helpers')

// router.get('/data', require('./get-data'))
router.get('/form-data', require('./form-data'))
router.get('/auth', auth, responseHandler)
router.get('/logout', auth, require('./logout'), responseHandler)
router.get('/profile', auth, require('./profile'), responseHandler)
router.post('/submission', auth, require('./submission'), responseHandler)
router.post('/register', require('./register'), setCookie, responseHandler)
router.post('/login', require('./login'), setCookie, responseHandler)
router.put('/join/:id', auth, require('./join'), responseHandler)

function setCookie(req, res, next) {
  res.cookie('userId', req.session.userId)
  next()
}

module.exports = router