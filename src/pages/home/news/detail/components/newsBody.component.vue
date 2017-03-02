<template>
  <div class="container">
    <div class="header">
      <div class="title">{{ news.title }}</div>
      <div class="info">
        <div class="publish-time">{{ news.publishTime}}</div>
        <div class="source">{{ news.source }}</div>
      </div>
    </div>
    <div class="content">
      {{ news.intro }}
    </div>
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
      Vue.ClientHttp(this).POST({ newsId }, '/api/getNewsDetail')
        .then((res) => {
          if (res.code === 10000) {
            that.news = res.result.data;
            bus.$emit('comment-change', res.result.data.commentList);
          }
        });
    }
  },
  mounted() {
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
  font-size: 28px;
  /*px*/
  color: #666;
}
</style>