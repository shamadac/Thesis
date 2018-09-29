const { Community, User } = require('../../db/models')

module.exports = (req, res, next) => {

  const id = req.body._id
  const update = req.body

  console.log(id)
  console.log(update)

  Community
    .findOneAndUpdate(
      { _id: id },
      update,
      {
        rawResult: true
      }
    )
    .then(doc => {
      res.json(doc)
    })

  // Community
  //   .findByIdAndUpdate(id, update)
  //   .then(doc => {
  //     res.json(doc)
  //   })

  // Community
  //   .findByIdAndUpdate(id, update, function(err, doc) {
  //     res.json(doc)
  //   })
}