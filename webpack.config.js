const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devServer: {
        static : {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template : 'src/template.html',
            title : 'leader_board',
        }),
    ],
}
