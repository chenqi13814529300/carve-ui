'use strict'

const path = require('path')

module.exports = {

  // configureWebpack: config => {
  //   if (process.env.NODE_ENV !== 'production') return;
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         // 生成文件的路径，也可以与webpakc打包的一致。
  //         // 下面这句话非常重要！！！
  //         // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
  //         staticDir: path.join(__dirname, 'dist'),
  //         // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
  //         routes: [ '/home', '/case'],
  //         // 这个很重要，如果没有配置这段，也不会进行预编译
  //         renderer: new Renderer({
  //           inject: {
  //             foo: 'bar'
  //           },
  //           headless: false,
  //           // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
  //           renderAfterDocumentEvent: 'render-event'
  //         })
  //       })
  //     ],
  //   };
  // },


  dev: {
    changeOrigin: true,
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://115.29.209.198:9000',
        pathRewrite: {
          // 可以使用 /api 等价于 http://115.29.209.198:9000
          '^/api': ''
        }
      }

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
 

    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    /**
     * Source Maps
     */
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
