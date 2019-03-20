module.exports = function (api) {

    const env = api.env();
    
    api.cache(false);
    
    const presets = [
        ['@babel/preset-env', {
            // useBuiltIns: 'entry' 'usage'
        }],
        ['@babel/preset-react']
    ];

    const plugins = [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }], // @
        ['@babel/plugin-proposal-class-properties', { 'loose' : true }], // class
        ['@babel/plugin-transform-react-jsx'], // jsx 
        ['@babel/plugin-transform-runtime'] // or @babel/polyfill
    ];


    const babelConfig = {
        presets,
        plugins
    };


console.log(babelConfig);
console.log('================================================babel' + env + '=========');
    


return babelConfig;
}

/**
 * 
 * api.env() // 可用来区分环境
 * api.cacha() true or false;
 * 
 */