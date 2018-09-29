const { Community, User } = require('../../db/models')

module.exports = (req, res, next) => {

  const id = req.body._id
  const update = req.body

  Community
    .findOneAndUpdate(
      { _id: req.body._id },
      { title: 'hello' },
      { new: true }
    )
    .then(doc => {
      console.log(doc)
      res.send(doc)
    })
}