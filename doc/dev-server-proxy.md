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

// mock