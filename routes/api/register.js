const { User } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  if(req.body.password !== req.body.confirmPassword) {
    return next(authResponse(false, { status: 401, error: { errors: { confirmPassword: { message: 'Passwords do not match!' } } } }))
  }
  User.findOne({ $or: [ { username: req.body.username }, { email: req.body.email } ] })
    .then(user => {
      if(user) {
        const errors = {}
        if(user.username === req.body.username) {
          errors.username = { message: 'This username already belongs another user!' }
        } else if(user.email === req.body.email) {
          errors.email = { message: 'This email already belongs to another user!' }
        }
        next(authResponse(false, { status: 401, error: { errors }}))
      } else {
        return new Promise(resolve => resolve())
      }
    })
    .then(() => {
      const newUser = new User(req.body)
  
      newUser.save((err, user) => {        
        if(err) {
          return next(authResponse(false, { status: 401, error: err }))
        }
        req.session.userId = user._id
        res.locals = authResponse(true, { status: 201 })
        next()
      })
    })
    .catch(next)
}