const { db } = require('../../app')
const chai = require('chai')
const { expect } = chai
const { registeringUser } = require('../helpers')
const user = require('../../helpers/user')
const { User } = require('../../db/models')


describe('"/register" Route', () => {

  beforeEach(done => {
    User.remove({})
      .then(() => {
        // console.log('users removed')
        done()
      })
  })

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

  it('should not allow a user to register with non-matching passwords', done => {
    registeringUser()
      .send(user({ confirmPassword: 'hello' }))
      .end((err, res) => {
        expect(res).to.have.status(401)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.false
        done()
      })
  })

  describe('post launch', () => {
    
    before(done => {
      User.create(user())
        .then(user => {
          console.log('user created', user)
          done()
        })
        .catch(done)
    })

    it('should not allow a user to register with a username that has already been claimed by another user [FAILING]', done => {
      registeringUser()
        .send(user())
        .end((err, res) => {
          expect(res).to.have.status(401)
          expect(res.body).to.have.property('authenticated')
          expect(res.body.authenticated).to.be.false
          done()
        })
    })
  })
})