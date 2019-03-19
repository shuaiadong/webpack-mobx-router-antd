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

    resolve: {
        alias: { // 别名
            utils: path.resolve(__dirname, basePath, 'src/utils'),
            src:   path.resolve(__dirname, basePath, 'src'),
            img:   path.resolve(__dirname, basePath, 'src/pubilc/img'),
            mobx:  path.resolve(__dirname, basePath, 'node_modules/mobx/lib/mobx.es6.js'),
            comps:  path.resolve(__dirname, basePath, 'src/components') // 体积最小的 ES6 构建
        }
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
    ],

    // module
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/, 
                include: path.resolve(__dirname, basePath, 'src')
            }
        ]
    }
}
module.exports = webpackBaseConfig;