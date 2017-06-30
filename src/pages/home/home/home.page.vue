<template>
  <div class="container">
    <app-header-component title="首页"></app-header-component>
    <div class="hotGame section">
      <header-component title="热门游戏" link-text="进入游戏中心" :link-url="{name: 'personal'}"></header-component>
      <div class="swiper-contanier">
        <slider-component :swiper-list="this.swiper.list"></slider-component>
      </div>
      <div class="hr"></div>
      <hot-game-component></hot-game-component>
    </div>
    <div class="hotNews section">
      <div class="hotNewsContainer">
        <hot-news-component :activated="activated"></hot-news-component>
      </div>
    </div>
    <app-footer-component :index="0"></app-footer-component>
  </div>
</template>
<script>
'use strict';
import AppHeaderComponent from '../../../components/layout/header/header.component';
import AppFooterComponent from '../../../components/layout/footer/footer.component';
import HeaderComponent from '../../common/header.component';
import SliderComponent from '../../common/slider.component';
import HotGameComponent from './components/hot-game.component';
import HotNewsComponent from './components/hot-news.component';

import Swiper from 'swiper';
import LoadData from '../../../components/loaddata/LoadData';

import { scroll } from '../../../vuex/getters';
import { updateScrollPos } from '../../../vuex/actions';

export default {
  vuex: {
    getters: {
      scroll: scroll
    },
    actions: {
      updateScrollPos
    }
  },
  components: {
    AppHeaderComponent,
    AppFooterComponent,
    HeaderComponent,
    SliderComponent,
    HotGameComponent,
    HotNewsComponent
  },
  data() {
    return {
      title: '首页',
      swiper: {},
      activated: false
    };
  },
  beforeRouteLeave(to, from, next) {
    this.updateScrollPos({ page: 'home', y: document.body.scrollTop });
    next();
  },
  created() {
    this.getSwiperList();
  },
  activated() {
    if (this.scroll && this.scroll.page == 'home' && this.scroll.y) {
      setTimeout(() => {
        window.scrollTo(0, this.scroll.y);
      }, 200);
    }
  },
  methods: {
    getSwiperList() {
      this.swiper = new LoadData(Vue.ClientUrl.getSwiperList, {
        type: 4,
        limit: 8,
        nologin: 1
      });
      this.swiper.getList(this, () => {
        setTimeout(() => {
          new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination',
            autoplay: 3500
          });
        }, 100);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
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
    overflow: hidden; // height: 280px;
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