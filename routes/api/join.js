const { authResponse } = require('../helpers')
const { Community, User } = require('../../db/models')

module.exports = (req, res, next) => {
  const { userId } = req.session

  req.body.users.push(userId)

  Community
    .findOneAndUpdate(
      { _id: req.body._id },
      { $set: { users: req.body.users } },
      { new: true }
    )
    .then(() => User.findById(userId))
    .then(user => {
      user.communities.push(req.body._id)
      return user.save()
    })
    .then(() => {
      res.locals = authResponse(true, { status: 204 })
      next()
    })
    .catch(next)
}