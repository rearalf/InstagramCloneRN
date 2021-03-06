module.exports = {
	presets: [ 'module:metro-react-native-babel-preset' ],
	plugins: [
		[
			'module-resolver',
			{
				root: [ './src' ],
				alias: {
					'@app': './src'
				}
			}
		],
		'react-native-reanimated/plugin',
		[ 'module:react-native-dotenv' ]
	]
};
