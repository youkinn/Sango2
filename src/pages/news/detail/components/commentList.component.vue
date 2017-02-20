<template>
    <div class="container">
        <ul class="list">
            <li class="item">
                <div class="userinfo">
                    <div class="left">
                        <img src="http://dummyimage.com/68x68" alt="">
                    </div>
                    <div class="right">
                        <div class="name">Xx这里有彩虹</div>
                        <div class="publish-time">2016.08.24 10:50</div>
                    </div>
                </div>
                <div class="content">
                    上学而已......又不是坐牢，怎么弄的跟生离死别似的哈哈哈......
                </div>
                <div class="hr"></div>
            </li>
            <li class="item">
                <div class="userinfo">
                    <div class="left">
                        <img src="http://dummyimage.com/68x68" alt="">
                    </div>
                    <div class="right">
                        <div class="name">Xx这里有彩虹</div>
                        <div class="publish-time">2016.08.24 10:50</div>
                    </div>
                </div>
                <div class="content">
                    上学而已......又不是坐牢，怎么弄的跟生离死别似的哈哈哈......
                </div>
                <div class="hr"></div>
            </li>
            <li class="item">
                <div class="userinfo">
                    <div class="left">
                        <img src="http://dummyimage.com/68x68" alt="">
                    </div>
                    <div class="right">
                        <div class="name">Xx这里有彩虹</div>
                        <div class="publish-time">2016.08.24 10:50</div>
                    </div>
                </div>
                <div class="content">
                    上学而已......又不是坐牢，怎么弄的跟生离死别似的哈哈哈......
                </div>
                <div class="hr"></div>
            </li>
        </ul>
        <div class="more">查看更多评论(24)</div>
    </div>

</template>

<script>
    'use strict';
    export default {
        components: {
        }
    };

</script>

<style lang="scss" scoped>
    .container {
        padding-left: 30px;
        padding-right: 30px;
        border-top: solid #e5e5e5 1px;/*no*/
        border-bottom: solid #e5e5e5 1px;/*no*/

        .list {
            border-top: solid #e5e5e5 1px;
            /*no*/
        }

        .more {
            height: 89px;
            line-height: 89px;
            font-size: 28px;
            /*px*/
            color: #a5a5a5;
            text-align: center;
        }
    }
    
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        padding-top: 30px;
        .userinfo {
            display: flex;
            height: 68px;

            .left {
                width: 68px;
                height: 68px;
                overflow: hidden;
                border-radius: 50%;
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 32px;

                .name {
                    font-size: 28px;
                    /*px*/
                    color: #000;
                }
                .publish-time {
                    font-size: 24px;
                    /*px*/
                    color: #a5a5a5;
                }
            }
        }
        .content {
            font-size: 28px;
            /*px*/
            color: #666;
            line-height: 36px;
            padding-top: 30px;
            padding-bottom: 30px;
        }
        .hr {
            width: 610px;
            height: 1px;
            /*px*/
            line-height: 1px;
            /*px*/
            border-top: solid #e5e5e5 1px;
            /*no*/
            color: #e5e5e5;
        }
    }
</style>