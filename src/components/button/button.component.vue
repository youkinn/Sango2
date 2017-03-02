<template>
  <a v-if="type==1" class="btn-samll" @touchstart="touchHandle">{{ text }}</a>
</template>
<script>
'use strict';
export default {
  props: {
    type: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
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
.btn-samll {
  width: 90px;
  height: 48px;
  line-height: 48px;
  border: solid #a5a5a5 1px;
  /*no*/
  font-size: 26px;
  /*px*/
  color: #333;
  background-color: #fff;
  text-align: center;
  border-radius: 8px;
}
</style>