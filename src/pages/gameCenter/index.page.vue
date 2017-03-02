<template>
  <div>
    <app-header-component title="游戏中心"></app-header-component>
    <h3>gameCenter index</h3>
    <app-footer-component :index="1"></app-footer-component>
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
  }
};
</script>
<style lang="scss" scoped>
</style>