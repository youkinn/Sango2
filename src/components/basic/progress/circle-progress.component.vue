
<template>
  <div class="progress" :class="{'progress--disabled': disabled}" slot="one">
    <svg width="100%" height="100%" class="progress__circle" viewBox="0 0 44 44">
      <circle class="progress__bg" fill="none" r="18" cx="22" cy="22" stroke-width="4"></circle>
      <circle :fill="(!disabled) ? '#f2fcfb': '#fafafa'" r="18" cx="22" cy="22"></circle>
      <circle class="progress__bar" fill="none" r="18" cx="22" cy="22" transform="rotate(-90, 22, 22)" stroke-width="4" stroke-dasharray="113.097334" stroke-dashoffset="{{113.097334 * progress}}">
      </circle>
    </svg>
    <span class="progress__text">{{text}}</span>
  </div>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    },
    progress: {
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
  },
  ready() {}
};
</script>
<style lang="scss" scoped>
.progress {
  position: relative;
  width: .39rem;
  height: .39rem;

  .progress__bar {
    stroke: #00c1b3;
    transition: stroke-dashoffset .5s ease-out;
  }

  .progress__text {
    fill: #00c1b3;
    position: absolute;
    width: .24rem;
    height: .11rem;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 1em;
    font-size: .11rem;
    color: #00c1b3;
  }
  .progress__bg {
    stroke: #7fe0d9;
  }
}

.progress--disabled {
  .progress__bg {
    stroke: #e5e5e5;
  }
  .progress__bar {
    stroke: #cccccc;
    transition: stroke-dashoffset .5s ease-out;
  }
  .progress__text {
    color: #a5a5a5;
  }
}
</style>