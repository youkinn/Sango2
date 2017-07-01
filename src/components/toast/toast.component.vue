<!-- Toast 轻提示组件 -->
<template>
  <div class="toast-container" v-show="isShow">
    <span v-if="!type" class="plain-text">
      {{ message }}
    </span>
    <div v-else class="with-icon">
      <i v-if="type==1" class="icon icon-success"></i>
      <i v-if="type==2" class="icon icon-failed"></i>
      <i v-if="type==3" class="icon icon-offline"></i>
      <i v-if="type==4" class="icon icon-loadding"></i>
      <span class="toast-text">
        {{ message }}
      </span>
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
    nType: {
      type: Number,
      defauly: 0
    },
    sMessage: {
      type: String,
      default: undefined
    },
    nTime: {
      type: Number,
      default: 1500
    }
  },
  data(){
    return {
      isShow: this.bShow,
      type: this.nType,
      message: this.sMessage,
      time: this.nTime
    };
  },
  activated() {
    if (this.isShow) {
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
        this.type = undefined;
      }, this.time);
    }
  }
};
</script>
<style lang="scss" scoped>
.toast-container {
  display: flex;
  align-items: center;
  font-size: 26px;
  /*px*/
  color: #fff;
}

.plain-text {
  position: fixed;
  display: block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 40px;
  line-height: 40px;
  width: 350px;
  padding: 10px 20px;
  background-color: #000;
  opacity: 0.7;
  border-radius: 7px;
  text-align: center;
}

.with-icon {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 180px;
  width: 180px;
  background-color: #1f2337;
  opacity: 0.9;
  border-radius: 20px;
  text-align: center;
  i {
    display: block;
    font-size: 70px;
    margin: 30px 55px 20px 55px;
  }
}

.icon-loadding:before {
  display: inline-block;
  animation: loadingCircle 1s infinite linear;
}

@keyframes loadingCircle {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(1turn)
  }
}
</style>