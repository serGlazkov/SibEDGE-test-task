const { join } = require('path');
const webpack = require('webpack');
const bp = require('./utils/addBabelPolyfill');

const rootDir = join(__dirname, '../');

module.exports = {
  entry: {
    app: bp(join(rootDir, './src/')),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: join(rootDir, './build'),
    publicPath: '/',
    filename: './[name].js',
    sourceMapFilename: '[file].map?[hash]',
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV_ENV: process.env.NODE_ENV === 'development',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      src: join(rootDir, './src'),
      common: join(rootDir, './src/common'),
      features: join(rootDir, './src/features'),
    },
  },
};
