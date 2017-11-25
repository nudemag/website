const path = require('path')
const express = require('express')

// Middleware
const hbs = require('express-hbs')
const compression = require('compression')
const slashes = require('connect-slashes')
const contextBuilder = require('./lib/context')
const port = Number(process.env.PORT) || 5000
const app = express()

// Handlebars Templates
app.engine('html', hbs.express4({
  defaultLayout: path.join(__dirname, '/views/layouts/main.html'),
  extname: '.html',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials')
}))

// Middleware
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.use(compression())
app.use(slashes(false))
app.use(contextBuilder)
app.use(express.static(__dirname))

// Routes
const routes = require('./routes')
app.get('/', routes.home)
app.get('/music', routes.music)
app.get('/:permalink', routes.issue)

if (!module.parent) {
  app.listen(port, () => {
    console.log(`app running on ${port}`)
  })
}

module.exports = app
