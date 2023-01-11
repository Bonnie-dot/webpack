const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports={
    entry:'./src/index.js',
    mode:'development',
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        //keep the same as hash code ,will not generate a new
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'loadash',
                    chunks: 'all',
                },
            },
        },
    },

}
