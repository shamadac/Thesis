module.exports = (req, res, next) => {
  const user = require('../../helpers/user')()
  res.json(user)
}