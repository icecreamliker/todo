var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    main: './js/index.js'
  },

  output: {
    path: 'dist',
    filename: '[name].min.js',
    chunkFilename: '[id].bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js(.*)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize'
      )
    }]
  },

  plugins: [
    new ExtractTextPlugin('[hash:6].[name].min.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
