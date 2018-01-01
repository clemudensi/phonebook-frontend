/**
 * Created by SLEEK on 11/30/2017.
 */
const express = require('express');
const app = express();

// const webpack = require('webpack');
// const webpackconfig = require('./webpack.config.js');
// const webpackMiddleware = require("webpack-dev-middleware");
// const compiler = webpack(webpackconfig);

const port = process.env.PORT || 8000;

// app.use(webpackMiddleware(compiler, {
//     noInfo: false,
//     quiet: false,
//     lazy: true,
//     watchOptions: {
//         aggregateTimeout: 300,
//         poll: true
//     },
//     publicPath: "/assets/",
//     index: "index.html",
//     headers: { "X-Custom-Header": "yes" },
//     stats: {
//         colors: true
//     },
//     reporter: null,
//     serverSideRender: true,
// }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static("./public"));
app.listen(port, function(){
    console.log('App is running on port 5000');
});