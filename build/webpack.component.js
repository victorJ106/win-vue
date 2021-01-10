const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const components =  require('../components.json');
const config = require('./config');

module.exports = {
  mode: 'production',
  entry: components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: config.alias,
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  externals: config.externals,
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd,
        exclude: config.jsexclude,
        loader:  'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'url-loader',
        query:  {
          limit: 10000,
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
};