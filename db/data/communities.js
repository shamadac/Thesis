const { getArrayofRandomUniqueItems } = require('../utils')
const { statics: staticUsers } = require('./users')

let userIds = staticUsers.map(record => record._id)

const statics = [
  { 
    _id: '5b96cfaddc853b57a12b3819',
    users: getArrayofRandomUniqueItems(userIds, 0)
  },
  { 
    _id: '5b96cfccdc853b57a12b381a',
    users: getArrayofRandomUniqueItems(userIds, 3)
  },
  { 
    _id: '5b96cfdfeab2fe602a89c105',
    users: getArrayofRandomUniqueItems(userIds, 1)
  }
]

module.exports = { statics }