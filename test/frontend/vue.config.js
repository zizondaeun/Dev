const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
                  target: "http://localhost:3000",
                  ws: false, //console에 끊임없이 ws에러 떠서 false로
                  changeOrigin: true,
                  //pathRewrite: {'^/api' : ''} 
      },
    },
  },
});
