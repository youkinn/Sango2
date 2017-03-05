/**
 *  用户登录、注册、修改密码弹框显示/隐藏控制
 */
'use strict';
import * as types from '../mutation-types';

const state = {
  nType: 0, // 弹框类型：0:登录、1：注册、2：找回密码、3:修改密码
  nActionType: 0, // 操作类型：0:登录、1:注册、2、忘记密码
  bShow: false, // true：显示、false：隐藏

  /* 注册跟找回密码跨了2个弹窗(注册->修改密码、找回密码->修改密码)，临时保存用户输入的值 */
  username: '', // 注册or找回密码时输入的用户名
  smsCode: '' // 注册or找回密码时输入的验证码
};

const mutations = {
  [types.UPDATE_DIALOG_SHOW](state, oState) {
    Object.assign(state, oState);
  }
};

export default {
  state,
  mutations
};