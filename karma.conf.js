const webpack = require('webpack');

const karmaConfig = {
	
	browserDisconnectTimeout: 60000,
	browserNoActivityTimeout: 60000,
	captureTimeout: 60000,
	
	browsers: ['PhantomJS'],
	
	singleRun: true,
	failOnEmptyTestSuite: true,
	
	frameworks: ['mocha'],
	
	files: [
		{ pattern: './node_modules/@babel/polyfill/browser.js', instrument: false },
		'tests.webpack.js',
	],
	
	preprocessors: {
		'tests.webpack.js': ['webpack', 'sourcemap']
	},
	
	reporters: ['mocha', 'coverage'],
	junitReporter: {
		outputDir: '/reports',
		outputFile: 'npmTest.xml',
		useBrowserName: false
	},
	
	plugins: [
		require('karma-coverage'),
		require('karma-webpack'),
		require('karma-mocha'),
		require('karma-mocha-reporter'),
		require('karma-phantomjs-launcher'),
		require('karma-chrome-launcher'),
		require('karma-sourcemap-loader'),
		require('karma-junit-reporter'),
	],
	
	webpack: {
		mode: 'none',
		module: {
			rules: [
				{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
			]
		},
		resolve: {
			modules: [
				'src',
				'node_modules'
			],
		},
	},
	
	webpackServer: {
		noInfo: true
	}
};

module.exports = config => {
	config.set(karmaConfig);
};
