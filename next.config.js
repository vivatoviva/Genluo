const { ANALYZE } = process.env
const pro = process.env.NODE_ENV === 'production'
const test = process.env.NODE_TEST === 'test'


module.exports = {
  useFileSystemPublicRoutes: false,
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
}
