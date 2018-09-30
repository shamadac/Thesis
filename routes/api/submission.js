const { Manuscript, User } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  
  const { userId } = req.session
  req.body.author = userId
  
  const manuscript = new Manuscript(req.body)

  manuscript.save((err, doc) => {
    
    if(err) {
      return next(authResponse(false, { status: 500, error: err }))
    }

    User
      .findById(userId)
      .then(user => {
        user.manuscripts.push(doc._id)
        return user.save()
      })
      .then(() => {
        res.status(204)
        res.end()
      })
      .catch(next)
  })
}