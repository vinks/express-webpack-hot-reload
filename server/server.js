import express from 'express'
import bodyParser from 'body-parser'
import Ouch from 'ouch'
import parsetrace from 'parsetrace'
import auth from 'http-auth'
const statusMonitor = require('express-status-monitor')()

// Middlewares
import jsend from './middlewares/jsend'

// Routes
import routes from './routes'

// Express application
const app = express()

// Enable parsing request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Use jsend in api responses
// https://labs.omniti.com/labs/jsend
app.use(jsend())

const basic = auth.basic({
  realm: 'Monitor Area'
}, (user, pass, callback) =>
  callback(user === 'username' && pass === 'password')
)

app.use(statusMonitor)
app.get('/status', auth.connect(basic), statusMonitor.pageRoute)

// Use routes
app.use('/', routes)

// Handle errors
app.use((err, req, res, next) => {
  const contype = req.headers['content-type']

  if (!contype || contype.indexOf('application/json') !== 0) {
    (new Ouch()).pushHandler(
      new Ouch.handlers.PrettyPageHandler()
    ).handleException(err, req, res, () => {
      next()
    })
  } else {
    res.error({
      message: err.message,
      trace: parsetrace(err, { sources: false }).object()
    }, 500)
  }
})

export default app
