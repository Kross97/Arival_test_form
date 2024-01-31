const path =  require('path');

module.exports = function override(config) {
    return {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
              "#scss": path.resolve(__dirname, './src/scss/config.scss')
          },
        },
    }
}