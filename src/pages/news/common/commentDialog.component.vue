<template>
    <div class="mark" v-if="isShow" @click.stop.prevent.self="close">
        <div class="container">
            <div class="header">
                <div class="left">
                    <div class="let">我也来说几句</div>
                    <div class="info">5/20</div>
                </div>
                <button-component :type="1" text="发表"></button-component>
            </div>
            <div class="content">
                <textarea v-el:ipt placeholder="发表自己的见解" autofocus></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    'use strict';
    import ButtonComponent from '../../../components/button/button.component';
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        components: {
            ButtonComponent
        },
        methods: {
            close(){
                this.isShow = false;
            }
        },
        compiled(){
            this.$on('showCommentDialog', function() {
                this.isShow = true;
            });
        },
        watch: {
            'isShow': function (val/*, oldVal*/) {
                if(val){
                    this.$els.ipt.focus();
                }
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
    .container {
        width: 100%;
        background-color: #fff;
        padding: 0 30px 40px 30px;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 86px;
    }
    .left{
        flex: 1;
        display: flex;
        align-items: baseline;
        height: 50px;

        .let{
            margin-right: 30px;
            font-size: 32px;/*px*/
            color: #a5a5a5;
        }
        .info{
            font-size: 24px;/*px*/
            color: #ccc;
        }
    }
    .content{
        height: 170px;
        
        border: solid #e2e2e2 1px;/*no*/
        border-radius: 8px;
        textarea{
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 20px;
            border: none;
            font-size: 24px;
            color: #a5a5a5;
        }
    }

    ::-webkit-input-placeholder{
        font-size: 24px;
        color: #a5a5a5;
    }
</style>