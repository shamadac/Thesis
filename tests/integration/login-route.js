const { db } = require('../../app')
const chai = require('chai')
const { expect } = chai
const { User } = require('../../db/models')
const user = require('../../helpers/user')
const { chaiHttpAgent, loggingInUser } = require('../helpers')
const agent = chaiHttpAgent()


describe('"/login" Route', () => {

  before(done => {
    db.dropDatabase().then(() => done()).catch(done)
  })

  it('should prevent a user without an account from logging in', done => {
    loggingInUser()
      .send({ username: 'johndoe', password: 'secret' })
      .end((err, res) => {
        expect(res).to.have.status(401)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.false
        done()
      })
  })

  describe('an already registered user', () => {

    before(done => {
      User.create(user()).then(() => done()).catch(done)
    })

    it('should allow an already registered user to login', done => {
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
})