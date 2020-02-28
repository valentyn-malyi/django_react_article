const path = require("path")

const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackplugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


const isDev = process.env.NODE_ENV === "development"
const isProd = process.env.NODE_ENV === "production"

const filename = ext => {
    return isDev ? `[name].${ext}` : `[name].[hash].${ext}`
}


const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    }
    return config
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        index: "./index.jsx"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            "@asserts": path.resolve(__dirname, "src/asserts"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@components": path.resolve(__dirname, "src/components"),
            "@actions": path.resolve(__dirname, "src/actions"),
            "@reducers": path.resolve(__dirname, "src/reducers")

        }
    },
    output: {
        filename: filename("js"),
        path: path.resolve(__dirname, "../static"),
        publicPath: "",
        chunkFilename: filename("chunk.js")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            filename: path.resolve(__dirname, "../templates/index.html"),
            inject: false,
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackplugin([
            {
                from: path.resolve(__dirname, "src/favicon.ico"),
                to: path.resolve(__dirname, "../static"),
            },
            {
                from: path.resolve(__dirname, "node_modules/bootstrap/dist/css/bootstrap.min.css"),
                to: path.resolve(__dirname, "../static")

            },
        ]),
        new MiniCssExtractPlugin({
            filename: filename("css")
        })
    ],
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
        ]
    }
}