<template>
  <div class="item-contaner">
    <div class="item" :class="{'item--last': isLast, 'item--alone': borderType==1}">
      <div class="item__o" :class="{'item__o--alone': borderType==1}">
        <div class="item__left" v-if="nIndex">
          <span>{{nIndex}}</span>
        </div>
        <div class="item__main">
          <div class="item__img">
            <img :src="sImage" alt="" v-if="sImage">
          </div>
          <div class="item__intro" :class="{'item__intro--index': nIndex}">
            <div class="item__title overflow-ellipsis">{{sTitle}} <span class="item__subtitle" v-if="sSubTitle">{{sSubTitle}}</span></div>
            <div class="item__content overflow-ellipsis" v-if="sContent">{{sContent}}</div>
            <div class="item__extra overflow-ellipsis" v-if="sExtra" v-html="sExtra"></div>
          </div>
        </div>
        <div class="item__right">
          <slot name="one"></slot>
        </div>
      </div>
      <div class="more" v-if="more">
        <slot name="more"></slot>
      </div>
    </div>
  </div>
</template>
<script>
'use strict';
export default {
  props: {
    nIndex: {
      type: Number,
      default: 0
    },

    // 图片地址
    sImage: {
      type: String,
      default: ''
    },

    // 标题
    sTitle: {
      type: String,
      default: ''
    },

    // 二级标题
    sSubTitle: {
      type: String,
      default: ''
    },

    // 类型
    sContent: {
      type: String,
      default: ''
    },

    // 详细介绍
    sExtra: {
      type: String,
      default: ''
    },

    // 链接地址: 点击列表跳转
    oRouter: {
      type: Object,
      default: () => {
        return {};
      }
    },

    // more
    more: {
      type: Boolean,
      default: false
    },

    // 是否是最后一条
    bLast: {
      type: Boolean,
      default: false
    },

    // 边框类型
    // 0：两边顶住、1：左边空白右边顶住
    nBorderType: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="scss" scoped>
.item-contaner {
  background-color: #fff;
    &:active{
      background-color: #f2f2f2;
    }
  }
.item {
  border-bottom: solid #eee 1px;
  
  &__o {
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    &--alone {
      padding-left: 0;
    }
  }
  &--alone {
    margin-left: 30px;
    padding-left: 0;
  }
  &--last {
    border-bottom: none;
  }
  &__left {
    padding-right: 20px;
    span {
      display: inline-block;
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border-radius: 50%;
      background: #f0f0f0;
      font-size: 22px;/*px*/
      color: #898989;
      margin-top: 36px;
    }
  }
  &__main {
    display: flex;
    flex: 1;
    width: 38px;
  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    min-width: 12px;
    max-width: 200px;
  }
  &__img {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    margin-top: 22px;
    margin-right: 20px;
    border-radius: 10px;
  }
  &__intro {
    flex: 1;
    width: 270px;
    padding: 32px 0 24px 0;
    &--index {
      width: 226px;
    }
  }
  &__title {
    height: 32px;
    line-height: 32px;
    font-size: 32px;/*px*/
    color: #333;
  }
  &__subtitle {
    display: inline-block;
    width: 47%;
    font-size: 26px;/*px*/
    margin-left: 20px;
    color: #333;
  }
  &__content,
  &__extra {
    white-space: nowrap;
    height: 28px;
    line-height: 28px;
    font-size: 28px;/*px*/
    color: #a5a5a5;
    &--multiline {
      white-space: initial;
      height: auto;
      max-height: 56px;
      margin-bottom: 20px;
    }
  }
  &__content{
    margin-top: 14px;
  }
  &__extra{
    margin-top: 10px;
  }
}

.more {
  margin-top: 10px;
  padding-bottom: 22px;
}
</style>
