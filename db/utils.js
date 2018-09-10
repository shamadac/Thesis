const path = require('path')
const seedr = require('mongoose-seedr')
const { userTypes } = require('./data/users')
const { DB_URL } = process.env

function fakerPath(filename) {
  return path.join(__dirname, 'seed', filename)
}

module.exports = {
  seedDatabase: () => {

    seedr.seed({
      databaseURL: DB_URL,
      seed: [
        {
          documents: fakerPath('users'),
          collection: 'users'
        }
      ]
    })
  },
  
  createDocuments: (faker, options = { documents: 1, statics: null }) => {
    debugger
    let { documents, statics } = options
    const output = []

    if(statics) {
      documents = statics.length
    }

    for(let i = 0; i < documents; i++) {
      const record = { ...faker(), ...statics[i] }
      output.push(record)
    }
    
    return output
  },

  getRandomUserType: () => {
    const max = userTypes.length - 1
    const min = 0
    return userTypes[Math.floor(Math.random() * (max - min + 1)) + min]
  }
}