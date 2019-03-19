const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const webpackDev = {
    mode: 'production'
}

module.exports = merge(baseConfig, webpackDev)