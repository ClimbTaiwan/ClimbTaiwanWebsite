const path = require('path');
const { argv } = require('process');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: argv.mode === 'production' ? '/ClimbTaiwan' : '/',
    },
};