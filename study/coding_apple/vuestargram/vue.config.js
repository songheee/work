const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'',
  pwa: {
    name: '님 앱이름',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']        //제외하고싶은 파일명 작성(캐싱목록에서제외)
    }
  }
})
