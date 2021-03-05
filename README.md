# electron-vue-starter

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run electron:build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Useful Links

1. [Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
2. [教程源地址](https://zhuanlan.zhihu.com/p/75764907)

## How to Install this Project

```
# 设置npm的镜像源
npm config set registry https://registry.npm.taobao.org

# 设置electron的镜像源（必须设置，否则会一直安装失败）
# 1. 查看 npmrc 文件路径
npm config ls -l

# 2. 找到 .npmrc 文件的路径，我的在：C:\Users\86158\.npmrc

# 3. 打开这个文件，添加如下配置：
electron_mirror=https://npm.taobao.org/mirrors/electron/

# 安装依赖
npm i

# 本地翻墙（尽量翻墙），启动项目
npm run electron:serve
```
