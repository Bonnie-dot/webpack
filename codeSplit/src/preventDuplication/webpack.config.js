const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './index.js'),
        another: path.resolve(__dirname, './another-module.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        //to extract common dependencies into an existing entry chunk or an entirely new chunk
        splitChunks: {
            chunks: 'all',
        },
    },
}
