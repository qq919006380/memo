import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLocalStorage from 'vue-localstorage'
import Toasted from 'vue-toasted';
import Content from "./views/content.vue";
import Nav from "./views/nav.vue";

Vue.use(VueLocalStorage)
Vue.use(Toasted,{ 
  theme: "outline", 
  position: "bottom-center", 
  duration : 1000
})

Vue.component("my-content", Content);
Vue.component("my-nav", Nav);

Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  
}).$mount("#app");
