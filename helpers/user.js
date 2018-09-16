module.exports = (overrides = {}) => {
  const defaultProps = {
    "firstname": "john",
    "lastname": "doe",
    "username": "johndoe",
    "email": "john@johndoe.com",
    "password": "secret",
    "confirmPassword": "secret",
    "phone": "1-555-555-5555",
    "usertype": "member"
  }
  return {...defaultProps, ...overrides}
}