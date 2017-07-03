<template>
  <div class="container" v-if="inited">
    <app-header-component s-title="资讯"></app-header-component>
    <div class="news-body section">
      <news-body-component :o-news="news.body"></news-body-component>
    </div>
    <div class="comment-list section">
      <header-component s-title="用户评论" s-link-text="评论"></header-component>
      <news-comment-list-component :comment-list="news.comment.list" :total="news.comment.total"></news-comment-list-component>
    </div>
    <div class="related-news section">
      <header-component s-title="相关资讯"></header-component>
      <related-news-component :arr-news-list="news.related.list"></related-news-component>
    </div>
    <back-to-top-component></back-to-top-component>
    <comment-input-component></comment-input-component>
    <comment-dialog-component></comment-dialog-component>
  </div>
  <fading-circle-compontent v-else></fading-circle-compontent>
</template>
<script>
'use strict';
import HeaderComponent from '../../../common/header.component';
import NewsBodyComponent from './components/news-body.component';
import NewsCommentListComponent from './components/news-comment-list.component';
import RelatedNewsComponent from './components/related-news.component';
import commentInputComponent from '../common/comment-input.component';
import commentDialogComponent from '../common/comment-dialog.component';
import LoadData from '../../../common/loaddata/LoadData';

export default {
  components: {
    HeaderComponent,
    NewsBodyComponent,
    NewsCommentListComponent,
    RelatedNewsComponent,
    commentInputComponent,
    commentDialogComponent
  },
  data() {
    return {
      news: {
        id: this.$route.params.id,
        body: {},
        related: {},
        comment: {}
      },
      unwatch: () => { },
      inited: false
    };
  },
  mounted() {
    bus.$on('click-action', () => {
      bus.$emit('showCommentDialog');
    });
    this.unwatch = this.$watch('$route', this.fetchData);
  },
  activated() {
    this.fetchData();
  },
  deactivated() {
    this.inited = false;
    this.unwatch && this.unwatch();
  },
  methods: {
    fetchData() {
      var promises = [this.getDetail, this.getRelateNews, this.getNewsCommentList].map((fn) => {
        return fn();
      });
      Promise.all(promises).then(() => {
        this.inited = true;
      });
    },
    getDetail() {
      return Vue.ClientHttp(this).GET({
        newsID: this.$route.params.id,
        nologin: 1
      }, Vue.ClientUrl.getNewsDetail)
        .then((res) => {
          if (res.code === 10000) {
            return this.news.body = res.result;
          }
        });
    },
    getRelateNews() {
      this.news.related = new LoadData(Vue.ClientUrl.getNewsRelated, {
        newsID: this.$route.params.id,
        limit: 2,
        nologin: 1
      });
      return this.news.related.getList();
    },
    getNewsCommentList() {
      this.news.comment = new LoadData(Vue.ClientUrl.getNewsCommentList, {
        newsID: this.$route.params.id,
        fromType: 1,
        showType: 2,
        limit: 3,
        nologin: 1
      });
      return this.news.comment.getList(this, result => {
        this.news.comment.total = parseInt(result.count);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  .section {
    background-color: #fff;
    &.news-body,
    &.comment-list {
      margin-bottom: 30px;
    }
    &.comment-list,
    &.related-news {
      border-top: solid #e5e5e5 1px;
      /*no*/
    }
  }
}
</style>