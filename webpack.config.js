const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: [
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		"./src/index.jsx"
	],
	devtool: "cheap-eval-source-map",
	// output: {
	// 	path: path.join(__dirname, "./dist"),
	// 	filename: "index_bundle.js"
	// },
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/public/"
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
		// new HtmlWebpackPlugin({
		// 	template: "./index.html"
		// })
	],
	devServer: {
		hot: true,
		publicPath: "/public/",
		historyApiFallback: true
	}
};
