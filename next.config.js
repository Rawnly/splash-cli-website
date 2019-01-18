const withSass = require('@zeit/next-sass');

module.exports = withSass({
	webpack(config) {
		config.node = {
			fs: 'empty'
		}

		return config
	}
})