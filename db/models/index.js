const mongoose = require('mongoose')
const models = {}

const schemas = {
  User: require('./User'),
  Review: require('./Review'),
  Community: require('./Community'),
  Manuscript: require('./Manuscript')
}

Object.keys(schemas).forEach(name => {
  models[name] = mongoose.model(name, schemas[name])
})

module.exports = models