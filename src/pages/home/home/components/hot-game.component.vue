<!--首页：热门游戏-->
<template>
  <div class="container">
    <ul v-if="games.list && games.list.length > 0" class="list" v-cloak>
      <li class="item" v-for="(item, index) in games.list.slice(0,4)" :key="index">
        <div class="listImg">
          <img :src="item.imgUrl" alt="">
          <!--<img v-if="item.type == 1" class="h5Mark" src="/static/images/tao-you/home/h5.png" alt="">-->
        </div>
        <div class="name overflow-ellipsis">{{ item.gameName }}</div>
      </li>
    </ul>
    <ul v-if="games.list && games.list.length > 4" class="list" v-cloak>
      <li class="item" v-for="(item, index) in games.list.slice(4,8)" :key="index">
        <div class="listImg">
          <img :src="item.imgUrl" alt="">
          <!--<img v-if="item.type == 1" class="h5Mark" src="/static/images/tao-you/home/h5.png" alt="">-->
        </div>
        <div class="name overflow-ellipsis">{{ item.gameName }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
'use strict';
import LoadData from '../../../../components/loaddata/LoadData';
export default {
  data() {
    return {
      games: {}
    };
  },
  created() {
    this.games = new LoadData(Vue.ClientUrl.getGameList, {
      type: 4,
      page:1,
      nologin: 1,
      limit: 8
    });
    this.getGameList();
  },
  methods: {
    getGameList() {
      this.games.getList(this);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  // height: 393px;
  padding-left: 30px;
  padding-right: 30px;
  .list {
    &:last-child {
      padding-bottom: 28px;
    }
    display: flex;
    height: 182px;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      display: flex;
      padding-top: 30px;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .name {
        width: 128px;
        font-size: 24px;
        /*px*/
        text-align: center;
      }
    }
    .listImg {
      position: relative;
      width: 128px;
      height: 128px;
      overflow: hidden;
      border-radius: 10px;
      // margin-bottom: 20px;
      .h5Mark {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 60%;
      }
      img {
        width: 108px;
      }
    }
  }
}
</style>