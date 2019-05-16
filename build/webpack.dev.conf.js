const path = require('path');

const baseConfig = require('./webpack.base.js');
const config = require('./config');

const Webpack = require('webpack');
const merge = require('webpack-merge');


const webpackDev = {
    mode: 'development',
    devServer: {
        proxy: {
            '/': {
                target: 'https://m.weibo.cn', // 目标地址
                changeOrigin: true,            // * 
                logLevel: 'debug',             // 控制台日志
                pathRewrite: {
                    '^/comments': '/comments'  // 重定向
                },
                headers: {
                    'Cookie': 'zhonghuidong=11',
                    'is-Dev': '22222'
                }
            }
        },
        after: function(app, server) {
            console.log(app, server)
          },
        before: function (app) {
            app.get('/success', (res, req)=> {
                console.log(res, req)
                req.json({
                    a:' 1'
                })
            })
        }
    },
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