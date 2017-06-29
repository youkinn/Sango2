<template>
  <div class="container">
    <app-header-component title="资讯"></app-header-component>
    <div class="news-body section">
      <news-body-component :news="news.body"></news-body-component>
    </div>
    <div class="comment-list section">
      <header-component title="用户评论" link-text="评论"></header-component>
      <news-comment-list-component :comment-list="news.comment.list" :total="news.comment.total"></news-comment-list-component>
    </div>
    <div class="related-news section">
      <header-component title="相关资讯"></header-component>
      <related-news-component :news-list="news.related.list"></related-news-component>
    </div>
    <comment-input-component></comment-input-component>
    <comment-dialog-component></comment-dialog-component>
  </div>
</template>
<script>
'use strict';
import AppHeaderComponent from '../../../../components/layout/header/header.component';
import HeaderComponent from '../../../common/header.component';
import NewsBodyComponent from './components/news-body.component';
import NewsCommentListComponent from './components/news-comment-list.component';
import RelatedNewsComponent from './components/related-news.component';
import commentInputComponent from '../common/comment-input.component';
import commentDialogComponent from '../common/comment-dialog.component';
import LoadData from '../../../../components/loaddata/LoadData';

export default {
  components: {
    AppHeaderComponent,
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
      }
    };
  },
  mounted() {
    bus.$on('click-action', () => {
      bus.$emit('showCommentDialog');
    });
  },
  activated() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData(){
      this.getDetail();
      this.getRelateNews();
      this.getNewsCommentList();
    },
    getDetail() {
      Vue.ClientHttp(this).GET({ newsID: this.$route.params.id, nologin: 1 }, Vue.ClientUrl.getNewsDetail)
        .then((res) => {
          if (res.code === 10000) {
            this.news.body = res.result;
          }
        });
    },
    getRelateNews() {
      this.news.related = new LoadData(Vue.ClientUrl.getNewsRelated, {
        newsID: this.$route.params.id,
        limit: 2,
        nologin: 1
      });
      this.news.related.getList();
    },
    getNewsCommentList() {
      this.news.comment = new LoadData(Vue.ClientUrl.getNewsCommentList, {
        newsID: this.$route.params.id,
        fromType: 1,
        showType: 2,
        limit: 3,
        nologin: 1
      });
      this.news.comment.getList(this, result => {
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