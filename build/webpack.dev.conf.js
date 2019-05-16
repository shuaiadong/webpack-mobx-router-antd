const path = require('path');

const baseConfig = require('./webpack.base.js');
const config = require('./config');

const Mocker = require('webpack-api-mocker');

const Webpack = require('webpack');
const merge = require('webpack-merge');


const webpackDev = {
    mode: 'development',
    devServer: {
        proxy: {
            '/comments': {
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
        before: function (app) {
            // mock .js
            Mocker(app, path.join(__dirname, config.basePath, '/server/mock/api.js'), {
                // 请求线上数据  | mock切换
            })
            // 1. 直接写 请求
            // app.get('/success', (res, req)=> {
            //     req.json({
            //         a:' 1'
            //     })
            // })
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