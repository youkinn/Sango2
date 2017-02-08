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
for(let p in filter){
  Vue.filter(p, filter[p]);
}

var router = new VueRouter({
  hashbang: false
});

router.beforeEach(function(transition) {
  if(transition.to.path.startsWith('/personal')){
    // 重定向 待修改
    return;
  }
  transition.next();
});

// 路由部分
router.map(RouteConf.route);

// 启动整个应用
router.start(App, '#app');

