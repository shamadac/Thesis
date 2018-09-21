const { exec } = require('child_process')
const path = require('path')
const { db } = require('../../app')
const user = require('../../helpers/user')
const { chaiHttpAgent, createUserAndLogin } = require('../helpers')
const { expect } = require('chai')
const agent = chaiHttpAgent()


describe('"/profile" Route', () => {

  beforeEach(done => {
    db.dropDatabase()
      .then(() => {
        let cmd = `mongorestore --nsFrom 'thesis.*' --nsTo 'thesis-test.*' --nsInclude 'thesis.*' ${path.resolve(__dirname, '../../db/dump')}`
        exec(cmd, (err, stdout, stderr) => {
          if(err) {
            return done(err)
          }
          done()
        })
      })
      .catch(done)
  })

  it('should return the data that should be available in the users profile', done => {
    agent
      .post('/api/register')
      .send(user())
      .then(() => agent.get('/api/profile'))
      .then(res => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.true
        done()
      }) 
  })
})