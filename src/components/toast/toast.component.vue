<!-- Toast 轻提示组件 -->
<template>
    <div class="toast-container" v-if="isShow">
        <span v-if="!type" class="plain-text">
            {{ message }}
        </span>
        <div v-if="type==1 || type==2 || type==3 || type==4" class="with-icon">
            <i v-if="type==1" class="icon icon-success"></i>
            <i v-if="type==2" class="icon icon-failed"></i>
            <i v-if="type==3" class="icon icon-offline"></i>
            <i v-if="type==4" class="icon icon-loadding"></i>
            <span class="toast-text">
                {{ message }}
            </span>
        </div>
    </div>
</template>

<script>
    'use strict';
    export default {
        data(){
            return {
                isShow: false,
                type: 0,
                message: ''
            };
        },
        compiled() {
            this.$on('toast', (message, type = 0, time = 2000)=> {
                debugger;
                this.message = message;
                this.isShow = true;
                this.type = type;
                setTimeout(() => {
                    this.isShow = false;
                    this.message = '';
                    this.type = 0;
                }, time);
            });
        }
    };

</script>

<style lang="scss" scoped>
    .toast-container {
        display: flex;
        align-items: center;
        font-size: 26px;
        /*px*/
        color: #fff;
    }
    
    .plain-text {
        position: fixed;
        display: block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 40px;
        line-height: 40px;
        width: 350px;
        padding: 10px 20px;
        background-color: #000;
        opacity: 0.7;
        border-radius: 7px;
        text-align: center;
    }
    
    .with-icon {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 180px;
        width: 180px;
        background-color: #1f2337;
        opacity: 0.9;
        border-radius: 20px;
        text-align: center;
        i {
            display: block;
            font-size: 70px;
            margin: 30px 55px 20px 55px;
        }
    }
    
    .icon-loadding:before {
        display: inline-block;
        animation: loadingCircle 1s infinite linear;
    }
    
    @keyframes loadingCircle {
        0% {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(1turn)
        }
    }
</style>