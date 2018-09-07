module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    public: '192.168.10.10:8080',
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/'
      }
    }
  }
}