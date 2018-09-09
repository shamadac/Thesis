const faker = require('faker')
const { getRandomUserType } = require('../data/users')

module.exports = [
  {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    username: faker.internet.userName(),
    usertype: getRandomUserType(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  }
]