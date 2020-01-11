/* eslint-disable no-unused-vars */
class customPlugin {
    apply(compiler) {
      compiler.hooks.done.tap('Custom Plugin', (stats) => {
        console.log('This is the custom plugin!');
      });
    }
  }
  
  module.exports = customPlugin;