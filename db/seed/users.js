const faker = require('faker')
const { createDocuments, getRandomUserType } = require('../utils')
const { statics } = require('../data/users')

module.exports = createDocuments(() => ({
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  username: faker.internet.userName(),
  usertype: getRandomUserType(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber()
}), { statics })