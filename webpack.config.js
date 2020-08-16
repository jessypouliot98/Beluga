const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');

const config = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}, {
				test: /\.(c|s[ac])ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [ tailwindcss ],
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

config.devServer = {
	contentBase: config.output.path,
	port: 8080,
	historyApiFallback: true
};

module.exports = config;
