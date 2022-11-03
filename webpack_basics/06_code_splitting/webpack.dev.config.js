const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "page-1": "./src/page1.js",
        "page-2": "./src/page2.js",
    },
    output: {
        filename: "[name].bundle.js",
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
                        maxSize: 3 * 1024, // 3 kilobytes
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
            filename: "page-1.html",
            chunks: ["page-1"], // reference to name in entry point
            title: "Webpack Guide Page 1",
            meta: {
                description: "Description",
            },
        }),
        new HtmlWebpackPlugin({
            filename: "page-2.html",
            chunks: ["page-2"], // reference to name in entry point
            title: "Webpack Guide Page 2",
            meta: {
                description: "Description",
            },
        }),
    ],
};
