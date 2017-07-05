<template>
  <div>
    <div>{{user.username}}</div>
    <img :src="user.avatar" alt="">
  </div>
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

    };
  },
  methods: {},
  mounted() {
    this.getUserInfo();

    /**
     * 还是1版本的写法，要改
    */
  }
};
</script>