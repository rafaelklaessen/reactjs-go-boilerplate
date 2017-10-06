const path = require('path');
module.exports = {
  entry: './public/entry.js',
  output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
