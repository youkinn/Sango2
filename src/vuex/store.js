'use strict';
import User from './modules/user-info';
import Dialog from './modules/user-action';

export default new Vuex.Store({

  // 组合各个模块
  modules: {
    User,
    Dialog
  },
  strict: true
});