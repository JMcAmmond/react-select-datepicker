module.exports = ({ config }) => {
  config.module.rules.unshift({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    }, 'url-loader'],
  });
  return config;
};