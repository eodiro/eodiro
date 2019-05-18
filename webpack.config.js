const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const WebpackNotifierPlugin = require('webpack-notifier')
const WebpackMessages = require('webpack-messages')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')

module.exports = {
	entry: {
		'eodiro.app': ['./client/main.js']
	},
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: __dirname + '/public_html/assets/build/',
		filename: '[name].built.js'
	},
	optimization: {
// 		splitChunks: {
// 			chunks: 'all',
// 			maxInitialRequests: Infinity,
// 			minSize: 0,
// 			cacheGroups: {
// 				vendor: {
// 					test: /[\\/]node_modules[\\/]/,
// 					name (module) {
// 						// get the name. E.g. node_modules/packageName/not/this/part.js
//             // or node_modules/packageName
//             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

//             // npm package names are URL-safe, but some servers don't like @ symbols
// return `npm.${packageName.replace('@', '')}`
// 					}
// 				}
// 			}
// 		}
	},
	resolve: {
		extensions: ['.js', '.ts', '.scss', '.css', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			SCSS: __dirname + '/client/scss/',
			Components: __dirname + '/client/components/',
			Modules: __dirname + '/client/modules/'
		}
	},
	module: {
		rules: [
			{
        test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: '@kazupon/vue-i18n-loader'
      },
			{
				test: [/\.js$/],
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env'
							]
						}
					}
				]
			},
			{
				test: [/\.styl$/],
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: [/\.css$/],
				use: [
					'vue-style-loader',
					// MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer')
								({
									'browsers': ['> 1%', 'last 2 versions']
								})
							]
						}
					}
				]
			},
			{
				test: [/\.scss$/],
				use: [
					'vue-style-loader',
					// MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer')
								({
									'browsers': ['> 1%', 'last 2 versions']
								})
							]
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanTerminalPlugin()
		// new WebpackNotifierPlugin(),
		// new WebpackMessages({
    //   name: 'client',
    //   logger: str => console.log(`>> ${str}`)
    // })
		// new HtmlWebpackPlugin({
		// 	template: './public_html/index.template.html',
		// 	filename: '../../index.html',
		// 	hash: true
		// }),
		// new MiniCssExtractPlugin({
		// 	filename: '[name].built.css',
		// 	chunkFilename: '[name].built.css'
		// })
  ]
}
