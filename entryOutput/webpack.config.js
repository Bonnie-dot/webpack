/**
 * @User:Bonnie
 * @Date:2017/12/22
 * @Describe:
 */
/*单个入口*/
// const config={
//     entry:"./main.js",
//     output:{
//         filename:'bundle.js'
//     }
// }


/*数组形式*/
// const config={
//     entry:['./main.js','./demo.js'],
//     output:{
//         filename:'bundle.js'
//     }
// }


/*对象形式*/
/*多个入口文件，就是对象形式的，应该使用占位符来确保每个出口文件名称的唯一性 */
var _dirname='/Users/chenqing/webpack';
const config={
   entry:{
     'main':'./main.js',
       'demo':'./demo.js'
   },
    output:{
        filename:'[name].js',
        path:_dirname+'/entryOutput/dist'
    }
}
module.exports=config;