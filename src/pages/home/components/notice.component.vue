<!--首页：滚动消息-->
<template>
    <div class="container">
        <ul class="noticeList">
            <li class="item overflow-ellipsis" v-for="item in notices" :href="v.item.linkUrl">
                <i class="icon icon-notice"></i> {{ item.content }}
            </li>
        </ul>

    </div>
</template>

<script>
    'use strict';
    export default {
        props: {
            notices: {
                type: Array,
                default: [{}, {}]
            }
        }
    };

</script>

<style lang="scss" scoped>
    .container {
        padding-left: 30px;
        padding-right: 30px;
        .noticeList {
            height: 84px;
            overflow-y: hidden;
            font-size: 26px;/*px*/
            li {
                height: 84px;
                line-height: 84px;

                i {
                    margin-right: 11px;
                }
            }
        }
    }
</style>