<template>
    <div class="action-button" v-show="show" @click.stop="goToTop">
        <i class="icon icon-top"></i>
    </div>
</template>
<script>
'use strict';
export default {
    data() {
        return {
            show: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.controlDisplay);
    },
    deactivated() {
        window.removeEventListener('scroll', this.controlDisplay);
    },
    methods: {
        controlDisplay() {
            debugger;
            this.show = (!mallUtils.device.isWindows && document.body.scrollTop > 200) ? true : false;
        },
        goToTop() {
            window.scrollTo(0, 0);
        }
    }
};
</script>
<style lang="scss" scoped>
.action-button {
    position: fixed;
    right: 30px;
    bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    opacity: 0.4;
    color: #fff;
    background-color: #000;
    i {
        font-size: 40px;
    }
}
</style>