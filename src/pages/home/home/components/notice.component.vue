<!--首页：滚动消息-->
<template>
  <div class="container">
    <ul class="noticeList">
      <li class="item overflow-ellipsis" v-for="item in notices" :href="item.linkUrl">
        <i class="icon icon-notice"></i> {{ item.content }}
      </li>
    </ul>
  </div>
</template>
<script>
'use strict';
export default {
  data() {
    return {
      notices: [{
          content: '大迷糊**刚刚领取了倩女幽魂新春礼包/参与.......',
          linkUrl: ''
        },
        {
          content: '大迷糊**刚刚领取了倩女幽魂新春礼包/参与2.......',
          linkUrl: ''
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-left: 30px;
  padding-right: 30px;
  .noticeList {
    height: 84px;
    overflow-y: hidden;
    font-size: 26px;
    /*px*/
    li {
      height: 84px;
      line-height: 84px;
      i {
        margin-right: 11px;
      }
    }
  }
}
</style>