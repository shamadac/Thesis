const { User } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  const newUser = new User(req.body)
  newUser.save((err, user) => {
    if(err) {
      return next(authResponse(false, { status: 401, error: err }))
    }
    req.session.userId = user._id
    res.locals = authResponse(true, { status: 201 })
    next()
  })
}