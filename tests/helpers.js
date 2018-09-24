const user = require('../helpers/user')
const { exec } = require('child_process')
const path = require('path')
const { app, db } = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

module.exports = {
  registeringUserAgent: agent => {
    return agent
      .post('/api/register')
      .send(user())
  },
  dropAndReseed: done => {
    db.dropDatabase()
    .then(() => {
      let cmd = `mongorestore --nsFrom 'thesis.*' --nsTo 'thesis-test.*' --nsInclude 'thesis.*' ${path.resolve(__dirname, '../db/dump')}`
      exec(cmd, (err, stdout, stderr) => {
        if(err) {
          return done(err)
        }
        done()
      })
    })
    .catch(done)
  },
  registeringUser: () => chai.request(app).post('/api/register'),
  loggingInUser: () => chai.request(app).post('/api/login'),
  chaiHttpAgent: () => chai.request.agent(app)
}