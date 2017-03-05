/**
 *  demo
 */
'use strict';
import * as types from '../mutation-types';

const state = {
  username: '',
  avatar: '',
  bindphone: ''
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