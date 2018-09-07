const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    index: './server/app.js'
  },

  target: 'node',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  externals: [nodeExternals()]
}