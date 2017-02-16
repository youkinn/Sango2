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
                            <span class="publishTime">{{ item.publishTime | formatDateToTimeago }}</span>
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
                                <span class="publishTime">{{ item.publishTime | formatDateToTimeago }}</span>
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
                            <span class="publishTime">{{ item.publishTime | formatDateToTimeago }}</span>
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
                            <span class="publishTime">{{ item.publishTime | formatDateToTimeago }}</span>
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
                pageIndex: 0,
                pageSize: 4,
                news: []
            };
        },
        compiled(){
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                Vue.ClientHttp(this).POST({ pageIndex: parseInt(this.pageIndex), pageSize: this.pageSize }, '/api/getNewsList')
                    .then((res) => {
                        debugger;
                        if (res.code == 10000) {
                            this.news = res.result.data;
                        }
                    });
            }
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
                .source {
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
                        .title {
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