process.env.NODE_ENV = 'testing'
process.env.DB_URL = 'mongodb://localhost:27017/thesis-test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const { app } = require('../../app')
const { seedDatabase } = require('../../db/utils')

chai.use(chaiHttp)

describe('"/data" Route', () => {

  beforeEach(() => seedDatabase())

  it('test', () => {
    return chai.request(app)
      .get('/api/data')
      .end((err, res) => {
        expect(res).to.have.status(200)
      })
  })
})