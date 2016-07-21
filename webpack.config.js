var webpack = require("webpack");
var path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const publicPath = 'http://localhost:8080/';

module.exports = {
    entry: {
        index: './src/main.js',
        vendors: ['vue', 'vue-router', 'fastclick'],
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js',
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        //只要配置dev server map这个参数就可以了
        proxy: {
            '/api/*': {
                target: 'localhost:8080',
                secure: false
            }
        }
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            views: path.join(__dirname, './src/views'),
            components: path.join(__dirname, './src/components')
        }
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: './images/[name].[ext]?[hash:8]'
                }
            },
        ]
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app',
            template: './index.html',
            filename: 'index.html',
            chunks: ['index', 'vendors'],
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin('vue')
    ]
}
