const path = require('path');
const config = require( './config.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');


let basePath = config.basePath;
 const webpackBaseConfig = ({
     mode
 }) => {
     const env = mode === 'development';

     const vendorPath = path.join(env ? config.devDllPath : config.prodDllPath, '*.js');


     return {

         // 入口
         entry: {
             index: [path.resolve(__dirname, basePath, 'src/index.js')],
         },

         // 输出
         output: {
             filename: env ? 'js/[name].dev.js' : 'js/[name].[hash].js',
             chunkFilename: env ? '[name].chunk.js' : '[name].[chunkhash].js',
             path: path.resolve(__dirname, basePath, 'dist/')
         },

         resolve: {
             alias: { // 别名
                 utils:path.resolve(__dirname, basePath, 'src/utils'),
                 src:  path.resolve(__dirname, basePath, 'src'),
                 img:  path.resolve(__dirname, basePath, 'src/pubilc/img'),
                 mobx: path.resolve(__dirname, basePath, 'node_modules/mobx/lib/mobx.es6.js'),// 体积最小的 ES6 构建
                 comps:path.resolve(__dirname, basePath, 'src/components') 
             }
         },

         // 插件
         plugins: [
             // @2.0.1 默认 output.path
             new CleanWebpackPlugin({
                 dry: true,
             }),

             new HtmlWebpackPlugin({
                 template: path.resolve(__dirname, basePath, config.htmlTemplate),
                 filename: 'index.html',
                 path: path.resolve(__dirname, basePath, 'dist/'),
                //  favicon
                 // minify: {
                 // }
             }),

             new addAssetHtmlWebpackPlugin([
                 {filepath: vendorPath}
             ])
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
                 },
                 
                 // less -css -style
             ]
         }
     }
 }
module.exports = webpackBaseConfig;