<template>
  <div class="container" @click.stop.prevent="showCommentDialog">
    <div class="input-wrapper">
      <div class="comment-input">
        <input type="text" placeholder="我也来说几句..." readonly>
      </div>
      <input class="publish" type="button" value="发表">
    </div>
  </div>
</template>
<script>
'use strict';

export default {
  methods: {
    showCommentDialog() {
      bus.$emit('showCommentDialog');
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  border-top: solid #e5e5e5 1px;
  /*no*/
  background-color: #fff;
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding-left: 30px;
    padding-right: 30px;
  }
  input {
    box-sizing: border-box;
    background-color: #fff;
  }
  .comment-input {
    flex: 1;
    margin-right: 30px;
    input {
      width: 100%;
      border: solid #e5e5e5 1px;
      /*no*/
      font-size: 24px;
      /*px*/
      color: #a5a5a5;
      padding: 12px 20px;
      border-radius: 8px;
    }
  }
  .publish {
    width: 90px;
    height: 48px;
    line-height: 48px;
    border: solid #ccc 1px;
    /*no*/
    font-size: 26px;
    /*px*/
    color: #333;
    border-radius: 8px;
  }
}
</style>