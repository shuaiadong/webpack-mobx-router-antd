 devServer: {
        proxy: {
            compress: bool, // 压缩
            contentBase: '' // 文件目录
            overlay: bool // 屏幕上显示报错
            publicPath: ''
            // devServer.publicPath
                publicPath: "/assets/"

                // 原本路径 --> 变换后的路径
                http://localhost:8080/app.js --> http://localhost:8080/assets/app.js
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
        }

cnpm install 
express 
opn 
webpack-dev-middleware 
webpack-hot-middleware 
http-proxy-middleware 
connect-history-api-fallback 
- History，它将把请求定位到你指定的索引文件(默认为/index.html -
-D

/**
 * node 在那个dir 下执行有关
 *      与执行文件的路径无关
 * 
 * 1.   node ./server/dev-server/index.js
 *      - > /Users/v_zhonghuidong/zhong_statuc/webpack-mobx-router-antd
 * 2.   cd server/dev-server  执行node ./index.js
 *      - > /Users/v_zhonghuidong/zhong_statuc/webpack-mobx-router-antd/server/dev-server
 * 
 * express.static('dist') 的静态资源要根据 process.cwd() 来设定
 */