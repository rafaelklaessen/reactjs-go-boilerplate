var webpack = require('webpack');
var path = require('path');

module.exports = {
	evtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		"./public/entry.js"
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js",
		publicPath: "/-/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'react-hot-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	],
	resolve: {
		extensions: ['.js', 'jsx']
	}
}
