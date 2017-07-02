<template>
  <section>
    <app-header-component s-title="个人中心"></app-header-component>
  
    <section class="user-info">
      <div class="user-info__avatar">
        <img src="" alt="" width="82" height="82">
      </div>
      <div class="user-info__extra">
        <div class="user-info__nameAndId">
          <div class="user-info__name">哼哩个哼哼</div>
          <div class="user-info__id">淘游ID:34325435</div>
        </div>
        <div class="user-info__edit">
          <i class="icon icon-edit"></i>
        </div>
      </div>
    </section>
  
    <section class="list">
      <list-item s-icon="icon-phone" s-icon-color="#00aaee" s-content="修改手机" s-extra="1886***9248"></list-item>
      <list-item s-icon="icon-task" s-icon-color="#ff9500" s-content="任务">
        <span slot="extra">还有
          <span class="list--item__count">1500</span>淘豆未领取</span>
      </list-item>
      <list-item s-icon="icon-taodou" s-icon-color="#00c25b" s-content="淘豆" s-extra="10,000,000"></list-item>
      <list-item s-icon="icon-taobi" s-icon-color="#00aaee" s-content="淘币" s-extra="1,000"></list-item>
      <list-item s-icon="icon-exchange" s-icon-color="#ff4d73" s-content="礼包兑换"></list-item>
      <list-item s-icon="icon-coupon" s-icon-color="#ff9500" s-content="卡券包" :b-last="true">
        <span slot="extra">您有
          <span class="list--item__count">2</span>个礼包即将到期</span>
      </list-item>
    </section>
  
    <section class="list">
      <list-item s-icon="icon-message" s-icon-color="#00c25b" s-content="消息"></list-item>
      <list-item s-icon="icon-service" s-icon-color="#00aaee" s-content="客服" :b-last="true"></list-item>
    </section>
  
    <section>
      <div class="logout" @click.prevent="logout">退出登录</div>
    </section>
  
    <app-footer-component></app-footer-component>
  </section>
</template>
<script>
'use strict';
import ListItem from './compontents/list-item.compontent';

export default {
  components: {
    ListItem
  },
  methods: {
    logout() {
      Vue.ClientHttp(this).POST({}, '/api/logout')
        .then((res) => {
          if (res.code === 10000) {
            bus.$cookie.delete('activeTime');
            this.$router.push({ name: 'home' });
            console.log('退出成功');
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  margin-bottom: 30px;
}

.user-info {
  display: flex;
  padding: 30px;
  background-color: #fff;
  &__avatar {
    width: 110px;

    img {
      width: 82px;
      height: 82px;
    }
  }
  &__extra {
    display: flex;
    width: 470px;
    height: 82px;
  }
  &__nameAndId {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 438px;
    height: 82px;
  }
  &__name {
    height: 44px;
    font-size: 32px;
    /*px*/
    color: #333;
  }
  &__id {
    height: 38px;
    font-size: 26px;
    /*px*/
    color: #a5a5a5;
  }
  &__edit {
    display: flex;
    justify-content: flex-end;
    width: 32px;
    .icon {
      margin-top: 6px;
      font-size: 30px;
      /*px*/
      color: #999;
    }
  }
}

.list {
  background-color: #fff;
  .list--item {
    &__count {
      color: #ff4a4a;
    }
  }
}

.logout {
  height: 88px;
  line-height: 88px;
  margin-bottom: 129px;
  font-size: 32px;
  /*px*/
  color: #ff4a4a;
  text-align: center;
  background-color: #fff;
}
</style>