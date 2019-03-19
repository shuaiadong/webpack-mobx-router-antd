const path = require('path');
const config = require( './config.js');

let basePath = config.basePath;
module.exports = {
    
    // 入口
    entey: {
        index: [],
    },
    
    // 输出
    output: {
        filename: '[name].dev.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, basePath, 'dist/dev')
    }
}