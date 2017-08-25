import express from 'express'
import jsend from './middlewares/jsend'
// import logger from './utils/logger'
import routes from './routes'

const app = express()

// Use jsend in api responses
// https://labs.omniti.com/labs/jsend
app.use(jsend())

app.use('/', routes)

export default app
