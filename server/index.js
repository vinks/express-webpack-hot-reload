import http from 'http'
import app from './server'
import { getServerConfig } from './utils/configs'

const serverConfig = getServerConfig(process.env.NODE_ENV)

const server = http.createServer(app)
let currentApp = app

server.listen(serverConfig.port || 3000)

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
