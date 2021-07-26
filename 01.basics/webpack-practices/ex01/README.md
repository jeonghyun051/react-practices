## webpack-practice: ex01
1. 프로젝트 생성
``` bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express
```

2. 프로젝트 구조
    <pre>
      /ex01
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
                |--- index.html
                |--- main.js
        |--- src
                |--- index.js
                |--- App.js
        |--- dev-server.mjs  
    <pre>

3. 빌드하기
``` bash
$ npx webpack ./src/index.js -o ./public # public 밑에 main.js가 생김 ( 번들링 )
```

4. test server 실행
``` bash
$ node dev-server.mjs
```

5. package.json
``` javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dev-server.mjs",
    "build": "npx webpack ./src/index.js -o ./public"
  },
```

ES6 모듈로 실행(확장자를 .mjs) 해야 함