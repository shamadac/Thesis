const { registeringUserAgent, chaiHttpAgent, dropAndReseed } = require('../helpers')
const agent = chaiHttpAgent()
const { Community } = require('../../db/models')

describe('"/join" Route', () => {

  beforeEach(dropAndReseed)

  it.only('should allow a user to join a community', done => {
    registeringUserAgent(agent)
      .then(() => Community.findOne())
      .then(community => {
        debugger
        return agent
          .put('/api/join')
          .send(community)
          .then(res => {
            debugger
          })
      })
  })
})