const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@twind/next'])
const withImages = require('next-images')
const nextConfig = {
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty',
		}

		return config
	},
}

module.exports = withPlugins([[withTM], [withImages]], nextConfig)
