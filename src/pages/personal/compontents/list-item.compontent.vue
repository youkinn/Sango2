<template>
    <div class="list-item" :class="{'list-item--last': bLast}">
        <div class="list-item__thumb">
            <i class="icon" :class="sIcon" :style="{color: sIconColor}"></i>
        </div>
        <div class="list-item__content">
            {{sContent}}
        </div>
        <div class="list-item__extra">
            <slot name="extra">{{sExtra}}</slot>
        </div>
        <div class="list-item__arrow">
            <i class="icon icon-arrow-right"></i>
        </div>
    </div>
</template>
<script>
'use strict';
export default {
    props: {
        sIcon: {
            type: String,
            defalult: ''
        },
        sIconColor: {
            type: String,
            defalult: ''
        },
        sContent: {
            type: String,
            defalult: ''
        },
        sExtra: {
            type: String,
            defalult: ''
        },
        bLast: {
            type: Boolean,
            defalult: false
        }
    }
};
</script>
<style lang="scss" scoped>
.list-item {
    display: flex;
    align-items: center;
    height: 87px;
    margin-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    border-bottom: solid #e5e5e5 1px;
    /*no*/
    &--last {
        border-bottom: none;
    }
    &__thumb {
        display: flex;
        justify-content: flex-start;
        width: 64px;
        .icon {
            font-size: 40px;
            /*px*/
        }
    }
    &__content {
        width: 140px;
        font-size: 32px;
        /*px*/
        color: #333;
        text-align: left;
    }
    &__extra {
        width: 344px;
        font-size: 28px;
        /*px*/
        color: #a5a5a5;
        text-align: right;
    }
    &__arrow {
        display: flex;
        justify-content: flex-end;
        width: 32px;
        color: #a5a5a5;

        .icon {
            font-size: 26px;
            /*px*/
        }
    }
}
</style>