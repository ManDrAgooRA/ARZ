const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HTMLWebPackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
        ]
    }
}