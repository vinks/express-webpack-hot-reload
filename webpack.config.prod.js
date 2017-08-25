const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  entry: ['babel-polyfill', './server/index'],
  watch: false,
  target: 'node',
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  externals: fs.readdirSync('node_modules').filter(
    x => !x.includes('.bin')
  ).reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`

    return externals
  }, {}),
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('server'),
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        screw_ie8: true,
        comments: false
      },
      sourceMap: true
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  }
}
