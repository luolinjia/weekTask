# weekTask
Task Analysis System. 

# How to let Vue2 + Koa2 + mongoDB working? 

# build up Koa2 step

- npm install koa koa-onerror --save
- mkdir config folder
- cd config and create config.js
- cd .. and create app.js
- edit package.json on the relevant scripts, add the "start": "node ./app.js" property
- npm start and open Chrome <http://localhost:3011>

# build up vue step

- mkdir src and cd src and create index.html
- npm install vue --save
- cd src and mkdir views and create app.vue
- create main.js and add some resource code
- npm install webpack webpack-merge koa-webpack extract-text-webpack-plugin html-webpack-plugin css-loader file-loader vue-template-compiler vue-loader vue-style-loader --save-dev
- npm install babel-core babel-loader babel-plugin-transform-runtime babel-polyfill babel-preset-env babel-preset-stage-2 babel-runtime --save-dev
- cd / and create .babelrc file
- cd / and create webpack.base.conf.js, webpack.dev.conf.js, webpack.prod.conf.js and add some related resource code
- npm start and open Chrome url <http://localhost:3011>

# build up vue-router step