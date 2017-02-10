<!--首页：一元购区域-->
<template>
    <div class="container">
        <div class="one">
            <div class="imgWrapper">
                <img :src="result.imgUrl" alt="">
            </div>
            <div class="content">
                <div class="title 1overflow-ellipsis">{{ result.goodsName }}</div>
                <div class="progressBar">
                    <div class="progressBarWrapper">
                        <div class="bar progressBarCurrent" style="width: 3.00743%;">&nbsp;</div>
                        <div class="bar progressBarRest">&nbsp;</div>
                    </div>
                    <div class="progressBarAmount">
                        <div class="totalAmount">总需8080</div>
                        <div class="restAmount">剩余<span>7837</span></div>
                    </div>
                </div>
                <a class="join" href="javascript:;">立即参与</a>
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
                    imgUrl: 'http://dummyimage.com/400x400'
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
                border-right: solid #dfdfdf 1px;/*no*/
            }
            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1;
                align-items: stretch;
                height: 178px;
                margin-left: 40px;
                .title {
                    /*height: 58px;*/
                    margin-bottom: 15px;
                    font-size: 26px;
                    /*px*/
                    color: #333;
                    overflow: hidden;
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
                    .progressBarAmount {
                        height: 70px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
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
                    /*px*/
                    color: #fff;
                    background-color: #ff4a4a;
                    text-align: center;
                    border-radius: 10px;
                }
            }
        }
    }
</style>