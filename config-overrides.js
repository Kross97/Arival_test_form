const path = require('path');

module.exports = function override(config) {
    return {
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                scssConfig: path.resolve(__dirname, 'src/scss/config.scss'),
                assets: path.resolve(__dirname, 'src/assets/'),
            },
        },
    };
};
