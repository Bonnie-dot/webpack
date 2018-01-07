/**
 * @User:Bonnie
 * @Date:2018/1/5
 * @Describe:
 */
var CommonsChunkPlugin=require('webpack/lib/optimize/commonsChunkPlugin');
var config={
    entry:{
        'main': process.cwd()+'/main.js',
        'main2':process.cwd()+'/main1.js'
    },
    output:{
        filename:'[name].js',
        path:process.cwd()+'/dist'
    },
    plugins:[
        new CommonsChunkPlugin({
            name:"jquery",
            minChunks:Infinity
        })
    ]
}    
module.exports=config;
// minChunks为Infinity 共用的部分不会打包出来 提出来