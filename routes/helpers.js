module.exports = {
  authResponse: (success, data) => {
    const responseObj = { authenticated: success }
    return { ...responseObj, ...data }
  },
  responseHandler: (req, res) => {
    const { locals } = res
    res.status(locals.status)
    delete locals.status
    res.json(locals)
  }
}