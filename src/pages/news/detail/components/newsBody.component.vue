<template>
   <div class="container">
       <div class="header">
           <div class="title">不死之身评测:专为杀戮而生华</div>
           <div class="info">
               <div class="publish-time">2015-06-24 17:23</div>
               <div class="source">淘游资讯</div>
           </div>
       </div>
       <div class="content">
           是的我并不想把Madfinger最新作死之身他的经典之作《死亡扳机》拿来做一个比较虽然都是以杀僵尸作为唯一一个目的玩起来感觉
却截然不同当然的一些味道也现在了上强大艳丽的画面，同样爽快的设计感觉起来还那样游戏的故事不变，玩法不变，但是总有很多办
       </div>
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
    .header,
    .content{
        padding-left: 30px;
        padding-right: 30px;
    }
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;

        height: 156px;
        background-color: #f5f5f5;

        .title{
            margin-bottom: 18px;
            font-size: 40px;/*px*/
            color: #000;
        }

        .info{
            display: flex;
            align-items: center;
            font-size: 24px;/*px*/
            color: #a5a5a5;

            .publish-time{
                margin-right: 30px;
            }
        }
    }

    .content{
        padding-top: 40px;
        padding-bottom: 40px;
        border-top: solid #e5e5e5 1px;/*no*/
        border-bottom: solid #e5e5e5 1px;/*no*/
        line-height: 44px;
        font-size: 28px; /*px*/
        color: #666;
    }
</style>