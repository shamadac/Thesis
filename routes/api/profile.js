const { Review, Manuscript } = require('../../db/models')

module.exports = (req, res, next) => {
  const promises = [
    Review.find(),
    Manuscript.find()
  ]

  Promise.all(promises)
    .then(result => {
      debugger
      next()
    })
    .catch(next)
}