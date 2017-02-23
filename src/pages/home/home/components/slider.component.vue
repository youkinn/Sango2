<!--首页：轮播图-->
<template>
    <div class="container">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="/static/images/home/swipe/1487318324925764.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="/static/images/home/swipe//1487324150137199.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="/static/images/home/swipe//1487316905748202.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    'use strict';
    import { Swipe, SwipeItem } from 'mint-ui';

    Vue.component('mt-swipe', Swipe);
    Vue.component('mt-swipe-item', SwipeItem);
    export default {
        components: {
            Swipe,
            SwipeItem
        }
    };

</script>

<style lang="scss" scoped>
    .container {
        overflow: hidden;
        padding-left: 30px;
        padding-right: 30px;

        .swipe{
            height: 280px;
        }
    }
</style>