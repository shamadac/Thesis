const { app, db } = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

module.exports = {
  registeringUser: () => {
    return chai.request(app).post('/api/register')
  }
}