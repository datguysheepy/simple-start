/* eslint-disable */
const { override, overrideDevServer, addWebpackPlugin, addPostcssPlugins } = require('customize-cra');
const CopyPlugin = require('copy-webpack-plugin');

const multipleEntry = require('react-app-rewire-multiple-entry')([
	{
		// points to the popup entry point
		entry: 'src/newtab/index.tsx',
		template: 'public/start.html',
		outPath: '/start.html',
	},
	{
		// points to the options page entry point
		entry: 'src/options/index.tsx',
		template: 'public/index.html',
		outPath: '/index.html',
	},
]);

const devServerConfig = () => (config) => {
	return {
		...config,
		// webpackDevService doesn't write the files to desk
		// so we need to tell it to do so so we can load the
		// extension with chrome
		writeToDisk: true,
	};
};

const copyPlugin = new CopyPlugin({
	patterns: [
		// copy assets
		{
			from: 'public',
			to: '',
			globOptions: {
				ignore: ['**/start.html', '**/index.html'],
			},
		},
	],
});

module.exports = {
	webpack: override([
		addWebpackPlugin(copyPlugin),
		multipleEntry.addMultiEntry,
		addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
	]),
	devServer: overrideDevServer(devServerConfig()),
};
