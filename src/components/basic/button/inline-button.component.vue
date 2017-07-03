<template>
  <a class="btn" :class="btnStyle" :disabled="disabled" @touchstart="touchHandle">
    {{ sText }}</a>
</template>
<script>
'use strict';
export default {
  props: {
    sTheme: {
      type: String,
      default: 'default'
    },
    sText: {
      type: String,
      default: ''
    },
    bDisabled: {
      typw: Boolean,
      default: false
    }
  },
  data() {
    return {
      theme: this.sTheme,
      text: this.sText,
      disabled: this.bDisabled
    };
  },
  computed: {
    btnStyle() {
      let styleObj = {};
      styleObj['btn--disabled'] = this.disabled;
      styleObj[`btn--${this.theme}`] = this.theme;
      return styleObj;
    }
  },
  methods: {
    touchHandle() {
      this.$emit('touch');
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 11px 19px;

  font-size: 26px;
  /*px*/
  background-color: #fff;
  text-align: center;
  border-radius: 8px;
  &.btn--disabled {
    border-color: #f0f0f0;
    color: #adadad;
    background-color: #f0f0f0;
  }
  &--default {
    color: #333;
    border: solid #a5a5a5 1px;
    /*no*/

    &:active {
      background-color: #f0f0f0;
    }
  }
  &--green {
    color: #00c1b3;
    border: solid #00c1b3 1px;
    /*no*/

    &:active {
      background-color: #f0f0f0;
    }
  }
}
</style>