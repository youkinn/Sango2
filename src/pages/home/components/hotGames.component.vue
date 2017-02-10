<!--首页：热门游戏-->
<template>
    <div class="container">
        <ul v-if="games.length > 0" class="list" v-clock>
            <li class="item" v-for="item in games.slice(0,4)" v-link="'/tao-you/game-intro/' + item.gameID">
                <div class="listImg">
                    <img :src="item.imgUrl" alt="">
                    <!--<img v-if="item.type == 1" class="h5Mark" src="/static/images/tao-you/home/h5.png" alt="">-->
                </div>
                <div class="name overflow-ellipsis">{{ item.name }}</div>
            </li>
        </ul>
        <ul v-if="games.length > 4" class="list" v-clock>
            <li class="item" v-for="item in games.slice(4,8)" v-link="'/tao-you/game-intro/' + item.gameID">
                <div class="listImg">
                    <img :src="item.imgUrl" alt="">
                    <!--<img v-if="item.type == 1" class="h5Mark" src="/static/images/tao-you/home/h5.png" alt="">-->
                </div>
                <div class="name overflow-ellipsis">{{ item.name }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    'use strict';
    export default {
        data() {
            return {
                games: [
                    {
                        id: '1150',
                        name: '传奇世界H5',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '幻城',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '大侠归来',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '口袋妖怪联盟',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '啪啪三国',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '2'
                    },
                    {
                        id: '1150',
                        name: '不思议迷宫',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '2'
                    },
                    {
                        id: '1150',
                        name: '愚公移山3',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '2'
                    },
                    {
                        id: '1150',
                        name: '全民穿越之宫',
                        imgUrl: 'http://dummyimage.com/216x216',
                        type: '2'
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
                    width: 108px;
                    font-size: 24px;
                    /*px*/
                    text-align: center;
                }
            }
            .listImg {
                position: relative;
                width: 108px;
                height: 108px;
                overflow: hidden;
                border-radius: 10px;
                margin-bottom: 20px;
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