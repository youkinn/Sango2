<template>
    <div class="container" @click.stop.prevent="showCommentDialog">
        <div class="input-wrapper">
            <input type="text" placeholder="我也来说几句..." readonly>
            <input type="button" value="发表">
        </div>
    </div>
    <comment-dialog-component></comment-dialog-component>
</template>

<script>
    'use strict';
    import commentDialogComponent from './commentDialog.component';
    export default {
        components: {
            commentDialogComponent
        },
        methods: {
            showCommentDialog(){
                this.$broadcast('showCommentDialog');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .container{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: solid #e5e5e5 1px;/*no*/
        background-color: #fff;

        .input-wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            height: 90px;
            padding-left: 30px;
            padding-right: 30px;
        }

        input{
            box-sizing: border-box;
            background-color: #fff;
        }

        input[type=text]{
            flex: 1;
            border: solid #e5e5e5 1px;/*no*/
            margin-right: 30px;
            font-size: 24px;/*px*/
            color: #a5a5a5;
            padding: 12px 20px;
            border-radius: 8px;
        }

        input[type=button]{
            width: 90px;
            height: 48px;
            line-height: 48px;
            border: solid #ccc 1px;/*no*/
            font-size: 26px;/*px*/
            color: #333;
            border-radius: 8px;
        }
    }
</style>