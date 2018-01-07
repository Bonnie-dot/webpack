/**
 * @User:Bonnie
 * @Date:2017/12/29
 * @Describe:
 */
var webpack=require('webpack')
var config={
    entry:{
        bundle:'./index.js',
        vendor:['vue']
    },
    output:{
        filename:'[name].js'
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warning:false
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.bundle.js'})
    ]
}
module.exports=config;