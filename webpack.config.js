const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, 'transpiler-target', 'target.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundled.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};