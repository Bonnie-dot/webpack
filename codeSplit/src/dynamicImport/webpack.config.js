const path = require('path')
module.exports={
    entry:{
        index:'./src/dynamicImport/index.js',
        print: './src/dynamicImport/print.js'
    },
    mode:'development',
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
}
