const { authResponse } = require('../helpers')
const { Community, User } = require('../../db/models')

module.exports = (req, res, next) => {
  const { userId } = req.session

  if(req.body.users.indexOf(userId) !== -1) {
    return res.json('You already belong to this community')
  }

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