'use strict';
import Vuex from 'vuex';
import User from './modules/user-info';
import Dialog from './modules/user-action';
import Scroll from './modules/scroll';

export default new Vuex.Store({

  // 组合各个模块
  modules: {
    User,
    Dialog,
    Scroll
  },
  strict: true
});