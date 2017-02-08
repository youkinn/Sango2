<!--设置密码弹框 dialog.nType：3-->
<template>
    <div class="mark" v-if="isShow">
        <div class="container login">
            <div class="title-bar"><span class="allow-left" @click.stop="prev"><</span> {{ title }}</div>
            <p class="password last"><input v-model="password" type="password" placeholder="请输入密码" maxlength="20" autofocus></p>
            <p class="btnSubmit"><input type="button" :class="{disabled: disabled}" value="完成" @click.stop="submit"></p>
        </div>
    </div>
</template>

<script>
    'use strict';
    import { dialog } from '../../vuex/getters';
    import { updateDialogState } from '../../vuex/actions';
    import { isValidPassword } from './account.common.js';
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
                default: '设置密码'
            }
        },
        data() {
            return {
                password: ''
            };
        },
        computed: {
            isShow() {
                return this.dialog.nType == 3 && this.dialog.bShow;
            },
            disabled() {
                return !this.validate();
            }
        },
        methods: {
            prev() {
                this.password = '';
                this.updateDialogState({ nType: this.dialog.nActionType, bShow: true });
            },
            submit() {
                if (this.disabled || !this.validate(1)) {
                    return;
                }
                (this.dialog.nActionType == 1) ? this.register() : this.setPassword();
            },
            setPassword() {
                if (!this.validate(1)) {
                    return;
                }
                Vue.ClientHttp(this).POST({ username: this.dialog.username, password: this.password, smsCode: this.dialog.smsCode }, '/api/forgetPwd')
                    .then((res) => {
                        alert(res.msg);
                        if (res.code == 10000) {
                            this.password = '';
                            this.updateDialogState({ nType: 0, bShow: true, username: '', smsCode: '' });
                        }
                    });
            },
            register() {
                if (!this.validate(1)) {
                    return;
                }
                Vue.ClientHttp(this).POST({ username: this.dialog.username, password: this.password, smsCode: this.dialog.smsCode }, '/api/register')
                    .then((res) => {
                        alert(res.msg);
                        if (res.code == 10000) {
                            this.updateDialogState({ bShow: false, username: '', smsCode: '' });
                        }
                        else if (res.code == 20001) {
                            this.updateDialogState({ bShow: true, nType: 0, username: '', smsCode: '' });
                        }
                    });
            },
            validate(showMsg) {
                if (!isValidPassword(this.password)) {
                    if (showMsg) alert('请输入6-16位、字母数字下划线');
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