var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
    },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel']

    }

    ]
  }
};
