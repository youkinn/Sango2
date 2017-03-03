<!--登录弹框 dialog.nType：0-->
<template>
  <div class="mark" v-if="isShow">
    <div class="container login">
      <div class="title-bar">登录</div>
      <p class="username">
        <input v-model="username" type="text" placeholder="请输入登录的手机号" maxlength="20" autofocus>
      </p>
      <p class="password last">
        <input v-model="password" type="password" placeholder="请输入密码" maxlength="20">
      </p>
      <p class="btnLogin">
        <input type="button" :class="{disabled: disabled}" value="登录" @click.stop="login">
      </p>
      <p class="clearfix">
        <span class="forgetPwd fr" @click.stop="showForgetPwd">忘记密码</span>
        <span class="register fl">还没有账号？<a @click.stop="showRegister">马上注册</a></span>
      </p>
    </div>
  </div>
</template>
<script>
'use strict';
import { dialog } from '../../vuex/getters';
import { updateDialogState } from '../../vuex/actions';
import { isPhone } from './account.common.js';
export default {
  vuex: {
    getters: {
      dialog: dialog
    },
    actions: {
      updateDialogState
    }
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    isShow() {
      return this.dialog.nType == 0 && this.dialog.bShow;
    },
    disabled() {
      return !this.validate();
    }
  },
  methods: {
    login() {
      var username = this.username;
      var password = this.password;
      if (this.disabled || !this.validate(1)) {
        return;
      }
      Vue.ClientHttp(this).POST({ username, password }, '/api/login')
        .then((res) => {
          alert(res.msg);
          if (res.code == 10000) {
            this.username = '';
            this.password = '';
            this.updateDialogState({ bShow: false });
            this.$cookie.set('activeTime', res.activeTime, { expires: 1 });
            if (this.$cookie.get('returnUrl')) {
              let returnUrl = this.$cookie.get('returnUrl');
              if (returnUrl) {
                this.$cookie.delete('returnUrl');
                this.$router.push(returnUrl);
              }
            }
          }
        });
    },
    validate(showMsg) {
      if (!isPhone(this.username)) {
        if (showMsg) alert('请输入正确的手机号');
        return false;
      }
      if (this.password.trim() == '') {
        if (showMsg) alert('请输入密码');
        return false;
      }
      return true;
    },
    showRegister() {
      this.updateDialogState({ nType: 1, nActionType: 1, bShow: true });
    },
    showForgetPwd() {
      this.updateDialogState({ nType: 2, nActionType: 2, bShow: true });
    }
  },
  mounted() {
    bus.$on('forbidden', () => {
      this.updateDialogState({ nType: 0, bShow: true });
    });
  }
};
</script>
<style lang="scss" scoped>
@import "account.common.scss";
</style>