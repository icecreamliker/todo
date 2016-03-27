var config = require('./webpack.config.js');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


config.watch = true;
config.keepAlive = true;
config.devtool = 'source-map';
config.debug = true;

config.plugins = [
  new ExtractTextPlugin('[name].min.css')
];

module.exports = config;
