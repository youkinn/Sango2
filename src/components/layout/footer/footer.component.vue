<!--app底部-->
<template>
  <div class="container">
    <router-link tag="div" class="menu-item" :class="{'selected': index==0}" :to="{name: 'home'}" exact>
      <i class="icon icon-home"></i>
      <div>首页</div>
    </router-link>
    <router-link tag="div" class="menu-item" :class="{'selected': index==1}" :to="{name: 'gameCenter'}">
      <i class="icon icon-game"></i>
      <div>游戏</div>
    </router-link>
    <router-link tag="div" class="menu-item" :class="{'selected': index==3}" :to="{name: 'personal'}">
      <i class="icon icon-mine"></i>
      <div>我的</div>
    </router-link>
  </div>
</template>
<script>
'use strict';
import { dialog } from '../../../vuex/getters';
import { updateDialogState } from '../../../vuex/actions';
export default {
  vuex: {
    getters: {
      dialog: dialog
    },
    actions: {
      updateDialogState
    }
  },
  props: {
    index: {
      type: Number,
      default: undefined
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: border-box;
  width: 100%;
  max-width: 640px;/*no*/
  border-top: solid #e5e5e5 1px;
  /*no*/
  background-color: #fff;
  .menu-item {
    &.router-link-active {
      color: #00c1b3;
    }
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #888;
    box-sizing: border-box;
    height: 98px;
    padding-top: 17px;
    padding-bottom: 12px;
    // box-sizing: border-box;
    i {
      font-size: 40px;
      /*px*/
      // margin-bottom: 6px;
    }
    div {
      font-size: 20px;
      /*px*/
    }
  }
}
</style>