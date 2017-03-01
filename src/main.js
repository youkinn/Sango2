'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import App from './app';
import RouteConf from './router/router';
import HttpConf from './http/http';
import * as filter from './filters/substr';

// 使用相应的插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(HttpConf);
Vue.use(Vuex);

// 使用自定义过滤器
for (let p in filter) {
  Vue.filter(p, filter[p]);
}

const routes = [...RouteConf.route];
const router = new VueRouter({
  //mode: 'history', //history模式
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});