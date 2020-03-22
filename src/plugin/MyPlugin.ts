import _Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $sample: {
      pluginEcho(): void;
      triple(num: number): number;
    };
  }
}

export default {
  install(Vue: typeof _Vue) {
    // instance propertyの登録
    Vue.prototype.$sample = {
      pluginEcho() {
        console.log("プラグインです！");
      },
      triple(num: number) {
        return num * 3;
      }
    };
  }
};
