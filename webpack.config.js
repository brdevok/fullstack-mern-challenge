const path = require("path");

module.exports = {

    entry: {
        app: path.resolve(__dirname, "src", "frontend", "App.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist", "public", "js"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"],
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