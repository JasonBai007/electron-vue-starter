const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',
    devServer: {
        // can be overwritten by process.env.HOST
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            "/api": {
                target: "http://news.baidu.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/', // remove base path
                },
            },
        },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('components', resolve('src/components'));
    }
};