const { loggingInUserAgent, chaiHttpAgent, dropAndReseed } = require('../helpers')
const { expect } = require('chai')
const agent = chaiHttpAgent()
const { Community } = require('../../db/models')

describe('"/join" Route', () => {

  beforeEach(dropAndReseed)

  it('should allow a user to join a community', done => {
    loggingInUserAgent(agent)
      .then(() => Community.findOne())
      .then(community => {
        agent
          .put(`/api/join/${community._id}`)
          .send(community)
          .then(res => {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('user')
            expect(res.body.user).to.have.property('communities')
            // expect(res.body.user.communties).to.be.an('array')
            // expect(res.body.user.communities[0]).to.have.property('_id')
            done()
          })
          .catch(done)
      })
      .catch(done)
  })
})