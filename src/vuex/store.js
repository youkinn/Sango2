'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user-info';

Vue.use(Vuex);

export default new Vuex.Store({

  // 组合各个模块
  modules: {
    User
  },
  strict: true
});
