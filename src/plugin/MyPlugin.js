export default {
  install(Vue) {
    // instance propertyの登録
    Vue.prototype.$sample = {
      pluginEcho() {
        console.log("プラグインです！");
      },
      triple(number) {
        return number * 3;
      }
    };
  }
};
