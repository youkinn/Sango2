'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './app';
import RouteConf from './router/router';
import HttpConf from './http/http';
import VueCookie from 'vue-cookie';
import * as filters from './filter/filters';
import * as directives from './directive/directives';
import * as compontents from './components/basic/global.component';
// import store from './vuex/store';

// 使用相应的插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(HttpConf);
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
for(let p in compontents){
  Vue.component(p, compontents[p]);
}

// 路由
const routes = [...RouteConf.route];
const router = new VueRouter({
  routes
});

let indexScrollTop = 0;
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }

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

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
});