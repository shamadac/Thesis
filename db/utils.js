const path = require('path')
const seedr = require('mongoose-seedr')
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
  }
}