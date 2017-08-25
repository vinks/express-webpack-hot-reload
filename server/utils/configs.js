import fs from 'fs'
import path from 'path'

const configPath = __dirname

export function getLoggingConfig() {
  return JSON.parse(
    fs.readFileSync(
      path.resolve(configPath, '../config', 'logging-config.json'),
      'utf8'
    )
  )
}

export function getServerConfig(env) {
  const config = JSON.parse(
    fs.readFileSync(
      path.resolve(configPath, '../config', 'server-config.json'),
      'utf8'
    )
  )

  if (env === 'production') {
    return config.production
  }

  return config.development
}
