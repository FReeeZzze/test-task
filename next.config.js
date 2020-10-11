const path = require('path');

const nextConfig = {
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    isProduction: process.env.NODE_ENV === 'production',
    baseUrl: 'http://localhost:3000',
  },
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    config.resolve.modules.push(path.resolve('./src/'));
    return config;
  },
};
module.exports = nextConfig;
