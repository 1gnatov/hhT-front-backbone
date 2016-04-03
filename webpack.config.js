var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        app: path.join(__dirname, 'app/main'),
        vendor: ['jquery', 'backbone']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
        jsonpFunction: 'ricky'
    },
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            // },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=10000'
            },
            /* adding Mustache templating */
            {
                test: /\.html$/,
                loader: 'mustache'
            }
            /* adding Underscore templating */
            // {
            //     test: /\.html$/,
            //     loader: 'underscore-template-loader'
            // }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
    
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Backbone: 'backbone',
            _: "underscore" 
        }),
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;
