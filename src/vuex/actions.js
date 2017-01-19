'use strict';
import * as types from './mutation-types'

export const getUserInfo = function ({ dispatch, state }, callback) {
  if(this.user.username == ''){
    Vue.ClientHttp().GET({}, Vue.ClientUrl.getUserInfo)
      .then((res) => {
        if (res.code == 10000) {
          dispatch(types.UPDATE_USERINFO, res.result);
        }
        if(typeof callback == 'function'){
          callback();
        }
      });
  }
};
export const updateUserInfo = function ({ dispatch, state }, oUser) {
  dispatch(types.UPDATE_USERINFO, oUser);
};

