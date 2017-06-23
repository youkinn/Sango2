<style scoped>
</style>
<template>
  <section>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <login></login>
    <register></register>
    <set-pwd></set-pwd>
    <toast-component></toast-component>
  </section>
</template>
<script>
import '../static/css/common.css';
import store from './vuex/store';
import ToastComponent from './components/toast/toast.component';
import Login from './components/account/login.commponent';
import Register from './components/account/register.commponent';
import SetPwd from './components/account/setPwd.commponent';
export default {
  components: {
    Login,
    Register,
    SetPwd,
    ToastComponent
  },
  store
};
</script>