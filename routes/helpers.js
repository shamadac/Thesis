module.exports = {
  authResponse: (success, data) => {
    const responseObj = { authenticated: success }
    return { ...responseObj, ...data }
  },
  responseHandler: (req, res) => {
    res.status(res.locals.status)
    delete res.locals.status
    res.json(res.locals)
  }
}