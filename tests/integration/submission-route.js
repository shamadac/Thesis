const ObjectId = require('mongoose').Types.ObjectId
const { chaiHttpAgent, dropAndReseed, registeringUserAgent } = require('../helpers')
const { expect } = require('chai')
const manuscript = require('../../helpers/manuscript')
const agent = chaiHttpAgent()

describe('"/submission" Route', () => {

  beforeEach(dropAndReseed)

  it('should successfully submit a manuscript', done => {
    let userId
    registeringUserAgent(agent)
      .then(res => {
        expect(res).to.have.cookie('userId')
        
        userId = decodeURIComponent(res.headers['set-cookie'][0]).split('"')[1]
        
        agent.post('/api/submission')
          .send(manuscript({ author: new ObjectId(userId) }))
          .then((res, err) => {
            expect(res).to.have.status(204)
            done()
          })                
      })
  })
})