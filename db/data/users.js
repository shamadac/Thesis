const userTypes = ['member', 'subscriber']

const getRandomUserType = () => {
  return userTypes[Math.random() * (userTypes.length - 0) + userTypes.length]
}

module.exports = { userTypes, getRandomUserType }