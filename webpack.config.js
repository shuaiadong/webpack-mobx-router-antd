const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
module.exports = [{
    mode: 'production',
    entry: {
        index: ['./index.js'],
        // app: './index2.js'
    },
    output:{
        filename: '[name].[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: 'initial', // all async
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
                    minChunks: 1,  //最少被几个chunk引用
                    reuseExistingChunk: true // ,是否重用 chunk,如果当前块包含已经从主bundle中分离出来的模块,那么它将被重用,而不是生成一个新的
                }
            }
        },
        runtimeChunk: true
        
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // chunks: ['index']
            inlineSource: /(vendors| base)\.([a-zA-Z]|[0-9])\.(js|css)$/,
            // chunkname: 'app'
        }),
        new HtmlWebpackInlineSourcePlugin(),
    ]
}];
// 多页面
// parallel-webpack
// 数组 - 

// 才想
// html的chunks
//chunks
// excludeChukns:[]// 排除chunks其他都加载
// html-webpack-inline-source-plugin  inlineSource 正则