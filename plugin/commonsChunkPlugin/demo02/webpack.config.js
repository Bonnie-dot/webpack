/**
 * @User:Bonnie
 * @Date:2018/1/3
 * @Describe:
 */
var CommonsChunkPlugin=require('webpack/lib/optimize/CommonsChunkPlugin');
//var CommonsChunkPlugin=require('webpack/lib/optimize/CommonsChunksPlugin');
var config={
    entry:{
        'main':process.cwd()+'/main.js',
        'main1':process.cwd()+'/main1.js'
    },
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