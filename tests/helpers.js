const { app, db } = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

module.exports = {
  user: overrides => {
    const defaultProps = {
      "firstname": "john",
      "lastname": "doe",
      "username": "johndoe",
      "email": "john@johndoe.com",
      "password": "secret",
      "phone": "1-555-555-5555",
      "usertype": "member"
    }
    let newUser = {...defaultProps, ...overrides}
    return newUser
  },
  registeringUser: () => {
    return chai.request(app).post('/api/register')
  }
}