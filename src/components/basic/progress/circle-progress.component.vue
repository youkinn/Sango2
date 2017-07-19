<template>
  <div class="tm-progress" slot="one">
    <svg width="100%" height="100%" class="tm-progress__circle" viewBox="0 0 44 44">
      <circle class="tm-progress__bg" :class="{'tm-progress__bg--disabled': bDisabled}" fill="none" r="18" cx="22" cy="22" stroke-width="4"></circle>
      <circle :fill="(!bDisabled) ? '#f2fcfb': '#fafafa'" r="18" cx="22" cy="22"></circle>
      <circle class="tm-progress__bar" :class="{'tm-progress__bar--disabled': bDisabled}" fill="none" r="18" cx="22" cy="22" transform="rotate(-90, 22, 22)" stroke-width="4" stroke-dasharray="113.097334" :stroke-dashoffset="113.097334 * nProgress">
      </circle>
    </svg>
    <span class="tm-progress__text" :class="{'tm-progress__text--disabled': bDisabled}">{{sText}}</span>
  </div>
</template>
<script>
/**
 * @module components/progress
 * @desc 环形进度条
 * @param {boolean} [bDisabled=true] - 状态，true的情况下灰色，不可点
 * @param {string} [sText=''] - 显示文本
 * @param {number} [nProgress=''] - 当前进度
 *
 * @example
 * Toast('提示信息');
 * 
 */
export default {
  props: {
    bDisabled: {
      type: Boolean,
      default: true
    },
    sText: {
      type: String,
      default: ''
    },
    nProgress: {
      type: Number,
      default: '',
      require: true
    }
  },
  data() {
    return {
      ctx: {}
    };
  },
  methods: {
    setProgress(percent) {
      this.progress = percent;
    }
  }
};
</script>
<style lang="scss" scoped>
.tm-progress {
  position: relative;
  width: 78px;
  height: 78px;

  &__bar {
    stroke: #00c1b3;
    transition: stroke-dashoffset .5s ease-out;

    &--disabled {
      stroke: #cccccc;
    }
  }

  &__text {
    fill: #00c1b3;
    position: absolute;
    width: 48px;
    height: 22px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 1em;
    font-size: 22px;
    /*px*/
    color: #00c1b3;

    &--disabled {
      color: #a5a5a5;
    }
  }
  &__bg {
    stroke: #7fe0d9;

    &--disabled {
      stroke: #e5e5e5;
    }
  }
}
</style>