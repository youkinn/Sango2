<!--app底部-->
<template>
    <div class="container">
        <div class="menu-item" :class="{'selected': index==0}" v-link="{name: 'home'}">
            <i class="icon icon-home"></i>
            <div>首页</div>
        </div>
        <div class="menu-item" :class="{'selected': index==1}"  v-link="{name: 'gameCenter'}">
            <i class="icon icon-game"></i>
            <div>游戏</div>
        </div>
        <div class="menu-item" :class="{'selected': index==2}">
            <i class="icon icon-one"></i>
            <div>夺宝</div>
        </div>
        <div class="menu-item" :class="{'selected': index==3}" v-link="{name: 'personal'}" @click.stop="login">
            <i class="icon icon-mine"></i>
            <div>我的</div>
        </div>
    </div>
</template>

<script>
    'use strict';
    import { dialog } from '../../../vuex/getters';
    import { updateDialogState } from '../../../vuex/actions';
    export default {
        vuex: {
            getters: {
                dialog: dialog
            },
            actions: {
                updateDialogState
            }
        },
        props: {
            index: {
                type: Number,
                default: undefined
            }
        },
        methods: {
            login(){
                this.$parent.$broadcast('forbidden');
            }
        }
    };

</script>

<style lang="scss" scoped>
    .container {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        box-shadow: border-box;
        width: 100%;
        border-top: solid #e5e5e5 1px;/*no*/
        background-color: #fff;

        .menu-item{
            &.selected{
                color: #00c1b3;
            }
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #888;

            box-sizing: border-box;
            height: 98px;
            padding-top: 17px;
            padding-bottom: 12px;

            i{
                font-size: 40px;/*px*/
                margin-bottom: 6px;
            }

            div{
                font-size: 20px;/*px*/
            }
        }
    }
</style>