// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // Use Dart Sass
      },
    },
  },
});
