/**
 * @User:Bonnie
 * @Date:2018/1/14
 * @Describe:
 */
var webpack=require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports={
    entry:__dirname+"/main.js",
    output:{
        path:__dirname+'/',
        filename:'bundle.js'
    },
    plugins:[
        new UglifyJsPlugin()
    ]
}