/**
 * 坑
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
// 
console.log(process.cwd()); // node 执行 路径问题


const express = require('express');
const webpack = require('webpack');
const opn = require('opn'); // 打开浏览器
const WebpackMiddleware = require('webpack-dev-middleware');
const proxyMiddleware = require('http-proxy-middleware');
const hotMiddleware = require('webpack-hot-middleware')

const proxy = require('./proxy')
const dev = require('../../build/webpack.dev.conf')
const compiler = webpack(dev);


const app = express();
app.use(express.static('dist'))

app.get('/success', (req, res) => {
    console.log('哈哈哈哈')
    res.json({1: 1})
})

app.use(WebpackMiddleware(compiler, {
    publicPath: '/',
}))
app.use(hotMiddleware(compiler))
Object.keys(proxy).forEach(element => {
    app.use(proxyMiddleware(element, proxy[element]))
});


app.listen('3000', () => {
    console.log('启动')
    opn('http:localhost:3000')
})