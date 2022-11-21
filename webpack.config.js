module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'github.com',
        changeOrigin: true
      }
    }
  }
}