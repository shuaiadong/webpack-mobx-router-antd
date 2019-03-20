# babel-loader配置
> babael-loader 转换语法(@babel

> polyfill | runtime 转换 低版本不兼容的 API（、Set、Maps、Proxy）

### browserslist -> https://github.com/browserslist/browserslist  (json or js)
- babel-loader@8 
- 核心 @babel/core
- 预设preset(babel 预设plugin的集合)
    - @babel/preset-env // 默认情况下将转换所有ECMAScript 2015+
    - @babel/preset-flow
    - @babel/preset-react
    - @babel/preset-typescript
    - @babel/stge-0
-  preset 的区别？
    - @babel/preset-react [4个react包 + 1个utils](https://github.com/babel/babel/blob/master/packages/babel-preset-react/package.json)
    - @babel/preset-env  [很多包。。。。](https://github.com/babel/babel/blob/master/packages/babel-preset-env/package.json)
```
    

      ['@babel/preset-env',{
            tragets: {
                esmodules: false, // 在指定esmodules目标时，将忽略浏览器目标。
                spec: false,      // default false 启用更符合规范但可能更慢的转换。
                loose: false,     // default false 松散的转化
                modules: 'auto',  // 模块 启用将ES6模块语法转换为其他模块类
                debug: false,     // default false 
            }
        }],

```
### 配置
- .babelrc `json`
```
    {
    "presets": ["@babel/preset-env", {
        "useBuiltIns": "entry"
    }],
    "plugins": [
        
    ]
}    

```

- pageage.json
```
"browserslist": "> 0.25%, not dead"
```

- babel.config.js
```
function isBabelRegister(caller) {
    console.log(caller, 'caller')
    return true;
}


module.exports = function (api) {
    /**
     * 
     * 
     * { 
     * version: '7.3.4',
        cache:  {
                [Function: cacheFn]
                forever: [Function], api.cache.forever() // Permacache计算的配置，永远不再调用该函数
                never: [Function], 不要缓存此配置，并且每次都重新执行该功能
                using: [Function], 回调返回的值不是预期的值时，将再次调用整个配置函数，并将新的条目添加到缓存中。
                invalidate: [Function]   基于值的缓存NODE_ENV。每当using回调返回的值不是预期值时，将再次调用整个配置函数，缓存中的所有条目都将替换为结果。
            },
            env: [Function: env], api.env("development")  => true | false 区分开发 | 上线
            caller: [Function: caller],
            assertVersion: [Function: assertVersion],
        } 
     */
    // api.cache.never(); or api.cache(false)  // 每次都重新执行本文件 
    // api.cache.forever(); or api.cache(true) // 只执行一次本文件 
    // console.log(api.env("development"), 'babel-env');

     api.cache(true);


    const presets = [
        ['@babel/preset-env'],
        ['@babel/preset-react']
    ];

    const plugins = [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }], // @
        ['@babel/plugin-proposal-class-properties', { 'loose' : true }], // class
        ['@babel/plugin-transform-react-jsx'], // jsx 
    ];

    return {
        presets,
        plugins
    };
}

/**
 * 
 * api.env() // 可用来区分环境
 * api.cache() true or false; // 放在 env caller 的后面
 * 
 */
```

# todo 
- 为不同环境指定浏览器版本
- https://github.com/browserslist/browserslist
## 相关资料
https://www.jianshu.com/p/0dc3bddb6da8?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation