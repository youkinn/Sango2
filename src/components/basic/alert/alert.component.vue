<!-- Alert 弹框组件 -->
<template>
  <div class="mark" v-show="show">
    <div class="alert-container">
      <div v-if="title" class="alert-header">
        <h3>{{ title }}</h3>
      </div>
      <div v-if="content" class="alert-body">
        <p class="alert-brief">{{ content }}</p>
      </div>
      <div class="alert-footer">
        <a class="alert-botton" @click.stop.prevent="touchL" v-if="!single">{{ leftBottonText }}</a>
        <a class="alert-botton" @click.stop.prevent="touchR">{{ rightBottonText }}</a>
      </div>
    </div>
  </div>
</template>
<script>
'use strict';
export default {
  props: {
    bShow: {
      type: Boolean,
      default: false
    },
    sTitle: {
      type: String,
      default: ''
    },
    sContent: {
      type: String,
      default: ''
    },
    bSingleBtn: {
      type: Boolean,
      default: false
    },
    sLeftBottonText: {
      type: String,
      default: '取消'
    },
    sRightBottonText: {
      type: String,
      default: '确定'
    }
  },
  data(){
    return {
      show: this.bShow,
      title: this.sTitle,
      content: this.sContent,
      leftBottonText: this.sLeftBottonText,
      rightBottonText: this.sRightBottonText
    };
  },
  methods: {
    touchL() {
      setTimeout(() => this.show = false, 100);
      bus.$emit('alert-left-btn-touched');
    },
    touchR() {
      setTimeout(() => this.show = false, 100);
      bus.$emit('alert-right-btn-touched');
    }
  }
};
</script>
<style lang="scss" scoped>
.mark {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 640px;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
}

.alert-container {
  width: 540px;
  background-color: #fff;
  border-radius: 14px;
  padding-top: 50px;
  margin-left: 43px;
  margin-right: 43px;
  .alert-header {
    h3 {
      height: 32px;
      line-height: 1em;
      padding: 0 54px 30px;
      font-size: 32px;
      /*px*/
      text-align: center;
      color: #000;
      font-weight: 500;
    }
  }
  .alert-body {
    padding: 0 8px;
    line-height: 40px;
    .alert-brief {
      color: #888;
      padding: 0 76px;
      display: block;
      height: 30px;
      line-height: 1em;
      margin-bottom: 30px;
      font-size: 30px;
      /*px*/
      text-align: center;
    }
  }
  .alert-footer {
    display: flex;
    
    border-top: 2px solid rgba(0, 0, 0, .05);
    /*no*/
  }
  .alert-botton {
    flex: 1;
    display: block;
    width: 100%;
    height: 88px;
    line-height: 88px;
    font-size: 28px;
    /*px*/
    background: 0 0;
    border: 0;
    outline: 0;
    border-left: 2px solid rgba(0, 0, 0, .05);
    /*no*/
    -webkit-appearance: none;
    color: #000;
    text-align: center;
    box-sizing: border-box;
    &:last-child {
      color: #108ee9;
    }
    &:active {
      background-color: rgba(54, 57, 64, .05);
    }
    &:disabled {
      color: #c2c2c2;
    }
  }
}
</style>