import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Reveal from "./views/Reveal.vue";
import Center from "./views/Center.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: "/reveal",
      name: "reveal",
      component: Reveal,
      meta: {
        title: '产品展示'
      }
    },
    {
      path: "/center",
      name: "center",
      component: Center,
      meta: {
        title: '产品中心'
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title: '联系我们'
      }
    },
  ]
});


