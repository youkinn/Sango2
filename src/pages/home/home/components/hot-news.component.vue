<!--首页：热门资讯-->
<template>
  <div class="container">
    <header-component s-title="热门资讯"></header-component>
    <div class="new-list">
      <ul class="list" v-infinite-scroll="getNewsList" infinite-scroll-disabled="loading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
        <router-link tag="li" class="list-item" :to="{name: 'NewsDetail', params: {id: item.id}}" v-for="(item, index) in oNews.list" :key="index">
          <news-item-component :o-item="item" :b-last="index==oNews.list.length-1"></news-item-component>
        </router-link>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <spinner type="fading-circle"></spinner>加载中
      </p>
    </div>
  </div>
</template>
<script>
'use strict';
import HeaderComponent from '../../../common/header.component';
import NewsItemComponent from './news-item.component';
import { InfiniteScroll, Spinner, Lazyload } from 'mint-ui';
import LoadingImg from '../../../../assets/loading-spin.svg';

Vue.use(InfiniteScroll);
Vue.use(Lazyload, {
  loading: LoadingImg,
  try: 3
});
Vue.component('spinner', Spinner);

export default {
  props: {
    oNews: {
      type:Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    HeaderComponent,
    NewsItemComponent
  },
  data() {
    return {
      /**
       * 由首页进入到详情页后，滚动详情页面仍然会加载资讯列表
       * 这里主要用来修复这个问题
       * */
      activated: false
    };
  },
  computed: {
    loading() {
      return !this.activated || this.oNews.loading;
    }
  },
  created() {
    this.activated = true;
  },
  activated() {
    this.activated = true;
  },
  deactivated() {
    this.activated = false;
  },
  methods: {
    getNewsList() {
      this.oNews.getList(this);
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  background-color: #fff;
  padding-left: 30px;
  border-top: solid #e5e5e5 1px;
  /*no*/
}
</style>