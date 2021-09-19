module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {},
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./src/'],
          alias: {
            '@carousel': './src',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
