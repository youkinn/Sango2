<template>
  <div class="container">
    <app-header-component title="首页"></app-header-component>
    <div class="hotGame section">
      <header-component title="热门游戏" link-text="进入游戏中心" :link-url="{name: 'personal'}"></header-component>
      <slider-component></slider-component>
      <!--<notice-component></notice-component>-->
      <div class="hr"></div>
      <hot-games-component></hot-games-component>
    </div>
    <!--<div class="sportsGames section">
      <header-component title="玩游戏赢淘豆" link-text="更多" link-url="/personal"></header-component>
      <div class="sportsGamesContainer">
        <sports-games-component :games="playGames"></sports-games-component>
      </div>
    </div>
    <div class="one section">
      <header-component title="1元夺宝"></header-component>
      <div class="oneContainer">
        <one-component></one-component>
      </div>
    </div>-->
    <div class="hotNews section">
      <header-component title="热门资讯"></header-component>
      <div class="hotNewsContainer">
        <hot-news-component></hot-news-component>
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
import SliderComponent from './components/slider.component';
import NoticeComponent from './components/notice.component';
import HotGamesComponent from './components/hotGames.component';
// import SportsGamesComponent from './components/sportsGames.component';
// import OneComponent from './components/one.component';
import HotNewsComponent from './components/hotNews.component';

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
    NoticeComponent,
    HotGamesComponent,
    // SportsGamesComponent,
    // OneComponent,
    HotNewsComponent
  },
  activated() {
    if (this.scroll && this.scroll.page == 'home' && this.scroll.y) {
      window.scrollTo(0, this.scroll.y);
    }
  },
  beforeRouteLeave(to, from, next) {
    this.updateScrollPos({ page: 'home', y: document.body.scrollTop });
    next();
  },
  data() {
    return {
      title: '首页'
    };
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
    &:last-child {
      margin-bottom: 99px;
    }
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
}
</style>