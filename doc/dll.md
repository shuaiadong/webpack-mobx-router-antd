# dll
[images](./img/01.png)

```js
  output: {
        filename: '[name].dll.js',
        path: config.devDllPath,
        library: '[name]' // 重要
    },


 // 生成 manifest
  new Webpack.DllPlugin({
            // context: config.devDllContent,
            name: '[name]',
            path: path.join( config.devDllPath, '/[name]-manifest.json')
   })


   // 引入 manifest
    new Webpack.DllReferencePlugin({
        manifest:  require(`./vendor-manifest.json`)) // 重要
    })
```
## todo html 注入 vendor? 
- [add-asset-html-webpack-plugin](https://www.npmjs.com/package/add-asset-html-webpack-plugin)

## 问题 
```
 new addAsseHtmlWebpackPlugin([
            {filepath:path.resolve(__dirname, '../dist/dev-dll/vendor.dll.js')} // 
        ])
```

```

```

# happypack

# uglifyjs 并行处理

# babel
    options.cacheDirectory
    include
    exclude

    减少resolve

    devtool ->
    cache-loader