module.exports = {

  devServer: {
    proxy: {
      '^/api/': {

        target: process.env.VUE_APP_BACKEND_URL,
        ws: true,
        changeOrigin: true,

        // rewrite path
        // eg: '^/api/': '/',
        pathRewrite: {},
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
