<!--首页：玩游戏赢淘豆-->
<template>
    <div class="container">
        <ul class="list">
            <li class="item content" v-for="item in news">
                <template v-if="item.type == 1">
                    <div class="content type1">
                        <div class="title overflow-ellipsis">{{ item.title }}</div>
                        <div class="contentPicture">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="info">
                            <span class="source">{{ item.source }}</span>
                            <span class="publishTime">{{ item.publishTime }}</span>
                        </div>
                    </div>
                </template>
                <template v-if="item.type == 2">
                    <div class="content type2">
                        <div class="leftArea contentPicture">
                            <img :src="item.imgUrl" alt="">
                        </div>
                        <div class="rightArea">
                            <div class="title overflow-ellipsis-multiline">{{ item.title }}</div>
                            <div class="info">
                                <span class="source">{{ item.source }}</span>
                                <span class="publishTime">{{ item.publishTime }}</span>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="item.type == 3">
                    <div class="content type3">
                        <div class="title overflow-ellipsis">{{ item.title }}</div>
                        <div class="intro overflow-ellipsis-multiline">
                            {{ item.intro }}
                        </div>
                        <div class="info">
                            <span class="source">{{ item.source }}</span>
                            <span class="publishTime">{{ item.publishTime }}</span>
                        </div>
                    </div>
                </template>
                <template v-if="item.type == 4">
                    <div class="content type4">
                        <div class="title overflow-ellipsis">{{ item.title }}</div>
                        <div class="contentPicture">
                            <div v-for="subItem in item.imgUrl" track-by="$index" class="imgWrapper">
                                <img :src="subItem" alt="">
                            </div>
                        </div>
                        <div class="info">
                            <span class="source">{{ item.source }}</span>
                            <span class="publishTime">{{ item.publishTime }}</span>
                        </div>
                    </div>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
    'use strict';
    export default {
        data() {
            return {
                news: [
                    {
                        title: '质量上乘画风感人《武士崛起》交首付款',
                        intro: '',
                        link: '/news/38620',
                        imgUrl: ['http://dummyimage.com/1160x376'],
                        publishTime: '刚刚',
                        source: 'DS女老师',
                        type: '1'

                    },
                    {
                        title: '正总手游网易的戏出品 国内顶IP......',
                        intro: '技能、千种炫酷装备、告别文字战斗激情PK统百玩不厌...',
                        link: '/news/38621',
                        imgUrl: ['http://dummyimage.com/432x280'],
                        publishTime: '2分钟前',
                        source: '娱乐八卦新鲜事儿',
                        type: '2'
                    },
                    {
                        title: '西游神传九大逆天技能、千种炫酷装备',
                        intro: '技能、千种炫酷装备、告别文字战斗激情PK统百玩不厌...',
                        link: '/news/38621',
                        imgUrl: ['http://dummyimage.com/1160x376'],
                        publishTime: '4分钟前',
                        source: '娱乐八卦',
                        type: '3'
                    },
                    {
                        title: '质量上乘画风感人《武士崛起》事前登录',
                        intro: '技能、千种炫酷装备、告别文字战斗激情PK统百玩不厌...',
                        link: '/news/38621',
                        imgUrl: ['http://dummyimage.com/360x300', 'http://dummyimage.com/360x300', 'http://dummyimage.com/360x300'],
                        publishTime: '刚刚',
                        source: 'DS女老师',
                        type: '4'

                    }
                ]
            };
        }
    };

</script>

<style lang="scss" scoped>
    .list {
        padding-left: 30px;
        .item {
            padding-top: 28px;
            padding-right: 30px;
            padding-bottom: 28px;
            &:not(:last-child) {
                border-bottom: solid #e5e5e5 1px;
                /*no*/
            }
            .title {
                font-size: 32px;
                /*px*/
                color: #000;
            }
            .content {
                .source,
                .publishTime {
                    font-size: 24px;
                    /*px*/
                    color: #a5a5a5;
                    font-weight: 500;
                }
                .source{
                    margin-right: 15px;
                }
                &.type1 {
                    .contentPicture {
                        margin-top: 22.5px;
                        margin-bottom: 22.5px;
                    }
                }
                &.type2 {
                    display: flex;
                    .leftArea {
                        display: flex;
                        width: 216px;
                        min-width: 216px;
                        height: 140px;
                        margin-right: 30px;
                        overflow: hidden;
                    }
                    .rightArea {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .title{
                            line-height: 40px;
                        }
                    }
                }
                &.type3 {
                    .intro {
                        margin-top: 12px;
                        margin-bottom: 12px;
                        line-height: 40px;
                        font-size: 28px;
                        /*px*/
                        color: #666;
                    }
                }
                &.type4 {
                    .contentPicture {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                        margin-top: 22.5px;
                        margin-bottom: 22.5px;
                        .imgWrapper {
                            display: flex;
                            width: 180px;
                            height: 150px;
                            &:not(:last-child) {
                                margin-right: 30px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>