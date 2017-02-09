<!--首页：一元购区域-->
<template>
    <div class="container">
        <div class="one">
            <div class="imgWrapper">
                <img :src="result.imgUrl" alt="">
            </div>
            <div class="content">
                <div class="title">{{ result.goodsName }}</div>
                <div class="progressBar clearfix">
                    <div class="progressBarWrapper">
                        <div class="bar progressBarCurrent" style="width: 3.00743%;">&nbsp;</div>
                        <div class="bar progressBarRest">&nbsp;</div>
                    </div>
                    <div class="xx">
                        <div class="totalAmount fl">总需8080</div>
                        <div class="restAmount fr">剩余<span>7837</span></div>
                    </div>
                </div>
                <a class="join" href="http://1.lly800.com/#/details/6">立即参与</a>
            </div>
        </div>
    </div>
</template>

<script>
    'use strict';
    export default {
        data() {
            return {
                result: {
                    goodsName: '移动50元充值卡 冲锋场',
                    total: 8080,
                    rest: 7873,
                    imgUrl: 'http://dummyimage.com/300x300'
                }
            };
        }
    };

</script>

<style lang="scss" scoped>
    .container {
        height: 256px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .one {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
            .imgWrapper {
                width: 199px;
                height: 200px;
                padding-right: 40px;
                overflow: hidden;
                border-right: solid #dfdfdf 1px;
                img {
                    width: 100%;
                }
            }
            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1;
                align-items: stretch;
                margin-left: 40px;
                .title {
                    height: 58px;
                    font-size: 26px;
                    /*px*/
                    color: #333;
                }
                .progressBar {
                    .bar {
                        height: 12px;
                        border-radius: 5px;
                    }
                    .progressBarCurrent {
                        position: absolute;
                        background-color: #ff695a;
                    }
                    .progressBarRest {
                        background-color: #dfdfdf;
                    }
                    .xx {
                        height: 70px;
                        display: flex;
                        align-items: center;
                        .totalAmount {
                            margin-right: 73px;
                        }
                        .totalAmount,
                        .restAmount {
                            font-size: 24px;
                            /*px*/
                            color: e5e5e5;
                        }
                        .restAmount span {
                            color: #ff4a4a;
                        }
                    }
                }
                .join {
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    font-size: 26px;
                    color: #fff;
                    background-color: #ff4a4a;
                    text-align: center;
                    border-radius: 10px;
                }
            }
        }
    }
</style>