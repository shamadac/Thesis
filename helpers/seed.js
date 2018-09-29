const db = require('./connect')

// seed db once the connection is open
db.once('open', () => {

  require('../db/utils').seedDatabase()

  setTimeout(() => {
    console.log('Done!')
    process.exit()
  }, 1000)

})