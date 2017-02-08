<!--注册/找回密码弹框 dialog.nType：1 or 2-->
<template>
    <div class="mark" v-if="isShow">
        <div class="container login">
            <div class="title-bar"><span class="allow-left" @click.stop="prev"><</span> {{ title }}</div>
            <p class="username"><input v-model="username" type="text" placeholder="请输入您的手机号" maxlength="20" autofocus></p>
            <p class="smsCode">
                <input v-model="smsCode" type="text" placeholder="请输入验证码" value="123456" maxlength="6">
            </p>
            <p class="btnRegister"><input type="button" :class="{disabled: disabled}" value="下一步" @click.stop="next"></p>
        </div>
    </div>
</template>

<script>
    'use strict';
    import { dialog } from '../../vuex/getters';
    import { updateDialogState } from '../../vuex/actions';
    import { isPhone } from './account.common.js';
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
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                username: '',
                smsCode: ''
            };
        },
        computed: {
            isShow(){
                return (this.dialog.nType == 1 || this.dialog.nType == 2) && this.dialog.bShow;
            },
            title(){
                if(this.dialog.nType == 1){
                    return '注册';
                }
                else if(this.dialog.nType == 2){
                    return '找回密码';
                }
                return '';
            },
            disabled() {
                return !this.validate();
            }
        },
        methods: {
            next() {
                if(this.disabled || !this.validate(1)){
                    return;
                }
                this.updateDialogState({ nType: 3, bShow: true, username: this.username, smsCode: this.smsCode });
            },
            prev(){
                this.updateDialogState({ nType: 0, bShow: true });
            },
            validate(showMsg) {
                if (!isPhone(this.username)) {
                    if (showMsg) alert('请输入正确的手机号');
                    return false;
                }
                if (this.smsCode.trim() == '') {
                    if (showMsg) alert('请输入验证码');
                    return false;
                }
                return true;
            }
        }
    };

</script>

<style lang="scss" scoped>
    @import "account.common.scss";
</style>