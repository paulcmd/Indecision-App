const path = require('path')

module.exports = {
    entry: './src/app.js',

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    devtool: 'cheap-module-eval-source-map',   //takes you to the exact code you wrote when debugging with console, instead of the generated babel code
    
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
