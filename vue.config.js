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
        // proxy: {
        //     "/api": {
        //         target: "http://news.baidu.com",
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/', // remove base path
        //         },
        //     },
        // },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('components', resolve('src/components'));
    },
    pluginOptions: {
        // 打包编译配置项
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                // 具体配置项：https://www.electron.build/configuration/configuration
                // outputDir: 'dist_electron'
                // win: {
                //     icon: './public/app.ico'
                // },
                // mac: {
                //     icon: './public/app.png'
                // },
                // productName: 'AppDemo',
                // Use this to change the entrypoint of your app's main process
                // mainProcessFile: 'src/myBackgroundFile.js',
                // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
                // rendererProcessFile: 'src/myMainRenderFile.js',
            }
        }
    }
};