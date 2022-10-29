const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {

    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    experiments: {
        topLevelAwait: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },

    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8081,
        open: true
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],


}