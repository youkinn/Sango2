<template>
  <button class="btn" :class="custmoClass" :disabled="disabled" @click.stop.prevent="handle">
    {{ sText }}</button>
</template>
<script>
'use strict';
export default {
  props: {
    sType: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary'].indexOf(value) > -1;
      }
    },
    sText: {
      type: String,
      default: ''
    },
    sSize: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'large'].indexOf(value) > -1;
      }
    },
    bPlain: {
      typw: Boolean,
      default: false
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
    custmoClass() {
      let classes = {};
      classes[`btn--${this.sType}`] = true;
      classes[`btn--${this.sSize}`] = true;
      classes['btn--disabled'] = this.disabled;
      classes['btn--plain'] = this.bPlain;
      return classes;
    }
  },
  methods: {
    handle() {
      if (this.disabled) {
        return;
      }
      this.$emit('click');
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
  border: solid #ccc 1px;
  /*px*/
  &--normal {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 19px;
    font-size: 26px;
    /*px*/
    border-radius: 8px;
  }
  &--large {
    display: block;
    width: 580px;
    height: 86px;
    line-height: 86px;
    font-size: 40px;
    /*px*/
    border-radius: 10px;
  }

  &--default {
    color: #333;
    background-color: #fff;
    &:active {
      background-color: #f5f5f5;
    }
  }
  &--primary {
    color: #fff;
    border-color: #00c1b3;
    background-color: #00c1b3;
    &:active {
      background-color: #00a498;
    }
  }
  &--plain{
    background-color: transparent;
  }
  &.btn--disabled {
    border-color: #f0f0f0;
    color: #adadad;
    background-color: #f0f0f0;
  }
}

.btn--plain.btn--primary:not(:disabled) {
  color: #00c1b3;
  border-color: #00c1b3;
  &:active {
    background-color: #d9f6f4;
  }
}
</style>