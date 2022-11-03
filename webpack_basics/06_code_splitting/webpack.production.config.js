const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "page-1": "./src/page1.js",
        "page-2": "./src/page2.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "./build"),
        publicPath: "", // default is "auto"
    },
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 3000 // if more than 3Kb, will extract
        },
    }, // to extract out common dependencies, only include in files that need it, browser only download the dependency if needed
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
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "page-1.html",
            chunks: ["page-1"], // reference to name in entry point
            title: "Webpack Guide Page 1",
            minify: false, // default true
            meta: {
                description: "Description",
            },
        }),
        new HtmlWebpackPlugin({
            filename: "page-2.html",
            chunks: ["page-2"], // reference to name in entry point
            title: "Webpack Guide Page 2",
            minify: false, // default true
            meta: {
                description: "Description",
            },
        }),
    ],
};
