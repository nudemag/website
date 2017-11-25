require('require-yaml')

module.exports = function context (req, res, next) {
  req.context = require('../data.yml')
  return next()
}
