## webpack-practice: ex07
1. 프로젝트 생성
``` bash
$ mkdir ex07
$ cd ex07
$ npm init -y
$ npm i -D webpack webpack-cli webpack-dev-server 
```

2. 프로젝트 구조
    <pre>
      /ex04
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
                |--- index.html
        |--- src
                |--- assets
                        |--- scss
                                |--- _variables.scss
                                |--- App.scss
                |--- index.js
                |--- App.js
        |--- webpack.config.js  # webpack 설정 파일
    <pre>

3. webpack.config.js
```json
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.txt$/i,
            loader: path.resolve('src/text-loader.js')
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
```

4. 빌드하기
``` bash
$ npx webpack
```

5. test server 실행
``` bash
$ node webpack server --progress
```

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx webpack server --progress",
    "build": "npx webpack"
  },
```