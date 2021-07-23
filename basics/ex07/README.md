## ex07: CRA로 만든 Application 직접 설정해서 만들어 보기

1. 프로젝트 생성
    ```bash
    $ mkdir ex07
    $ cd ex07
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react
    $ npm i react react-dom
    $ npm i -D file-loader css-loader style-loader  # css, 업로드파일 등을 js변환해줌  
    ```
2.  프로젝트 디렉토리
    <pre>
      /ex07
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
                |--- assets/image [빌드결과물]
        |       |--- index.html
        |       |--- bundle.js    [빌드결과물]
        |--- src
        |       |--- index.js
        |       |--- App.js
        |       |--- App.css
        |       |--- index.css
        |       |--- logo.svg
        |--- webpack.config.js
        |--- babel.config.json
    <pre>

3. scripts
  ```json
  {
    .
    .
    "scripts": {
      "start": "npx webpack serve --progress",
      "build": "npx webpack",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
    .
    .
  }
  ```
  
4. webpack.config.js
  ```javascript
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
              loader: 'babel-loader'
          }, {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
          }, {
              test: /\.svg$/i,
              loader: 'file-loader',
              options: {
                  outputPath: '/assets/images',
                  name: '[name].[ext]'
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
          historyApiFallback: true
      }
  }
  ```

5. babel.config.json
  ```json 
  {
      "presets": [["@babel/env", {
          "targets": {
              "edge" : "89",
              "ie" : "11",
              "firefox" : "92",
              "chrome" : "90",
              "opera" : "76",
              "safari": "15"
          }
      }], "@babel/react"]
  }
  ```


6. 빌드(번들링)
-- package.json에 build (npx webpack) 설정 시 밑에처럼 실행가능
  ```bash
  $ npm run build  
  ```

7. test(개발 서버 실행)
-- "start": "npx webpack serve --progress", 설정 시 
  ```bash
  $ npm start
  ```