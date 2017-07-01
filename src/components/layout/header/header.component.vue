<!--app头部-->
<template>
  <div class="container">
    <div class="left" @click.stop="goback">
      <i class="icon icon-arrow-left"></i>
      <span class="action-text">{{ sActiontext }}</span>
    </div>
    <div class="center">
      {{ sTitle }}
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
    sActiontext: {
      type: String,
      default: '返回'
    },
    sTitle: {
      type: String,
      default: ''
    },
    oRouter: {
      type: Object,
      default: null,
    },
    bHasAction: {
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
      if (this.oRouter) {
        this.$router.go(this.oRouter);
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