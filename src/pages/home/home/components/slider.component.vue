<!--首页：轮播图-->
<template>
  <!--<div class="container">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="/static/images/home/swipe/1487318324925764.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="/static/images/home/swipe//1487324150137199.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="/static/images/home/swipe//1487316905748202.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>-->
  <div class="container hot-games">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <router-link :to="item.url" v-for="item in swiperList">
          <div class="swiper-slide">
            <img :src="item.imgUrl" alt="">
          </div>
        </router-link>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
'use strict';

import Swiper from 'swiper';
export default {
  props: {
    swiperList: {
      type: Array,
      default: () => {
        return [{
          imgUrl: '/static/images/home/swipe/1487318324925764.jpg'
        }, {
          imgUrl: '/static/images/home/swipe/1487318324925764.jpg'
        }];
      }
    }
  },
  mounted() {
    setTimeout(() => {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 3500
      });
    }, 1000);
  }
};
</script>
<style lang="scss" scoped>
.container {
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
  .mint-swipe {
    height: 290px;
  }
}
</style>