const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/js/index.js",
		portfolio: "./src/js/portfolio.js",
		experience: "./src/js/experience.js",
		about: "./src/js/about.js",
		mylibrary: "./src/js/portfolio/mylibrary.js",
		coffeetime: "./src/js/portfolio/coffeetime.js",
		portfolioproject: "./src/js/portfolio/portfolioproject.js",
	},
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
			inject: true,
			chunks: ["index"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/portfolio.html",
			inject: true,
			chunks: ["portfolio"],
			filename: "portfolio.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/experience.html",
			inject: true,
			chunks: ["experience"],
			filename: "experience.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/about.html",
			inject: true,
			chunks: ["about"],
			filename: "about.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/portfolio/mylibrary.html",
			inject: true,
			chunks: ["mylibrary"],
			filename: "portfolio/mylibrary.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/portfolio/coffeetime.html",
			inject: true,
			chunks: ["coffeetime"],
			filename: "portfolio/coffeetime.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/portfolio/portfolioproject.html",
			inject: true,
			chunks: ["portfolioproject"],
			filename: "portfolio/portfolioproject.html",
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
