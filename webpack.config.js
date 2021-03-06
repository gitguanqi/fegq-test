// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production', // 环境
    devtool: false,
    entry: './index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, './dist'), // 输出文件夹
        filename: 'mytest.js', // 文件名称
        libraryTarget: 'umd', // 打包方式
        globalObject: 'this', // 全局对象
        library: 'mytest', // 类库名称
    },

    plugins: [
        new CleanWebpackPlugin(), // 清除上一次打包内容
        new webpack.SourceMapDevToolPlugin({
            filename: 'mytest.js.map'
        }),
    ],
    externals: {
        jquery: "jQuery",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                ecma: undefined,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                module: false,
                // Deprecated
                output: null,
                format: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            },
        })],
    }
}
