<template>
    <input type="button" @click.stop="clickH('qzone')" value="分享到QQ" >
    <input type="button" @click.stop="clickH('tsina')" value="分享到腾讯微博" >
</template>

<script>
    'use strict';
    export default {
        methods: {
            clickH(target){
                // http://www.jiathis.com/getcode/mobile
                jiathis_mh5.sendTo(target);
            }
        }
    };
</script>
