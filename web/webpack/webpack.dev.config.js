const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.config.js');

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: 'src',
        port: '9090',
        hot: true,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
