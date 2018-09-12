process.env.NODE_ENV = 'testing'
process.env.DB_URL = 'mongodb://localhost:27017/thesis-test'

const { db } = require('../../app')
const chai = require('chai')
const { expect } = chai
const { user, registeringUser } = require('../helpers')


describe('"/register" Route', () => {

  beforeEach(() => db.dropDatabase())

  after(() => db.close())

  it('should successfully register a new user', done => {
    registeringUser()
      .send(user())
      .end((err, res) => {
        expect(res).to.have.status(201)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.true
        done()
      })
  })

  it('should not allow a user to register with incorrect data', done => {

    registeringUser()
      .send(user({ firstname: null }))
      .end((err, res) => {
        expect(res).to.have.status(401)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.false
        done()
      })
  })
})