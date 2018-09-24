module.exports = (overrides = {}) => {
  const defaultProps = {
    author: null,
    title: 'Manuscript title',
    keywords: 'these are keywords',
    body: 'lorem ipsum'
  }
  return {...defaultProps, ...overrides}
}