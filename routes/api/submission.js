const { Manuscript } = require('../../db/models')
const { authResponse } = require('../helpers')

module.exports = (req, res, next) => {
  const manuscript = new Manuscript(req.body)

  manuscript.save((err, doc) => {
    
    if(err) {
      return next(new Error('Something went wrong! Please try submitting your manuscript again at a later time.'))
    }
    
    res.status(204)
    res.end()
  })
}