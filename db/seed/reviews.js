const faker = require('faker')
const { createDocuments } = require('../utils')
const { statics } = require('../data/reviews')

const fakerFunc = () => ({
  body: faker.lorem.paragraphs()
})

module.exports = createDocuments(fakerFunc, { statics })