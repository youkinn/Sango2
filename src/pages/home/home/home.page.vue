<template>
  <div class="container" v-if="inited">
    <app-header-component s-title="首页"></app-header-component>
    <div class="hotGame section">
      <header-component s-title="热门游戏" s-link-text="进入游戏中心" :o-router="{name: 'personal'}"></header-component>
      <div class="swiper-contanier">
        <slider-component :arr-swiper-list="this.swiper.list"></slider-component>
      </div>
      <div class="hr"></div>
      <hot-game-component></hot-game-component>
    </div>
    <div class="hotNews section">
      <div class="hotNewsContainer">
        <hot-news-component :o-news="news"></hot-news-component>
      </div>
    </div>
    <back-to-top-component></back-to-top-component>
    <app-footer-component></app-footer-component>
  </div>
  <fading-circle-compontent v-else></fading-circle-compontent>
</template>
<script>
'use strict';
import HeaderComponent from '../../common/header.component';
import SliderComponent from '../../common/slider.component';
import HotGameComponent from './components/hot-game.component';
import HotNewsComponent from './components/hot-news.component';

import Swiper from 'swiper';
import LoadData from '../../common/loaddata/LoadData';

export default {
  components: {
    HeaderComponent,
    SliderComponent,
    HotGameComponent,
    HotNewsComponent
  },
  data() {
    return {
      title: '首页',
      swiper: {},
      news: {},
      activated: false,
      inited: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var promises = [this.getSwiperList, this.getNewsList].map((fn) => {
        return fn();
      });
      Promise.all(promises).then(() => {
        this.inited = true;
      });
    },
    getSwiperList() {
      this.swiper = new LoadData(Vue.ClientUrl.getSwiperList, {
        type: 4,
        limit: 8,
        nologin: 1
      });
      return this.swiper.getList(this, () => {
        setTimeout(() => {
          new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination',
            autoplay: 3500
          });
        }, 100);
      });
    },
    getNewsList() {
      this.news = new LoadData(Vue.ClientUrl.getNewsList, {
        limit: 200,
        nologin: 1
      });
      return this.news.getList();
    }
  }
};
</script>
<style lang="scss" scoped>
.action-button{
  background-color: yellow;
}
.container {
  .section {
    background-color: #fff;
    &:not(:first-child) {
      border-top: solid #e5e5e5 1px;
      /*no*/
    }
    &:not(:last-child) {
      margin-bottom: 30px;
      border-bottom: solid #e5e5e5 1px;
      /*no*/
    }
  }
  .swiper-contanier {
    height: 280px;
    overflow: hidden;
    padding-left: 30px;
    padding-right: 30px;
  }
  .hotGame.section {
    overflow: hidden;
    border-top: none;
    .hr {
      width: 610px;
      height: 1px;
      /*px*/
      line-height: 1px;
      /*px*/
      border-top: solid #e5e5e5 1px;
      /*no*/
      margin-left: 30px;
      color: #e5e5e5;
    }
  }
  .section.hotNews {
    margin-bottom: 99px;
    border-bottom: none;
  }
}
</style>