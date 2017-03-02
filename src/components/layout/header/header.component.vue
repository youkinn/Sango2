<!--app头部-->
<template>
  <div class="container">
    <div class="left" @click.stop="goback">
      <i class="icon icon-arrow-left"></i>
      <span class="action-text">{{ actiontext }}</span>
    </div>
    <div class="center">
      {{ title }}
    </div>
    <div class="right">
      <slot name="one"></slot>
    </div>
  </div>
</template>
<script>
'use strict';
export default {
  props: {
    actiontext: {
      type: String,
      default: '返回'
    },
    title: {
      type: String,
      default: ''
    },
    path: {
      default: null
    },
    hasAction: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goback() {
      if (this.hasAction) {
        bus.$emit('goback');
        return;
      }
      if (this.path) {
        this.$router.go(this.path);
        return;
      }
      history.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: solid #e5e5e5 1px;
  /*no*/
  background-color: #fff;
  .left {
    display: flex;
    align-items: center;
    width: 170px;
    color: #333;
    i {
      font-size: 30px;
    }
    .action-text {
      font-size: 28px;
      /*px*/
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 170px;
    i {
      font-size: 40px;
    }
  }
  .center {
    width: 240px;
    font-size: 40px;
    /*px*/
    color: #333;
    text-align: center;
  }
}
</style>