const faker = require('faker')
const { createDocuments, getRandomArrayItem } = require('../utils')
const { userTypes, statics } = require('../data/users')

const fakerFunc = () => ({
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  username: faker.internet.userName(),
  usertype: getRandomArrayItem(userTypes),
  password: faker.internet.password(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber()
})

module.exports = createDocuments(fakerFunc, { statics })