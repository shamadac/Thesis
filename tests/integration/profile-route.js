const { db } = require('../../app')
const user = require('../../helpers/user')
const { chaiHttpAgent, createUserAndLogin } = require('../helpers')
const { exec } = require('child_process')
const agent = chaiHttpAgent()


describe('"/profile" Route', () => {

  beforeEach(done => {
    db.dropDatabase()
      .then(() => done())
      .catch(done)
  })

  it('should return the data that should be available in the users profile', done => {
    agent
      .post('/api/register')
      .send(user())
      .then(() => agent.get('/api/profile'))
      .then(res => {
        debugger
        done()
      }) 
  })
})