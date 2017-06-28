<!--首页：轮播图-->
<template>
  <div class="container hot-games">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
            <img :src="item.imgUrl" alt="">
          </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
'use strict';

// import Swiper from 'swiper';
export default {
  props: {
    swiperList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted() {
    // setTimeout(() => {
    //   new Swiper('.swiper-container', {
    //     direction: 'horizontal',
    //     loop: true,
    //     pagination: '.swiper-pagination',
    //     autoplay: 3500
    //   });
    // }, 1000);
  }
};
</script>
<style lang="scss" scoped>
// .container {
//   overflow: hidden;
//   height: 280px;
// }
</style>