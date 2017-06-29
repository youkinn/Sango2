<template>
  <div class="container">
    <ul class="list">
      <li class="item" v-for="(item, index) in commentList" :key="index">
        <div class="userinfo">
          <div class="left">
            <img :src="item.avatarPath" alt="">
          </div>
          <div class="right">
            <div class="name">{{ item.name }}</div>
            <div class="publish-time">{{ item.publishTime }}</div>
          </div>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
        <div class="hr"></div>
      </li>
    </ul>
    <div class="more" v-if="total == 0">还未有评论，快来评论抢占主楼吧</div>
    <div class="more" v-if="total > 3">查看更多评论({{ total }})</div>
  </div>
</template>
<script>
'use strict';
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    commentList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-left: 30px;
  padding-right: 30px;
  border-top: solid #e5e5e5 1px;
  /*no*/
  border-bottom: solid #e5e5e5 1px;
  /*no*/
  .more {
    height: 89px;
    line-height: 89px;
    font-size: 28px;
    /*px*/
    color: #a5a5a5;
    text-align: center;
  }
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding-top: 30px;
  .userinfo {
    display: flex;
    height: 68px;
    .left {
      width: 68px;
      height: 68px;
      overflow: hidden;
      border-radius: 50%;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 32px;
      .name {
        font-size: 28px;
        /*px*/
        color: #000;
      }
      .publish-time {
        font-size: 24px;
        /*px*/
        color: #a5a5a5;
      }
    }
  }
  .content {
    font-size: 28px;
    /*px*/
    color: #666;
    line-height: 36px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .hr {
    width: 610px;
    height: 1px;
    /*px*/
    line-height: 1px;
    /*px*/
    border-top: solid #e5e5e5 1px;
    /*no*/
    color: #e5e5e5;
  }
}
</style>