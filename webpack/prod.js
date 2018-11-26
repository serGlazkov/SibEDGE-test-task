const webpack = require('webpack');
const mergeConfigs = require('./utils/mergeConfigs');
const config = require('./common');

const prodConfig = {
  plugins: [new webpack.optimize.UglifyJsPlugin()],
};

module.exports = mergeConfigs(config, prodConfig);
