<!-- Alert 弹框组件 -->
<template>
    <div class="mark" v-if="isShow">
        <div class="alert-container">
            <div v-if="title" class="alert-header">
                <h3>{{ title }}</h3>
            </div>
            <div v-if="content" class="alert-body">
                <p class="alert-brief">{{ content }}</p>
            </div>
            <div class="alert-footer">
                <a class="alert-botton" @touchstart.stop.prevent="touchL" v-if="!single">{{ leftBottonText }}</a>
                <a class="alert-botton" @touchstart.stop.prevent="touchR">{{ rightBottonText }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    'use strict';
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            },
            single: {
                type: Boolean,
                default: false
            },
            leftBottonText: {
                type: String,
                default: '取消'
            },
            rightBottonText: {
                type: String,
                default: '确定'
            }
        },
        methods: {
            touchL() {
                setTimeout(() => this.isShow = false, 100);
                this.$dispatch('alert-left-btn-touched');
            },
            touchR() {
                setTimeout(() => this.isShow = false, 100);
                this.$dispatch('alert-right-btn-touched');
            }
        }
    };

</script>

<style lang="scss" scoped>
    .mark {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .5);
    }
    
    .alert-container {
        width: 540px;
        background-color: #fff;
        border-radius: 14px;
        padding-top: 43px;
        margin-left: 43px;
        margin-right: 43px;
        .alert-header {
            h3 {
                font-size: 36px;
                /*px*/
                line-height: 43px;
                text-align: center;
                color: #000;
                font-weight: 400;
                padding: 0 82px 18px;
            }
        }
        .alert-body {
            padding: 0 8px;
            line-height: 40px;
            .alert-brief {
                color: #888;
                padding: 0 24px;
                display: block;
                font-size: 30px;
                /*px*/
                text-align: center;
            }
        }
        .alert-footer {
            display: flex;
            margin-top: 30px;
            border-top: 2px solid rgba(0, 0, 0, .05);
            /*no*/
        }
        .alert-botton {
            flex: 1;
            display: block;
            width: 100%;
            height: 102px;
            line-height: 102px;
            font-size: 36px;
            /*px*/
            background: 0 0;
            border: 0;
            outline: 0;
            border-left: 2px solid rgba(0, 0, 0, .05);
            /*no*/
            -webkit-appearance: none;
            color: #000;
            text-align: center;
            box-sizing: border-box;
            &:last-child {
                color: #108ee9;
            }
            &:active {
                background-color: rgba(54, 57, 64, .05);
            }
            &:disabled {
                color: #c2c2c2;
            }
        }
    }
</style>