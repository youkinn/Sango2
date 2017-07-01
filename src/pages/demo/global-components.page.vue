<template>
    <div class="container">
        <inline-button-compontent s-text="进入"></inline-button-compontent>
        <inline-button-compontent s-text="去完成"></inline-button-compontent>
        <inline-button-compontent s-text="福利商城"></inline-button-compontent>
        <br>
        <br>
        <inline-button-compontent s-text="进入" s-theme="green"></inline-button-compontent>
        <inline-button-compontent s-text="去完成" s-theme="green"></inline-button-compontent>
        <inline-button-compontent s-text="福利商城" s-theme="green"></inline-button-compontent>
        <br>
        <br>
        <inline-button-compontent s-text="进入" :b-disabled="true"></inline-button-compontent>
        <inline-button-compontent s-text="去完成" :b-disabled="true"></inline-button-compontent>
        <inline-button-compontent s-text="福利商城" :b-disabled="true"></inline-button-compontent>
        <br>
        <br>
        <alert-compontent :b-show="true" s-title="操作成功" s-content="666" @alert-right-btn-touched="test"></alert-compontent>
        <toast-compontent :b-show="false" s-message="操作失败"></toast-compontent>
    </div>
</template>
<script>
'use strict';
export default {
    methods: {
        test() {
            alert();
        }
    }
};
</script>
<style>
.container{
    margin: 30px;
}
</style>
