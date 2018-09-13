const { authResponse } = require('../helpers')
const { User } = require('../../db/models')

module.exports = (req, res, next) => {
  const response = { status: 401, error: { message: 'You do not have permission to access this page, Please log in to do so.' } }

  if(!req.session.userId) {
    next(authResponse(false, response))
    return
  }

  User.findById(req.session.userId)
    .select('firstname lastname username -_id')
    .then(user => {
      if(user) {
        response.status = 200
        delete response.error
        res.locals = authResponse(true, response)
        res.locals.user = user
        return next()
      }
      next(authResponse(false, response))
    })
}