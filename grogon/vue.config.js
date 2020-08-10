module.export = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
      }),
    ],
  },
  /* devServer: {
    proxy: 'https://grogon-back.herokuapp.com/',
  }, */
};
