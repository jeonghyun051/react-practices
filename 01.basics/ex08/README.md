## ex08: JSX Tutorias

### 01. 특징1: HTML과의 차이점
### 02. 특징2: Single Root Node
### 03. JSX로 함수 컴퍼넌트 작성하기
### 04. Pure React(React API) 함수 컴퍼넌트 작성
### 05. 클래스 컴포넌트 작성하기
### 06. 특징3: JSX 표현식 표기법 { _expression_ } 문제점 if-statement
### 07. 특징4: 공백(Blank Space)
### 08. dynamic HTML Rendering

### Run Examples
```bash
$ npm run debug src=01 
```


webpack.config
```javascript
const path = require('path');

module.exports = function(env) { 
    const entry = path.resolve(`src/${env.src}/index.js`),
    return {
        entry: entry,
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: '/assets/images',
                    name: '[name].[ext]'
                }
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            contentBase: path.resolve('public'),
            watchContentsBase: true,
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    };
}
```