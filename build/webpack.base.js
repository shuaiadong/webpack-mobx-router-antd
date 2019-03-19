const path = require('path');
const config = require( './config.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let basePath = config.basePath;
 const webpackBaseConfig = {
    
    // 入口
    entry: {
        index: [path.resolve(__dirname, basePath, 'src/index.js')],
    },
    
    // 输出
    output: {
        filename: '[name].dev.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, basePath, 'dist')
    },

    // 插件
    plugins: [
        // @2.0.1 默认 output.path
        new CleanWebpackPlugin({
            // dry: true,
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, basePath, config.htmlTemplate),
            filename: 'index.html',
            path: path.resolve(__dirname, basePath, 'dist'),
            // minify: {
            // }
        })
    ]
}
module.exports = webpackBaseConfig;