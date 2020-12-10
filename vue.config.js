module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '././'
    : '/',
  chainWebpack: config => {
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve'
      })
  }
}
