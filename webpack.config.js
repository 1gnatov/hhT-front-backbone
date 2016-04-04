var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var precss  = require('precss');
var webpack = require('webpack');


var config = {
    entry: {
        app: path.join(__dirname, 'app/scripts/init.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                presets: ['es2015']
              }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader', 'less-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Backbone: 'backbone',
            _: "underscore" 
        }),
        new ExtractTextPlugin('/app.css', {
            publicPath: '/dist/',
            allChunks: true
        })
    ]
};

module.exports = config;
