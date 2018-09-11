const express = require('express')
const models = require('../db/models')
const router = express.Router()

router.get('/data', (req, res, next) => {

  const { query } = req
  const promises = []
  let data

  if(query && query.fetch) {
    data = query.fetch.split(',')
  } else {
    data = Object.keys(models).map(model => model.toLowerCase())
  }

  data.forEach(d => {
    let key = d.charAt(0).toUpperCase() + d.substr(1)
    promises.push(models[key].find())
  })

  Promise.all(promises)
    .then(result => {
      let response = {}
      result.forEach((dataset, i) => {
        response[data[i]] = dataset
      })
      res.json(response)
    })
    .catch(next)
})

module.exports = router