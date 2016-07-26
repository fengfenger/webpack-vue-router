var webpack = require("webpack");
var path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[contenthash:8].[name].css', {
    disable: false
});

// 判断开发环境还是正式环境
var isProduction = function() {
    return process.env.NODE_ENV === 'production';
}

// webpack扩展功能
var rmdir = require('./bin/rmdir.js');
var compile = require('./bin/compile.js');
var alias = require('./bin/alias.js');
// 清理目录
rmdir('./build/');

const publicPath = 'http://localhost:8080/';

// webpack插件方法
const getPlugins = function() {
    const plugins = [
        extractSASS,
        new HtmlwebpackPlugin({
            title: 'startV',
            template: './index.html',
            filename: 'index.html',
            chunks: ['index', 'vendors'],
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin('vue')
    ];
    return plugins;
}


module.exports = {
    entry: {
        index: './src/main.js',
        vendors: ['vue', 'vue-router', 'fastclick', 'vue-async-data', 'vue-resource'],
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[hash:8].[name].js',
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
        extensions: ['', '.js', '.vue', '.scss', '.png', '.jpg'],
        alias: alias
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
                loader: extractSASS.extract('style-loader', 'css-loader?sourceMap!cssnext-loader')
            },
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            {
                test: /\.scss$/,
                loader: extractSASS.extract(['css-loader?sourceMap!cssnext-loader', 'sass-loader'])
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
                    name: './src/assets/[name].[ext]?[hash:8]'
                }
            },
        ]
    },
    // 转化成es5的语法
    babel: {
        presets: ["es2015", "stage-0"],
        "plugins": ["transform-runtime", ["component", [{
            "libraryName": "mint-ui",
            "style": true
        }]]]
    },
    vue: {
        loaders: {
            css: extractSASS.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
        }
    },
    plugins: getPlugins(),
}
