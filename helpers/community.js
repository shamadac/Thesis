module.exports = (overrides = {}) => {
  const defaultProps = {
    title: 'Community title',
    description: 'Description of the community',
    users: []
  }
  return {...defaultProps, ...overrides}
}