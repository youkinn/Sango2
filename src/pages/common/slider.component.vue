<!--轮播图-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
'use strict';

export default {
  props: {
    swiperList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>