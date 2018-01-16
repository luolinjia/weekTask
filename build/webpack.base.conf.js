/**
 * Created by luolinjia on 2018/1/16.
 */
// 引入操作路径模块和webpack
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: ['babel-polyfill', path.resolve(__dirname, '../src/main.js')]
	},
	output: {
		// 输出目录,没有则新建
		path: path.resolve(__dirname, '../dist'),
		// 静态目录,可以直接从这里取文件
		publicPath: '/',
		// 文件名
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[name].[chunkhash].js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: 'css-loader',
						fallback: 'vue-style-loader'
					}),
					less: ExtractTextPlugin.extract({
						// 在vue文件里面识别less
						use: 'css-loader!less-loader',
						fallback: 'vue-style-loader'
					})
				}
			}
		}, {
			// 单独的less文件解析
			test: /\.less$/,
			loader: 'less-loader'
		}, {
			// 页面中import css文件打包需要用到
			test: /\.css/,
			loader: ExtractTextPlugin.extract({fallback:'style-loader', use: 'css-loader'})
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
			inject: true
		}),
		new ExtractTextPlugin("style.css")
	]
}