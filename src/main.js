import "normalize.css";
import "./main.css";
import "./rest.css";


import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper, /* { default global options } */);


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");