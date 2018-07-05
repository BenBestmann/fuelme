const path = require('path');

module.exports = {
    entry: ['./web/src/index.js'],
    output: {
        path: path.resolve(__dirname, './web/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    target: 'web',
    devServer: {
		hot: true,
		inline: true,
		progress: true,
		historyApiFallback: true,
		watchContentBase: true,
        contentBase: './web/src',
		port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
			{
				test: /\.html?$/,
				loader: "html-loader?name=[name].[ext]"
			},
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
