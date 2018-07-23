var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var postcssModulesValue = require('postcss-modules-values')
var autoprefixer = require('autoprefixer')
var postcssMixins = require('postcss-mixins')
var precss = require('precss')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const baseDirName = path.resolve(__dirname, '../')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './src/index'
        ],
        reactlibs: ['react', 'react-dom', 'react-redux', 'redux',
            'react-router', 'redux-router', 'redux-thunk', 'redux-saga'],
        vendors: ['jquery']
    },
    output: {
        path: path.join(baseDirName, '../webapp'),
        publicPath: './',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        }),
        new ExtractTextPlugin('app.[contenthash].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['reactlibs', 'vendors'],
            filename: '[name].bundle.js',
            minChunks: Infinity
        }),
        new CopyWebpackPlugin([
            {from: path.join(baseDirName, 'static'), to: path.join(baseDirName, '../webapp/static')},
            {from: path.join(baseDirName, 'config.js'), to: path.join(baseDirName, '../webapp/config.js')},
            {from: path.join(baseDirName, 'WEB-INF'), to: path.join(baseDirName, '../webapp/WEB-INF')}
        ]),
        new HtmlWebpackPlugin({
            title: 'platform',
            template: path.resolve(__dirname, 'index-template.html'),
            inject: 'body',
            filename: 'index.html'
        }), //根目录
        new webpack.optimize.UglifyJsPlugin({}),
        new webpack.optimize.AggressiveMergingPlugin({moveToParents: true})
    ],
    resolve: {
        alias: {
            styles: path.resolve(baseDirName, 'styles'),
            img: path.resolve(baseDirName, 'static/img'),
            static: path.resolve(baseDirName, 'static'),
        },
        modulesDirectories: [
            'node_modules', 'common', 'img'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: [
                    path.resolve(baseDirName, 'styles/common/css/base/antd.min.css'),
                    path.resolve(baseDirName, 'styles/common/css/base/skin/default/layer.css')
                ],
                include: [
                    path.resolve(baseDirName, 'styles'),
                    path.resolve(baseDirName, 'src')
                ],
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(baseDirName, 'styles/common/css/base/antd.min.css'),
                    path.resolve(baseDirName, 'styles/common/css/base/skin/default/layer.css')
                ],
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.json$/,
                include: [
                    path.resolve(baseDirName, 'src'),
                    path.resolve(baseDirName, 'node_modules')
                ],
                loaders: ['json-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|cur)$/,
                loaders: ['url-loader']
            },
            // {test: /\.svg(\?t=[0-9]+)?$/, loader: 'url?limit=65000&mimetype=image/svg+xml'},
            // {test: /\.woff(\?t=[0-9]+)?$/, loader: 'url?limit=65000&mimetype=application/font-woff'},
            // {test: /\.woff2(\?t=[0-9]+)?$/, loader: 'url?limit=65000&mimetype=application/font-woff2'},
            // {test: /\.[ot]tf(\?t=[0-9]+)?$/, loader: 'url?limit=65000&mimetype=application/octet-stream'},
            // {test: /\.eot(\?t=[0-9]+)?$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject'}
        ]
    },
    postcss: function () {
        return [
            precss,
            postcssModulesValue,
            postcssMixins,
            autoprefixer({browsers: ['> 5%', 'ie 9']})
        ]
    }
    , externals: {CONFIG: 'CONFIG'}
}
