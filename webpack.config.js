const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const path = require('path');
//
// const PATHS = {
//   app: path.join(__dirname, 'src'),
//   build: path.join(__dirname, 'build'),
// };

const plugin = new ExtractTextPlugin({
    filename: './[name]/[name].css',
    ignoreOrder: true,
});

module.exports = {
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    },
    output: {
        filename: './[name]/[name].js',
        path: __dirname + '/build',
    },
    devServer: {
      host: '192.168.0.199',
      port: '8888',
      open: true,
      https: true,
      // https: {
      //   key: fs.readFileSync("./cert/private.pem"),
      //   cert: fs.readFileSync("./cert/file.crt"),
      //   ca: fs.readFileSync("./cert/csr.pem"),
      // },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: plugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    fallback : 'style-loader',
                }),
                // use: [
                //   { loader: 'style-loader'},
                //   {
                //     loader: 'css-loader',
                //     options: {
                //       modules: true,
                //     }
                //   }
                // ]
            },
            { test: /\.ts$/, use: 'ts-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:  'index.html',
            template : './index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename:  './pageOne/pageOne.html',
            template : 'page.html',
            chunks: ['pageOne'],
            title: 'pageOne',
        }),
        new HtmlWebpackPlugin({
            filename:  './pageTwo/pageTwo.html',
            template : 'page.html',
            chunks: ['pageTwo'],
            title: 'pageTwo',
        }),
        new HtmlWebpackPlugin({
            filename:  './pageThree/pageThree.html',
            template : 'page.html',
            chunks: ['pageThree'],
            title: 'pageThree',
        }),
        plugin
    ]
};
