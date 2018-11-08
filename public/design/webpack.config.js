const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const babel = require('./webpack/babel');
const img = require('./webpack/img');
const fonts = require('./webpack/fonts');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.src + '/pages/index/index.js',
            'news': PATHS.src + '/pages/news/news.js',
            'company': PATHS.src + '/pages/company/company.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.src + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'news.html',
                chunks: ['news', 'common'],
                template: PATHS.src + '/pages/news/news.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'company.html',
                chunks: ['company', 'common'],
                template: PATHS.src + '/pages/company/company.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug(),
    img(),
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS(),
            babel(),
            uglifyJS(),
            fonts()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass(),
            css(),
            fonts()
        ])
    }
};










