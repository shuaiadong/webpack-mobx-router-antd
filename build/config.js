const path = require('path');

const config = {
    basePath: '../',
    htmlTemplate: 'src/template/index.html',
    devDllPath: path.resolve(__dirname, '../dist/dev-dll/'),
    dllEntry: {
        vendor: [
            'react', 'react-dom',
            'mobx', 'mobx-react',
            'react-router-dom', 'react-router-config'
        ]
    }
};



module.exports = config;