<template>
  <div class="container">
    <app-header-component title="资讯"></app-header-component>
    <div class="news-body section">
      <news-body-component></news-body-component>
    </div>
    <div class="comment-list section">
      <header-component title="用户评论" link-text="评论"></header-component>
      <comment-list-component></comment-list-component>
    </div>
    <div class="related-news section">
      <header-component title="相关资讯"></header-component>
      <related-news-component></related-news-component>
    </div>
    <comment-input-component></comment-input-component>
    <comment-dialog-component></comment-dialog-component>
  </div>
</template>
<script>
'use strict';
import AppHeaderComponent from '../../../../components/layout/header/header.component';
import HeaderComponent from '../../../common/header.component';
import NewsBodyComponent from './components/newsBody.component';
import CommentListComponent from './components/commentList.component';
import RelatedNewsComponent from './components/relatedNews.component';
import commentInputComponent from '../common/commentInput.component';
import commentDialogComponent from '../common/commentDialog.component';

export default {
  components: {
    AppHeaderComponent,
    HeaderComponent,
    NewsBodyComponent,
    CommentListComponent,
    RelatedNewsComponent,
    commentInputComponent,
    commentDialogComponent
  },
  mounted() {
    bus.$on('click-action', () => {
      bus.$emit('showCommentDialog');
    });
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