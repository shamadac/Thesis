const ObjectId = require('mongoose').Types.ObjectId
const { Review, Manuscript } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {

  const author = new ObjectId(req.session.userId)

  const promises = [
    Review.find({ author }),
    Manuscript.find({ author })
  ]

  Promise.all(promises)
    .then(result => {
      res.locals = authResponse(true, { status: 200 })
      res.locals.data = {}
      promises.forEach((collection, i) => {
        res.locals.data[promises[i].model.modelName.toLowerCase()] = result[i]
      })
      next()
    })
    .catch(next)
}