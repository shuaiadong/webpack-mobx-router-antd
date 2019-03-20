const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const webpackDev = {
    mode: 'production',
    bail: true, // 打包出现任何错就终止
    // oneOf
}

module.exports = merge(baseConfig, webpackDev)