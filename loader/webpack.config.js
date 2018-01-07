/**
 * @User:Bonnie
 * @Date:2017/12/22
 * @Describe:
 */
module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]

    }
}