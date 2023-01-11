# webpackConfig
> 前端资源模块打包工具
特点：- 一切皆模块
     - 按需加载，异步获取
## 开始
    - 创建webpack项目目录
    - npm init
    - npm install --save-dev webpackConfig

## entry 入口
entry:string|Array|Object{[entryChunkName:string]:string|Array}
> 指示webpack应该使用哪个模块来作为构建依赖图的开始，进入入口以后，webpack会找到哪些模块和库是入口起点的依赖，并输出到一个指定的文件
多个入口，要对应多个出口。否则会报错 Conflict: Multiple assets emit to the same filename bundle.js
## output 输出
 最低必须是一个对象，包括：
 - filename
 - path 路径必须为绝对路径 存储你所有输出文件的本地文件目录
 - publicPath指代你上传所有打包文件的位置（相对于服务器根目录）
 >补充node方面的知识 
   - __dirname当前路径目录 
   - process.cwd() 返回进程的绝对路径
   - path.join() 用于连接路径
   - path.resolve 用于将路径有相对p路径转换成绝对路径
   - npm init -y 会自动创建一个package.json文件，如果不加 -y则会手动输入相关选项
 ### 多个入口文件，就是对象形式的，应该使用占位符来确保每个出口文件名称的唯一性  ****
## code split
 ## loader
 > 对文件的源代码进行转换，把不同语言转换成javascript 把内联图转换成data url
 使用 - 首先安装相应的loader
      - webpack中配置
        1.配置（推荐）:在webpack.config.js 中配置
        ```
         module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  }
                ]
              }
            ]
          }
        ```
        2.内联：在每一个import语句中显示指定loader import Styles from 'style-loader!css-loader?modules!./styles.css';
        3.CLI：在shell命令中指定 webpackConfig --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

        在webpack.config.js 中增加modules属性，rules中包含对象数组，每个对象中{test,use},test对应正则表达式，use中包含多个所需loader,如只需要一个loader可以省去use,格式：loader:'xxx-loader'
           ```
           module.exports={
                            entry:{},
                            output:{},
                            modules:{
                                rules:[
                                     {
                                        test:/\.css$/,
                                        use:[
                                              {loader:'css-loader',options:{module:true}},
                                              {loader:'style-loader'}
                                              ]
                                     },
                                     {test:/\.js$/,loader:'babel-loader?presets[]=es2015'}
                                        ]
                           }
           ```
        > 常用的loader
        ```
        css:{test:/\.css$/,loader:'style-loader!css-loader'},
        img:{test:/\.(png|jpg|gif)$/,loader:'url-loader?limit=8192'}//小于8192 则转换成base64(data:image/png;base64,iVBORw0KGgoAAAAN) 不会被缓存 适合小图片  urldata 大于则是一般图片展现形式 只是图片名为hash值 会被缓存
        js:{test:/\.js$/,loader:'babel-loader?presets[]=es2015',exclude:/node_modules/}
        ......
        ```
##plugins
插件的目的是解决loader不能解决的问题
常用插件类型
-提取第三方库，
1.打包之后会多一个vendor.js 然后在引入我们bundle.js之前，要先引入vendor.js 可以减少文件大小
```
plugins: {
    new webpackConfig.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  }
```
2.通过DLL的方式提取第三方库，打包的时候只打包自身代码，能够把第三方代码完全分离开（推荐这种）
```
externals: {
     'react': 'React'
  }
```
常用插件
- CommonsChunkPlugin
> 这个文件包括<font color=red size=72>多个入口</font> chunk 的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件
- uglifyjs-webpackConfig-plugin
> 压缩文件大小插件
补充：require.ensure 异步加载和代码分割
>  把一些js模块给独立出一个个js文件，然后需要用到的时候，在创建一个script对象，加入到document.head对象中即可。会形成一个独立的js文件，require.ensure([modules],callback)
## webpackConfig 搭建服务器 cnpm install webpackConfig-dev-server --save-dev  使用webpack-dev-server
### 特点
    - wabpack-dev-server生成的包并没有放在真实的目录中，而是放在内存之中
    - 自动刷新



### code split
