## css 处理
- `npm i style-loader css-loader less-loader less -D`

### less-loader

```js
	// 处理less
	{
        loader: "less-loader", options: {
        strictMath: true,
        noIeCompat: true,
        sourceMap: true,
    	 }
    }

```
### postcss
> cnpm i postcss postcss-loader autoprefixer -D
```



	"browserslist": [
	"> 1%",
	"last 2 versions"
  	]


 // https://www.jianshu.com/p/d511c8e363e5
```
### css-loader
```
	{
		loader: 'css-loader', 
		options: {
		url: true,  // default true
		modules: true, // 开启模块化
		localIdentName: '[path]_[loacl]_[name]',
		sourceMap: true,
		
				/*
				* path 文件路径
				* local 文件名称
				* hash  hash:base64:5
				* name 
				*
				*/
		getLocalIdent: ()=> {},// 
		}
	}
	

```

### style-loader

```
	{
		loader: 'style-loader',
		options: {
		   url: '', // link标签插入页面
			hmr: true, // 热更新
			attrs: {
			 id： 'css' // 标签上挂载属性
			}，
			transform: (css) => { return css}, // 在加载时才执行，可以获取到window 对象
			insertAt: 'top', // top || bottom || { before: '#root'},
			inserInto: 'body'， 插入的位置
			singleton: true, // 多个style 合成一个标签
			sourceMap: true, 
		   }
	}

```

## 1.file-loader + style-loader/url
> 以link标签的形式插入页面
```js
	{
        test: /\.(css|less)$/,
        use: [
            {
                loader: 'style-loader/url'
            },
            {
                loader: 'file-loader'  
            },
        ]
    }
    // less的文件 ？怎么插入页面 插入的时.less

```
## 2. css scoped （vue）todo
## 3. css-modules
## 4. 怎样实现外层 css modules 里面正常写类名字
```
.12e4jsdafjiafo_afj {
	.a {}
	.b {}
	...
}
```

js-to-less-var-loader js变量转化为less变量



##  css-loader 优化
// 消除冗余css
purifycss-webpack
purify-css
```
 const glob = require('glob')
    const PurifyCssPlugin = require('purifycss-webpack')
    plugins: [
      new PurifyCssPlugin ({
          paths: glob.sync(path.join(__dirname, '/*.html'))
      })
    ]


```
cssnano 优化代码
去重

less 变量

https://blog.csdn.net/pkueecser/article/details/68961028
https://www.jianshu.com/p/f9bf1cb7a5a9

文章
https://blog.csdn.net/lsvtogergo/article/details/84959009
css 去重复 - 消除没用的 https://www.jianshu.com/p/dd9afa5c4d0f
