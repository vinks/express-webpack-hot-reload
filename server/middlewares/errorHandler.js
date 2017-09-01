import logger from '../utils/logger'

export default (err, req, res, next) => { // eslint-disable-line no-unused-vars
  logger.error(err)

  res.status(err.status || 500)

  return res.error(err.message, { error: err }, 500)
}
