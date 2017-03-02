<!--首页：玩游戏赢淘豆-->
<template>
  <div class="container">
    <ul class="recommend list">
      <li class="item" v-for="item in games">
        <div class="imgWrapper">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="content">
          <div class="title overflow-ellipsis">
            {{ item.title }} <span class="number">{{ item.number}}期</span>
          </div>
          <div class="detail">
            <div class="detailLeft">
              <div class="starttime">剩余时间:{{ item.lastTime }}</div>
              <div class="reward">奖励金额:<span class="amount"> {{ item.maxPrize }}</span>淘豆</div>
            </div>
            <div class="detailRight">
              <a v-if="item.userInfo" class="link">继续</a>
              <a v-else class="link">参加</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
'use strict';
export default {
  data() {
    return {
      games: [{
          title: '全民斗战在神',
          number: '1234567809',
          imgUrl: 'http://dummyimage.com/172x172',
          lastTime: '06:33:01',
          maxPrize: '900,000'
        },
        {
          title: '全民斗战在神2',
          number: '1234567809',
          imgUrl: 'http://dummyimage.com/172x172',
          lastTime: '06:33:01',
          maxPrize: '900,001'
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
  border-top: solid #e5e5e5 1px;
  /*no*/
  .list {
    font-family: SimSun;
    .item {
      display: flex;
      align-items: center;
      padding-top: 19px;
      padding-bottom: 19px;
      &:first-child {
        border-bottom: solid #e5e5e5 1px;
        /*no*/
      }
      .imgWrapper {
        width: 86px;
        height: 86px;
        margin-right: 20px;
        margin-bottom: 30px;
        img {
          border-radius: 6px;
        }
      }
      .content {
        flex: 1;
        width: 474px;
      }
      .title {
        height: 42px;
        margin-bottom: 4px;
        font-size: 32px;
        /*px*/
        color: #333;
        .number {
          font-size: 26px;
          /*px*/
        }
      }
      .detail {
        display: flex;
        align-items: center;
        font-size: 28px;
        /*px*/
        .detailLeft {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #e5e5e5;
          .starttime,
          .reward {
            overflow: hidden;
            color: #a5a5a5;
          }
          .starttime {
            margin-bottom: 6px;
          }
          .reward {
            .amount {
              color: #ff4a4a;
            }
          }
        }
        .detailRight {
          display: flex;
          width: 130px;
          justify-content: flex-end;
          align-items: center;
          .link {
            width: 90px;
            height: 48px;
            line-height: 48px;
            color: #333;
            font-size: 26px;
            /*px*/
            text-align: center;
            border: solid #ccc 1px;
            /*no*/
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>