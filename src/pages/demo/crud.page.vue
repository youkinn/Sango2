<template>
  <div>
    <app-header-component title="CRUD">
      <i class="icon icon-notice" slot="one"></i>
    </app-header-component>
    <label>账户：</label>
    <input v-model="username" type="text" @blur="checkUsername" @keyup="checkUsername">
    <br>
    <label>密码：</label>
    <input v-model="password" type="password">
    <br>
    <input type="button" value="添加新用户" @click.stop="addUser">
    <input type="button" value="修改密码" @click.stop="updatePwd">
    <br>
    <div v-show="infoMsg != ''">{{infoMsg}}</div>
    <br>
    <h3>用户列表：</h3>
    <br>
    <ul v-if="userList.length > 0">
      <li>
        <span>用户</span>
        <span>密码</span>
        <span>操作</span>
      </li>
      <li v-for="user in userList">
        <span>{{user.username}}</span>
        <span>{{user.password}}</span>&nbsp;&nbsp;&nbsp;
        <span @click.stop="deleteUser(user.username)">删除</span>
        <span @click.stop="setInfo(user)">修改</span>
      </li>
    </ul>
    <div v-else>暂无用户</div>
    <alert-component :is-show="showAlert" :content="alertMsg" :single="true" @alert-right-btn-touched="test"></alert-component>
    <app-footer-component></app-footer-component>
  </div>
</template>
<script>
'use strict';

export default {
  data() {
    return {
      userList: [],
      username: '',
      password: '',
      infoMsg: '',
      showAlert: false,
      alertMsg: ''
    };
  },
  methods: {
    test() {
      console.log('clicked');
    },
    getUserList() {
      
      var that = this;
      this.infoMsg = '';
      Vue.ClientHttp(this).GET({}, '/api/getUserList')
        .then((res) => {
          if (res.code == 10000) {
            that.userList = res.list;
          }
        });
    },
    checkUsername() {
      var username = this.username;
      if (username == '') {
        return;
      }
      var that = this;
      this.infoMsg = '';
      Vue.ClientHttp(this).POST({ username }, '/api/checkUsernameExit')
        .then((res) => {
          if (res.code == 10000) {
            that.infoMsg = res.msg;
          }
        });
    },
    addUser() {
      var that = this;
      var username = this.username;
      var password = this.password;
      if (username == '' || password == '') {
        // alert('请输入用户名和密码');
        // that.alertMsg = '请输入用户名和密码';
        // that.showAlert = true;
        // this.showToast = true;
        bus.$emit('toast', '请输入用户名和密码');
        return;
      }
      Vue.ClientHttp(this).POST({ username, password }, '/api/addUser')
        .then((res) => {
          // alert(res.msg);
          that.alertMsg = res.msg;
          that.showAlert = true;
          if (res.code == 10000) {
            that.getUserList();
          }
        });
    },
    deleteUser(username) {
      var that = this;
      Vue.ClientHttp(this).POST({ username }, '/api/auth/deleteUser')
        .then((res) => {
          // alert(res.msg);
          that.alertMsg = res.msg;
          that.showAlert = true;
          if (res.code == 10000) {
            that.getUserList();
          }
        });
    },
    setInfo(user) {
      this.username = user.username;
      this.password = user.password;
    },
    updatePwd() {
      var that = this;
      var username = this.username;
      var password = this.password;
      if (password == '') {
        // alert('密码不得为空');
        that.alertMsg = '密码不得为空';
        that.showAlert = true;
        return;
      }
      Vue.ClientHttp(this).POST({ username, password }, '/api/auth/updatePwd')
        .then((res) => {
          // alert(res.msg);
          if (res.code == 10000) {
            that.getUserList();
          }
        });
    }
  },
  mounted() {
    this.getUserList();
  }
};
</script>
<style scoped>
.icon-notice {
  font-size: 40px;
  /*px*/
}
</style>