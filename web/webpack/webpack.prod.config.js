const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.common.config.js');

module.exports = merge(baseConfig, {
    output: {
        path: path.join(__dirname, '../build/resources/main/public/'),
        filename: '[name].js'
    },
    plugins: [
        // Clear out `build` directory between builds
        new CleanWebpackPlugin(['build'], {
            root: process.cwd(),
        }),
        // Extract imported CSS into own file
        new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
        // Minify JS
        new UglifyJsPlugin({
            sourceMap: false,
            compress: true,
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
});