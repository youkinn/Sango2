<template>
  <div class="item" :class="{'item--last': isLast, 'item--alone': borderType==1}" v-link="link">
    <div class="item__o" :class="{'item__o--alone': borderType==1}">
      <div class="item__index" v-if="index">
        <span>{{index}}</span>
      </div>
      <div class="item__content" v-link="link">
        <img class="item__img" :src="image" alt="" v-if="image">
        <div class="item__intro" :class="{'item__intro--index': index}">
          <div class="item__title overflow-ellipsis">{{title}} <span class="item__subtitle" v-if="subTitle">{{subTitle}}</span></div>
          <slot name="four">
            <div class="item__type-desc overflow-ellipsis" v-if="typeDesc">{{typeDesc}}</div>
            <div class="item__detail overflow-ellipsis" v-if="detail" v-html="detail"></div>
          </slot>
        </div>
      </div>
      <div class="item__extra">
        <slot name="one"></slot>
        <slot name="two"></slot>
      </div>
    </div>
    <div class="more" v-if="more">
      <slot name="three"></slot>
    </div>
  </div>
</template>
<script>
'use strict';
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },

    // 图片地址
    image: {
      type: String,
      default: ''
    },

    // 标题
    title: {
      type: String,
      default: ''
    },

    // 二级标题
    subTitle: {
      type: String,
      default: ''
    },

    // 类型
    typeDesc: {
      type: String,
      default: ''
    },

    // 详细介绍
    detail: {
      type: String,
      default: ''
    },

    // 链接地址: 点击列表跳转
    link: {
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
    isLast: {
      type: Boolean,
      default: false
    },

    // 边框类型
    // 0：两边顶住、1：左边空白右边顶住
    borderType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handle() {
      if (this.hasAction) {
        this.$emit('inline-btn-clicked');
        return;
      }
      if (/^http(s*)/.test(this.link)) {
        location.href = this.link;
        return;
      }
      if (this.link) {
        this.$router.go(this.link, !!this.replace);
        return;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  border-bottom: solid #eee 1px;
  &__o {
    background-color: #fff;
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    &--alone {
      padding-left: 0;
    }
  }
  &:active {
    background-color: #f2f2f2;
    .btn {
      background-color: #f2f2f2;
    }
  }
  &--alone {
    margin-left: 30px;
    padding-left: 0;
  }
  &--last {
    border-bottom: none;
  }
  &__index {
    padding-right: .1rem;
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
  &__content {
    display: flex;
    flex: 1;
    width: 38px;
  }
  &__extra {
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
    border-radius: 10px;
    margin-right: 20px;
  }
  &__intro {
    flex: 1;
    width: 270px;
    padding: 32px 0;
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
  &__type-desc,
  &__detail {
    white-space: nowrap;
    margin-top: 14px;
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
}

.more {
  margin-top: 10px;
  padding-bottom: 22px;
}
</style>
