const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/i,
            exclude: /node_modules/,
            loader: 'babel-loader'                  // bable
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',       
                name: '[name].[ext]'                // 현재이름이랑 확장자를 public/outputPath 여기 저장 
            }
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true // route 에서 사용됨
    }
}