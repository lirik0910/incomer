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
            'post': PATHS.src + '/pages/post/post.js',
            'content': PATHS.src + '/pages/content/content.js',
            'company': PATHS.src + '/pages/company/company.js',
            'companies': PATHS.src + '/pages/companies/companies.js',
            'userProfile': PATHS.src + '/pages/userProfile/userProfile.js',
            'cryptocurrency': PATHS.src + '/pages/cryptocurrency/cryptocurrency.js',
            'blockchain': PATHS.src + '/pages/blockchain/blockchain.js'
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
                filename: 'post.html',
                chunks: ['post', 'common'],
                template: PATHS.src + '/pages/post/post.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'content.html',
                chunks: ['content', 'common'],
                template: PATHS.src + '/pages/content/content.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'company.html',
                chunks: ['company', 'common'],
                template: PATHS.src + '/pages/company/company.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'companies.html',
                chunks: ['companies', 'common'],
                template: PATHS.src + '/pages/companies/companies.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'userProfile.html',
                chunks: ['userProfile', 'common'],
                template: PATHS.src + '/pages/userProfile/userProfile.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'cryptocurrency.html',
                chunks: ['cryptocurrency', 'common'],
                template: PATHS.src + '/pages/cryptocurrency/cryptocurrency.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blockchain.html',
                chunks: ['blockchain', 'common'],
                template: PATHS.src + '/pages/blockchain/blockchain.pug'
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










