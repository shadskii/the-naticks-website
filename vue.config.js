module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/the-naticks-website/' : '/',
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  },
};

