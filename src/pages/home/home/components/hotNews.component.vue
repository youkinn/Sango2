<!--首页：玩游戏赢淘豆-->
<template>
    <div class="container">
        <ul class="list" v-infinite-scroll="getNewsList()" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="true">
            <li class="item content" v-for="item in news.list" v-link="{name: 'dewsDetail', params: {id: item._id}}">
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
        <p v-show="news.loading" class="page-infinite-loading">
            <spinner type="fading-circle"></spinner>加载中
        </p>
    </div>
</template>

<script>
    'use strict';
    import { InfiniteScroll, Spinner } from 'mint-ui';
    import LoadData from '../../../../components/loaddata/LoadData';

    Vue.use(InfiniteScroll);
    Vue.component('spinner', Spinner);

    export default {
        components: {
            InfiniteScroll,
            Spinner
        },
        data() {
            return {
                news: {}
            };
        },
        compiled() {
            this.news = new LoadData({
                url: Vue.ClientUrl.getNewsList,
                pageSize: 5
            });
        },
        methods: {
            getNewsList() {
                this.news.getList(this);
            }
        }
    };

</script>

<style lang="scss" scoped>
    .list {
        padding-left: 30px;
        border-top: solid #e5e5e5 1px;/*no*/
        .item {
            padding-top: 28px;
            padding-right: 30px;
            padding-bottom: 28px;
            border-bottom: solid #e5e5e5 1px;
            /*no*/
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