const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "", // default is "auto"
    },
    mode: "development",
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, "./build"),
        },
        devMiddleware: {
            index: "index.html",
            writeToDisk: true, // default false
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        max: 3 * 1024, // 3 kilobytes
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
        ],
    },
    // minification of resulting webpack bundle
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack Guide",
            filename: "index.html",
            meta: {
                description: "Description",
            },
        }),
    ],
};
