const ObjectId = require('mongoose').Types.ObjectId
const { Review, Manuscript, Community } = require('../../db/models')
const { authResponse } = require('../helpers')
const community = require('../../helpers/community')
const faker = require('faker')

module.exports = (req, res, next) => {

  const author = new ObjectId(req.session.userId)

  const promises = [
    Review.find({ author }),
    Manuscript.find({ author }),
    Community.find()
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