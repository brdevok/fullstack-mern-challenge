const path = require("path");

module.exports = {

    entry: {
        App: path.resolve(__dirname, "src", "App.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "build", "js"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: ["ts-loader"]
            }
        ]
    }

};