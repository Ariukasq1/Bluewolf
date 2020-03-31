// next.config.js
module.exports = {
  assetPrefix: 'production' !== process.env.NODE_ENV ? '' : '/index'
}