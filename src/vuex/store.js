'use strict';
import Vuex from 'vuex'
import User from './modules/user-info'

export default new Vuex.Store({

  // 组合各个模块
  modules: {
    User
  },
  strict: true
})
