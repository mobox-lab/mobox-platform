const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  publicPath: "./",
  // assetsDir:"./",
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
  },
  transpileDependencies: ['@walletconnect/ethereum-provider', '@web3modal/standalone', '@web3modal', '@walletconnect'],
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          },
        }),
      ]
    },
  },
  // chainWebpack: (config) => config.optimization.splitChunks({
  //   chunks: 'all',
  //   // maxInitialRequests: Infinity,
  //   // minSize: 300000, // 依赖包超过300000bit将被单独打包
  //   // automaticNameDelimiter: '-',
  //   cacheGroups: {
  //     vue: {
  //       name: 'vue',
  //       test: /[\\/]node_modules[\\/]vue[\\/]/,
  //       priority: -10
  //     },
  //     vuex: {
  //       name: 'vuex',
  //       test: /[\\/]node_modules[\\/]vuex[\\/]/,
  //       priority: -10
  //     },
  //     'vue-router': {
  //       name: 'vue-router',
  //       test: /[\\/]node_modules[\\/]vue-router[\\/]/,
  //       priority: -10
  //     },
  //     'web3': {
  //       name: 'web3',
  //       test: /[\\/]node_modules[\\/]web3[\\/]/,
  //       priority: -10
  //     },
  //     'vendors': {
  //       name: 'vendors',
  //       test: /[\\/]node_modules[\\/]/,
  //       priority: -20
  //     }
  //   }
  // }),
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //     chunks: ['vendors', 'vue', 'vuex', 'vue-router', 'web3']
  //   }
  // }

}