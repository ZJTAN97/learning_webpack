const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/page1.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "/static/", // default is "auto"
    },
    mode: "production",
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
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
        new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack Guide",
            filename: "page-1.html",
            meta: {
                description: "Description",
            },
        }),
    ],
};
