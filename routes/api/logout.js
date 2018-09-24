const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  const response = { status: 503, error: { errors: {} } }
  
  req.session.destroy(err => {
    if(err) {
      response.errors = err
      return next(authResponse(true, response))
    }
    
    res.clearCookie('userId')
    res.locals = authResponse(false, { status: 204 })
    next()
  })
}