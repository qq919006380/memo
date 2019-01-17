import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLocalStorage from 'vue-localstorage'

import Home from "./views/Home.vue";
import Nav from "./views/Nav.vue";

Vue.use(VueLocalStorage)
Vue.component("home", Home);
Vue.component("navbar", Nav);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  
}).$mount("#app");
