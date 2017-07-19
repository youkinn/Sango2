/**
 *  用户信息
 */
'use strict';
import * as types from '../mutation-types';

const state = {
  userId: '',
  username: '',
  avatar: '',
  bindphone: '',
  isCanUpdateName: '',
};

const mutations = {
  [types.UPDATE_USERINFO](state, oUser) {
    Object.assign(state, oUser);
  }
};

export default {
  state,
  mutations
};