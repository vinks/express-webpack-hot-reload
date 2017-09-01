import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import hpp from 'hpp'

// Middlewares
import {
  jsend,
  notFoundMiddleware,
  errorHandlerMiddleware
} from './middlewares'

// Routes
import routes from './routes'

// Express application
const app = express()

// Enable body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Don't expose any software information to hackers.
app.disable('x-powered-by')

// Response compression.
app.use(compression({ level: 9 }))

// Prevent HTTP Parameter pollution.
app.use(hpp())

// Use jsend in api responses
// https://labs.omniti.com/labs/jsend
app.use(jsend())

// Use routes
app.use('/', routes)

// 404 Handler for api routes
app.use(notFoundMiddleware)

// Error Handler
app.use(errorHandlerMiddleware)

export default app
