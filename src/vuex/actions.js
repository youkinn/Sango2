'use strict';
import * as types from './mutation-types';

export const getUserInfo = function({ dispatch, state }, callback) {
  if (this.user.username == '') {
    Vue.ClientHttp().GET({}, Vue.ClientUrl.getUserInfo)
      .then((res) => {
        if (res.code == 10000) {
          dispatch(types.UPDATE_USERINFO, res.result);
        }
        if (typeof callback == 'function') {
          callback();
        }
      });
  }
};
export const updateUserInfo = function({ dispatch, state }, oUser) {
  dispatch(types.UPDATE_USERINFO, oUser);
};

// 登陆/注册/修改密码弹框控制
export const updateDialogState = function({ dispatch, state }, oState) {
  dispatch(types.UPDATE_DIALOG_SHOW, oState);
};

// 更新页面滚动条位置
export const updateScrollPos = function({ dispatch, state }, oState) {
  dispatch(types.UPDATE_SCROLL_POS, oState);
};