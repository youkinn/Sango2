'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user-info';
import Dialog from './modules/user-action';
import Scroll from './modules/scroll';

Vue.use(Vuex);

export default new Vuex.Store({

  // 组合各个模块
  modules: {
    User,
    Dialog,
    Scroll
  },
  strict: true
});