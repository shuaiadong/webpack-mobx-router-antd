const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const config = require('./config');
const Webpack = require('webpack');
const addAsseHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const path = require('path');

let dllPlugins = Object.keys(config.dllEntry);
dllPlugins = dllPlugins && dllPlugins.map(item =>
    new Webpack.DllReferencePlugin({
        manifest:  require(path.join(config.devDllPath, `${item}-manifest.json`))
    })
    );

const webpackDev = {
    mode: 'development',

    plugins: dllPlugins.concat([
        // todo
        new addAsseHtmlWebpackPlugin([
            {filepath:path.resolve(__dirname, '../dist/dev-dll/vendor.dll.js')}
        ])
    ])
}
console.log('dev =================================================================================== 配置')
// console.log(merge(baseConfig, webpackDev));
console.log('dev =================================================================================== 配置')
module.exports = merge(baseConfig, webpackDev);