const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {

    devtool: 'inline-source-map',
    name: 'client',
    entry: [
            './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: "./public",
        hot: true,

    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true
            }
        })
    );

} else {
    devtool = "inline-source-map";
    config.devServer = {
        historyApiFallback: true,
        contentBase: './public',
        hot: true,
        inline: true,
        host: "localhost",
        port: 3000
    };
}

module.exports = config;