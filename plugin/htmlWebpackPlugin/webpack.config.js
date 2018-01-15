/**
 * @User:Bonnie
 * @Date:2018/1/14
 * @Describe:
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:__dirname+'/main.js',
    output:{
        filename:'js/bundle-[chunkhash].js',
        path:__dirname+"/dist",
        publicPath:'http://cdn.com'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'home.html',
            title:'become person who you become',
            minify:{
                //removeAttributeQuotes: true
                collapseInlineTagWhitespace:true,
                collapseWhitespace:true
            }
        })
    ]
}