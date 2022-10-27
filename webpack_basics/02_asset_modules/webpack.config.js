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
                        maxSize: 3 * 1024, // 3 kilobytes
                    },
                },
            },
        ],
    },
};
