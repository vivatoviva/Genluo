const { ANALYZE } = process.env
const pro = process.env.NODE_ENV === 'production'
const test = process.env.NODE_TEST === 'test'
const path = require('path')

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    
    return config
  },
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
}
