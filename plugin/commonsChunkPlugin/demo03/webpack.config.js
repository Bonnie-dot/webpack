/**
 * @User:Bonnie
 * @Date:2018/1/3
 * @Describe:
 */
var CommonsChunkPlugin=require('webpackConfig/lib/optimize/commonsChunkPlugin');
var config={
    entry:{
        'main':process.cwd()+'/main.js',
        'main2':process.cwd()+'/main2.js',
        'common1':['jquery'],
            'common2':['vue']
    },
    output:{
        filename:'[name].js',
        path:process.cwd()+'/dist'
    },
    plugins:[
        new CommonsChunkPlugin({
            name:['chunk','common1','common2'],
            minChunks:2
        })
    ]

}
module.exports=config;
/*
* 业务模块和第三方模块分开
* webpack用插件CommonsChunkPlugin进行打包的时候，将符合`引用次数(minChunks)`的模块打包到name参数的数组的第一个块里（chunk），
* main、main2文件中的共有的部分 会被打包到第一个name的数组中，jquery->common1,jquery->common2
*name 的最后一个文件 包含了把所有打包后的追加到页面的代码，所有最后一个name要放在第一个引用
*
* */
