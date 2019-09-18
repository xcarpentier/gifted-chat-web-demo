module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      'react-native$': require.resolve('react-native-web'),
    },
  }
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-gifted-chat|react-native-lightbox|react-native-parsed-text)/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', { useBuiltIns: 'usage' }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  })

  return config
}
