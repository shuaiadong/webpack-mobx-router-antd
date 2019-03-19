const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const webpackDev = {
    mode: 'development'
}
console.log('dev =================================================================================== 配置')
console.log(merge(baseConfig, webpackDev))
console.log('dev =================================================================================== 配置')
module.exports = merge(baseConfig, webpackDev);