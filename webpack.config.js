module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + "/public",
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}
		]
	}
}