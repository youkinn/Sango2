<!--首页：热门资讯-->
<template>
  <div class="container">
    <header-component title="热门资讯"></header-component>
    <div class="new-list">
      <ul class="list" v-infinite-scroll="getNewsList" infinite-scroll-disabled="loading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
        <router-link tag="li" :to="{name: 'NewsDetail', params: {id: item.id}}" v-for="(item, index) in news.list" :key="index">
          <news-item-component :item="item" :is-last="index==news.list.length-1"></news-item-component>
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
import LoadData from '../../../../components/loaddata/LoadData';

Vue.use(InfiniteScroll);
Vue.use(Lazyload);
Vue.component('spinner', Spinner);

export default {
  components: {
    HeaderComponent,
    NewsItemComponent
  },
  data() {
    return {
      news: {}
    };
  },
  computed: {
    loading() {
      console.log(this.news.loading || this.news.allLoaded);
      return this.news.loading && !this.news.allLoaded;
    }
  },
  created() {
    this.news = new LoadData(Vue.ClientUrl.getNewsList, {
      limit: 4
    });
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.news.getList(this);
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  background-color: #fff;
  padding-left: 30px;
  border-top: solid #e5e5e5 1px;/*no*/
}
</style>