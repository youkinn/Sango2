<!--首页：热门游戏-->
<template>
    <div class="container">
        <section class="recommend-game">

            <!-- 游戏列表 -->
            <ul class="recommend list">
                <li class="item" v-for="item in games">
                    <div class="imgWrapper">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="content">
                        <div class="title overflow-ellipsis">
                            {{ item.title }} <span class="number">{{ item.number}}期</span>
                        </div>
                        <div class="detail am-flexbox">
                            <div class="detailLeft am-flexbox-item am-flexbox">
                                <div class="starttime">剩余时间:
                                    <!--<app-home-cd :endtime="item.lastTime" :template-type="1" @timer-action="loadPlayGameList"></app-home-cd>-->
                                    {{ item.lastTime }}
                                </div>
                                <div class="reward">奖励金额:<span class="amount"> {{ item.maxPrize | moneyWidthComma }}</span>淘豆</div>
                            </div>
                            <div class="detailRight am-flexbox">
                                <a v-if="item.userInfo" class="link" @click.stop="gotoUrl(item.gameUrl + '&type=' + item.type)">继续</a>
                                <a v-else class="link" @click.stop="gotoUrl(item.gameUrl + '&type=' + item.type)">参赛</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    'use strict';
    export default {
        data() {
            return {
                games: [
                    {
                        title: '全民斗战在神',
                        number: '1234567809',
                        imgUrl: 'http://dummyimage.com/129x129',
                        lastTime: '06:33:01',
                        maxPrize: '900,000'
                    },
                    {
                        title: '全民斗战在神2',
                        number: '1234567809',
                        imgUrl: 'http://dummyimage.com/129x129',
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
    }
    
    .recommend-game {
        padding: 0 0 20px 0;
        .list {
            padding-left: .15rem;
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 20px;
                border-bottom: solid #e5e5e5 1px;
                &:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .imgWrapper {
                    width: 86px;
                    height: 86px;
                    margin-right: 10px;
                    margin-bottom: 32px;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                    }
                }
                .content {
                    margin-left: .55rem;
                }
                .title {
                    font-size: 32px;
                    .number {
                        font-size: 26px;
                    }
                }
                .detail {
                    display: flex;
                    font-size: 28px;
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
                            margin-top: 8px;
                            margin-bottom: 8px;
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
                            line-height: 50px;
                            color: #333;
                            font-size: 26px;
                            text-align: center;
                            border: 1px solid #ccc;
                            border-radius: 8px;
                        }
                    }
                }
            }
        }
    }
</style>