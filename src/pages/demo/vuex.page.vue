<template>
    <div>{{user.username}}</div>
    <img :src="user.avatar" alt="">
</template>

<script>
    'use strict';
    import { user } from '../../vuex/getters';
    import { getUserInfo } from '../../vuex/actions';
    export default {
        vuex: {
            getters: {
                user: user
            },
            actions: {
                getUserInfo
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
        },
        ready() {
            this.getUserInfo();
        }
    }
</script>