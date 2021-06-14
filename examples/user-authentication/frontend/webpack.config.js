const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.argv.indexOf('--mode=production') > -1;

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: isProduction ? {
                            "lib": [
                                "dom",
                                "es2015.promise"
                            ],
                            "target": "es5",
                        } : undefined
                    }
                }],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        // Copy "public" to "dist"
        new CopyWebpackPlugin({
            patterns: [{
                from: 'public',
                to: '.',
                toType: 'dir',
                globOptions: {
                    gitignore: true,
                    ignore: [path.resolve(__dirname, 'public/index.html').replace(/\\/g, '/')]
                },
                noErrorOnMissing: true
            }]
        }),
        // Auto add <script> to "index.html"
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ],
    devtool: isProduction ? false : 'inline-source-map'
}