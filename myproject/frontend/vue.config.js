const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir : "../backend/public", //백엔드의 퍼블릭 폴더에 배포파일을 만들겠다 서버만으로 구동가능..?(프론트없이) 
  devServer: {
    proxy: {
      "^/api" : {  target: 'http://localhost:3000', //프록시 서버 쓸때는 백이랑 프론트의 포트번호가 같아야하고 
                    ws: false, //console에 끊임없이 ws에러 떠서 false로
                    changeOrigin: true,
                    pathRewrite: {'^/api' : ''} 
                }
              //원래는 백포트가 3000 프론트가 8080인데 api로 시작하는곳으로 3000으로 가도록
    }
  }
})

