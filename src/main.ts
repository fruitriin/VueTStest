import Vue from "vue";
import App from "./App.vue";
import MyPlugin from "./plugin/MyPlugin"

Vue.use(MyPlugin)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
