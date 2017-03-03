<template>
  <div>
    <app-header-component title="个人中心"></app-header-component>
    <h3>personal index</h3>
    <app-footer-component :index="3"></app-footer-component>
    <input type="button" value="退出" @click.prevent="logout">
  </div>
</template>
<script>
'use strict';
import AppHeaderComponent from '../../components/layout/header/header.component';
import AppFooterComponent from '../../components/layout/footer/footer.component';
export default {
  components: {
    AppHeaderComponent,
    AppFooterComponent
  },
  methods: {
    logout() {
      Vue.ClientHttp(this).POST({}, '/api/logout')
        .then((res) => {
          if (res.code === 10000) {
            bus.$cookie.delete('activeTime');
            this.$router.push({ name: 'home' });
            console.log('退出成功');
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>