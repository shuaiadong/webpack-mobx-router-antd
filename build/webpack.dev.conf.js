const path = require('path');

const baseConfig = require('./webpack.base.js');
const config = require('./config');

const Webpack = require('webpack');
const merge = require('webpack-merge');


const webpackDev = {
    mode: 'development',

    plugins: getDllPluginsArray().concat([
        // todo
       
    ])
}
console.log('dev =================================================================================== 配置')
console.log(merge(baseConfig({mode: 'development'}), webpackDev));
console.log('dev =================================================================================== 配置')

module.exports = merge(baseConfig({mode: 'development'}), webpackDev);



function getDllPluginsArray() {

    let dllPlugins = Object.keys(config.dllEntry);

    dllPlugins = dllPlugins && dllPlugins.map(item =>

        new Webpack.DllReferencePlugin({
            manifest: require(path.join(config.devDllPath, `${item}-manifest.json`))
        })
    );

    return dllPlugins;
}