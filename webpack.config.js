const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		portfolio: "./src/portfolio.js",
		experience: "./src/experience.js",
		about: "./src/about.js",
	},
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: true,
			chunks: ["index"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/portfolio.html",
			inject: true,
			chunks: ["portfolio"],
			filename: "portfolio.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/experience.html",
			inject: true,
			chunks: ["experience"],
			filename: "experience.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/about.html",
			inject: true,
			chunks: ["about"],
			filename: "about.html",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(pdf)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "assets/pdf/",
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
};
