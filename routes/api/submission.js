const { Manuscript } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  
  req.body.author = req.session.userId
  
  const manuscript = new Manuscript(req.body)

  manuscript.save((err, doc) => {
    if(err) {
      return next(authResponse(false, { status: 500, error: err }))
    }
    
    res.status(204)
    res.end()
  })
}