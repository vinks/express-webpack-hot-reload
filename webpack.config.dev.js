const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
  entry: ['webpack/hot/poll?1000', 'babel-polyfill', './server/index'],
  watch: true,
  target: 'node',
  node: {
    __filename: false,
    __dirname: false
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect'] // allow debugging
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('server')
      }
    })
  ],
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  }
}
