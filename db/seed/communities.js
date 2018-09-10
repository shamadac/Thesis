const faker = require('faker')
const { createDocuments } = require('../utils')
const { statics } = require('../data/communities')

const fakerFunc = () => ({
  title: faker.lorem.words(),
  description: faker.lorem.paragraphs()
})

module.exports = createDocuments(fakerFunc, { statics })