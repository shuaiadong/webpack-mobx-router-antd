const path = require('path');
const config = require('./config');
const Webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: config.dllEntry,
    devtool: 'cheap-module-eval-source-map',

    output: {
        filename: '[name].dll.js',
        path: config.devDllPath,
        library: '[name]'
    },

    plugins: [
        new Webpack.DllPlugin({
            // context: config.devDllContent,
            name: '[name]',
            path: path.join( config.devDllPath, '/[name]-manifest.json')
        })
    ]
}