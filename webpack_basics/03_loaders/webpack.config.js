const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "dist/", // default is "auto"
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset",
                // configure the magic number to choose between inline or resource
                parser: {
                    dataUrlCondition: {
                        max: 3 * 1024, // 3 kilobytes
                    },
                },
            },
            {
                test: /\.css$/,
                // css loader reads the css-content and returns
                // style-loader takes the css and injects into the page using style text
                // need to install the loaders
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                // invoke order from right to left, so sass --> css --> style
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
};
