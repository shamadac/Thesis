process.env.NODE_ENV = 'testing'
process.env.DB_URL = 'mongodb://localhost:27017/thesis-test'

require('./register-route')
require('./login-route')
require('./profile-route')
// require('./submission-route')
require('./join-route')