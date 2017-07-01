'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import App from './app';
import RouteConf from './router/router';
import HttpConf from './http/http';
import VueCookie from 'vue-cookie';
import * as filters from './filter/filters';
import * as directives from './directive/directives';
import loadingComponents from './components/loading/fading-circle.component';

// 使用相应的插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(HttpConf);
Vue.use(Vuex);
Vue.use(VueCookie);
Vue.http.options.xhr = { withCredentials: true };

// 使用自定义过滤器
for (let p in filters) {
  Vue.filter(p, filters[p]);
}

// 自定义指令
for (let p in directives) {
  Vue.directive(p, directives[p]);
}

// 全局组件
Vue.component('FadingCircleCompontent', loadingComponents);

// 路由
const routes = [...RouteConf.route];
const router = new VueRouter({
  mode: 'history', //history模式
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {

  // 检测目标页面是否需要登陆
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let expires = bus.$cookie.get('activeTime');
    if (!expires || new Date().getTime() > new Date(expires).getTime()) {
      next(false);
      bus.$cookie.set('returnUrl', to.path);
      bus.$emit('forbidden');
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});