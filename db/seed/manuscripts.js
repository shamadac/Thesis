const faker = require('faker')
const { createDocuments } = require('../utils')
const { statics } = require('../data/manuscripts')

const fakerFunc = () => ({
  title: faker.lorem.words(),
  keywords: new Array(3).fill({}).map(() => faker.lorem.word())
})

module.exports = createDocuments(fakerFunc, { statics })