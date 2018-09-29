const { loggingInUserAgent, chaiHttpAgent, dropAndReseed } = require('../helpers')
const { expect } = require('chai')
const agent = chaiHttpAgent()


describe('"/profile" Route', () => {

  beforeEach(dropAndReseed)

  it('should return the data that should be available in the users profile', done => {
    loggingInUserAgent(agent)
      .then(() => agent.get('/api/profile'))
      .then(res => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('authenticated')
        expect(res.body.authenticated).to.be.true
        done()
      })
      .catch(done)
  })
})