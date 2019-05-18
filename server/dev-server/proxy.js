module.exports = {
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
}