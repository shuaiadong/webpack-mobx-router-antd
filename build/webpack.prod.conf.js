const path = require('path');
const glob = require('glob-all');

const baseConfig = require('./webpack.base.js');

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackProd = {
    mode: 'production',
    bail: true, // 打包出现任何错就终止
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ]
    // oneOf
}
module.exports = merge(baseConfig({ mode: 'production'}), webpackProd)