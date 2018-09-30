const { authResponse } = require('../helpers')
const models = require('../../db/models')
const { User, Community, Manuscript, Review } = models

module.exports = (req, res, next) => {
  const response = { status: 401, error: { message: 'You do not have permission to access this page, Please log in to do so.' } }

  if(!req.session.userId) {
    next(authResponse(false, response))
    return
  }

  User.findById(req.session.userId)
    .select('-password')
    .populate('communities')
    .then(user => {

      if(!user) {
        return next(authResponse(false, response))         
      }

      response.status = 200
      delete response.error

      res.locals = authResponse(true, response)
      res.locals.user = user
      
      return Promise.all([
        Community.find(),
        Manuscript.find(),
        Review.find()
      ])
    })
    .then(result => {
      const collectionKeys = Object.keys(models).filter(model => model !== 'User')
      collectionKeys.forEach((collection, index) => {
        res.locals[collection.toLowerCase()] = result[index]
      })
      next()
    })
    .catch(next)
}