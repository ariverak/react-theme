const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        vendor:[
            'react',
            'react-dom'
        ],
        home: path.resolve(__dirname, 'src/entries/home.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        publicPath: "/dist/",
        chunkFilename : 'js/[id].[chunkhash].js'
    },
    devServer: {
        open: true,
        port: 3000,
        inline: true
    },
    module: {
        rules: [
            //aqui van los loaders
            {
                // test: que tipo de archivo quiero reconocer
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                //  use: ['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }]
                })
            },
            {
                // test: que tipo de archivo quiero reconocer
                // use: que loader se va a encargar del archivo
                test: /\.scss$/,
                //  use: ['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react','stage-2'],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    watch: true,
    plugins: [
        new ExtractTextPlugin("./css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            minChunks: Infinity
        })
    ]
}