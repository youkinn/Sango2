<template>
  <div class="container">
    <div class="header">
      <div class="title">{{ news.title }}</div>
      <div class="info">
        <div class="publish-time">{{ news.publishTime | formatDate('YYYY-MM-DD hh:mm:ss')}}</div>
        <div class="source">{{ news.source }}</div>
      </div>
    </div>
    <div class="content" v-html="news.content"></div>
  </div>
</template>
<script>
'use strict';
export default {
  data() {
    return {
      news: {}
    };
  },
  methods: {
    getDetail() {
      var that = this;
      var newsId = this.$route.params.id;
      Vue.ClientHttp(this).POST({ newsId }, Vue.ClientUrl.getNewsDetail)
        .then((res) => {
          debugger;
          if (res.code === 10000) {
            that.news = res.result;
            // bus.$emit('comment-change', res.result.data.commentList);
          }
        });
    }
  },
  activated() {
    this.getDetail();
  }
};
</script>
<style lang="scss" scoped>
.header,
.content {
  padding-left: 30px;
  padding-right: 30px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  /*height: 156px;*/
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 30px;
  .title {
    line-height: 50px;
    margin-bottom: 15px;
    font-size: 40px;
    /*px*/
    color: #000;
    font-weight: 600;
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 24px;
    /*px*/
    color: #a5a5a5;
    .publish-time {
      margin-right: 30px;
    }
  }
}

.content {
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: solid #e5e5e5 1px;
  /*no*/
  border-bottom: solid #e5e5e5 1px;
  /*no*/
  line-height: 44px;
  font-size: 24px;
  /*px*/
  color: #666;
}
</style>