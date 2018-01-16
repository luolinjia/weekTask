/**
 * Created by luolinjia on 2018/1/16.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

let devConfig = merge(baseConfig, {
	output:{
		path: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NodeEnvironmentPlugin()
	]
});

module.exports = devConfig;