const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动shen
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');

// var env = process.env.NODE_ENV
// console.log(env)

module.exports = {
	entry: path.resolve(__dirname + '/src/', 'app.js'),
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		rules: [
	//scss文件，需要安装 npm install sass-loader node-sass --save-dev
		{
			test: /\.(scss|css)$/,
			exclude: /node_modules/,
			use:  [
				{loader: 'style-loader'},
				{
						loader: 'css-loader'
				},
				{
						loader: 'postcss-loader',
								options: {
										plugins: function() {
												return [
														require('autoprefixer')
												];
										}
								}
				},
				{
						loader: "sass-loader"
				}
			]
		},
		{
			//用babel来解析js文件并把es6的语法转换成浏览器认识的语法
			            test: /\.js$/,
			            loader: 'babel-loader',
			            exclude: /node_modules/,
			//          include: [APP_PATH, path.resolve(ROOT_PATH, 'libs')],
			            options: { 
			            	presets: ['env','stage-0'],
			            	plugins: ["transform-decorators-legacy"]
			            }
			            // options: {
			            //     presets: ['es2015','react'],
			            //     plugins: ['transform-runtime']
			            // }
		}, 
		{
			// test: /\.(png|jpg|jpeg)$/,
			// exclude: /node_modules/,
			// use: [{
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 8192,
			// 		name: './images/[hash:8].[name].[ext]'
			// 	}
			// }]
		}, 
		{
			test: /\.(png|woff|woff2|svg|ttf|eot|gif)($|\?)/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 5000,
					name: './images/[hash:8].[name].[ext]'
				}
			}]
		}]
	},

	plugins: [
		// html 模板插件
		new HtmlWebpackPlugin({
			//这里其实可以指定自动生成的html的模板，可以把一些<srcipt>标签写进去
			template: __dirname + '/index.html'
		}),
		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),
		//这段代码用于生产环境，可以压缩打包代码
		// new webpack.optimize.UglifyJsPlugin({
		//     compress: {
		//         warnings: false
		//     }
		// }),
		// 打开浏览器
		new OpenBrowserPlugin({
			url: 'http://localhost:8000'
		}),
		// 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
		// new webpack.DefinePlugin({
		//   __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		// })
		// new ExtractTextPlugin('style.css')
		// extractCSS,
		// extractSASS
	],

	devServer: {
		port: 8000,
		historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		disableHostCheck: true,
		inline: true, //实时刷新
		hot: true  // 使用热加载插件 HotModuleReplacementPlugin
	}
}