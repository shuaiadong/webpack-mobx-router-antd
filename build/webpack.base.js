const path = require('path');
const config = require( './config.js');

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
        path: path.resolve(__dirname, basePath, 'dist/dev')
    }
}
module.exports = webpackBaseConfig;