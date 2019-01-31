module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  },
};

