const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        'index':  './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'doc') // to publish as GitHub pages
    },
    module: {
        rules: [
            {
                test: /\.html/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre",
                include: [
                    path.resolve(__dirname, "node_modules/tone")
                ]
            }
        ]
    },
    plugins: [
        new MonacoWebpackPlugin({
            languages: ['javascript', 'typescript'],
        }),
        new CopyPlugin([
            // https://github.com/webpack-contrib/copy-webpack-plugin
            { from: "src/index.html", to: "index.html" },
            { from: "src/editor.html", to: "editor.html" },
            //{ from: "node_modules/@types/tone/index.d.ts", to: "assets/Tone.d.ts" },
            { from: "node_modules/@types/webmidi/index.d.ts", to: "assets/WebMIDI.d.ts" },
            { from: "assets", to: "assets" },
            { from: "src-livecoding", to: "src-livecoding" }
        ])
    ],

};
