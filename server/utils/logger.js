import path from 'path'
import mkdirp from 'mkdirp'
import { Logger, transports } from 'winston'

import { getLoggingConfig } from './configs'

const loggingConfig = getLoggingConfig()

const logDir = path.join(__dirname, '../logs')

// Create a new logs directory if not present
mkdirp.sync(logDir)

const getLogger = level => {
  const logger = new Logger()

  switch (level) {
    case 'debug':
      logger.add(transports.File, loggingConfig.debug.file)
      logger.add(transports.Console, loggingConfig.debug.console)

      return logger

    case 'info':
      logger.add(transports.File, loggingConfig.info.file)
      logger.add(transports.Console, loggingConfig.info.console)

      return logger

    case 'error':
      logger.add(transports.File, loggingConfig.error.file)
      logger.add(transports.Console, loggingConfig.error.console)

      return logger

    default:
      logger.add(transports.Console, { level, colorize: true })

      return logger
  }
}

export default ({
  error(err) {
    getLogger('error').error(err)
  },
  info(err) {
    getLogger('info').info(err)
  },
  debug(err) {
    getLogger('debug').debug(err)
  },
  warn(err) {
    getLogger('warn').warn(err)
  },
  log(level, err) {
    getLogger(level)[level](err)
  }
})
