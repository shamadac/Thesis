const { User } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  const { body } = req
  const { username, password } = body

  const query = { $or: [
    { username }, { email: username }
  ] }

  const response = { status: 401, error: { errors: {} } }

  User
    .findOne(query)
    .then(user => {
      if(!user) {
        response.error.errors.username = {
          message: 'A user with the supplied username or email does not exist!'
        }
      } else if(user.password !== password) {
        response.error.errors.password = {
          message: 'Incorrect password!'
        }
      }

      if(Object.keys(response.error.errors).length) {
        next(authResponse(false, response))
      } else {
        req.session.userId = user._id
        res.locals = authResponse(true, { status: 201 })
        res.locals.user = user
        next()
      }
    })
    .catch(next)
}