module.exports = function (app) {
    app.cache(false);

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