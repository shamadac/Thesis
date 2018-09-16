const { db } = require('../../app')
const chai = require('chai')
const { expect } = chai
const { User } = require('../../db/models')
const user = require('../../helpers/user')
const { chaiHttpAgent } = require('../helpers')


describe('"/login" Route', () => {

  before(done => {
    db.dropDatabase().then(() => done()).catch(done)
  })

  beforeEach(done => {
    User.create(user()).then(() => done()).catch(done)
  })

  it('should allow an already registered user to login', done => {
    const agent = chaiHttpAgent()

    agent
      .post('/api/login')
      .send({ username: 'johndoe', password: 'secret' })
      .end((err, res) => {
        expect(res).to.have.status(201)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.true
        done()
      })
  })
})