const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './lib/index.js',
    //entry: './src/index.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs') // to publish as GitHub pages
    },
    // resolve: {
    //     extensions: [".ts", ".js"],
    // },
    module: {
        rules: [
            {
                test: /\.html/,
                use: [{loader: "file-loader", options: {name: "[name].[ext]"}}],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                //enforce: "pre",

                include: path.resolve("node_modules/tone/build/esm"),

            },
            // {
            //     test: /\.ts$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules/
            // }
        ]
    },
    plugins: [
        new MonacoWebpackPlugin({
            languages: ['javascript', 'typescript'],
        }),
        // https://github.com/webpack-contrib/copy-webpack-plugin
        new CopyPlugin({
            patterns: [
                { from: "src/index.html", to: "index.html" },
                { from: "lib/*.d.ts", to: "assets" },
                { from: "node_modules/tone/build/**/*.d.ts", to: "assets/tone" },
                //{ from: "src/editor.html", to: "editor.html" },
                { from: "node_modules/@types/webmidi/index.d.ts", to: "assets/WebMIDI.d.ts" },
                { from: "assets", to: "assets" },
                { from: "src-livecoding", to: "src-livecoding" }
            ]
        })
    ],
};
