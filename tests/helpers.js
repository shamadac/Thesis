const { app } = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

module.exports = {
  registeringUser: () => chai.request(app).post('/api/register'),
  loggingInUser: () => chai.request(app).post('/api/login'),
  chaiHttpAgent: () => chai.request.agent(app),
}