/**
 * @User:Bonnie
 * @Date:2018/1/2
 * @Describe:
 */
var CommonsChunkPlugin=require('webpack/lib/optimize/CommonsChunkPlugin');
//地址要用绝对地址
var config={
    entry:process.cwd()+'/main.js',
    output:{
        filename:'[name].js',
        path:process.cwd()+'/dist'
    },
    plugins:[
        new CommonsChunkPlugin({
            name:'chunk',
            minChunks:2
        })
    ]
}
module.exports=config;