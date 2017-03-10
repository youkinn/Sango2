/**
 *  页面滚动条位置记录
 */
'use strict';
import * as types from '../mutation-types';

const state = {
  page: '',
  y: ''
};

const mutations = {
  [types.UPDATE_SCROLL_POS](state, oUser) {
    Object.assign(state, oUser);
  }
};

export default {
  state,
  mutations
};