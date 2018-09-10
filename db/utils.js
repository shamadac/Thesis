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
        },
        {
          documents: fakerPath('manuscripts'),
          collection: 'manuscripts'
        },
        {
          documents: fakerPath('reviews'),
          collection: 'reviews'
        },
        {
          documents: fakerPath('communities'),
          collection: 'communities'
        }
      ]
    })
  },
  
  createDocuments: (faker, options = { documents: 1, statics: null }) => {
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

  getRandomArrayItem: arr => {
    const max = arr.length - 1
    const min = 0
    return arr[Math.floor(Math.random() * (max - min + 1)) + min]
  }
}