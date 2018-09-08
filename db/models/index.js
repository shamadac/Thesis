const mongoose = require('mongoose')
const models = {}

const schemas = {
  User: require('./User')
}

Object.keys(schemas).forEach(name => {
  models[name] = mongoose.model(name, schemas[name])
})

module.exports = models