<template>
  <ul class="list">
    <router-link tag="li" class="item" :class="{last: index!=newsList.length-1}" :to="{name: 'NewsDetail', params: {id: item.id}}" v-for="(item, index) in newsList" :key="index">
      <div class="title overflow-ellipsis">•{{item.title}}</div>
    </router-link>
  </ul>
</template>
<script>
'use strict';
export default {
  props: {
    newsList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  deactivated() {
    this.newsList = [];
  }
};
</script>
<style lang="scss" scoped>
.list {
  padding-left: 30px;
  border-top: solid #e5e5e5 1px;
  margin-bottom: 91px;
}

.item {
  padding-right: 30px;
  &.last {
    border-bottom: solid #e5e5e5 1px;
  }
  .title {
    height: 83px;
    line-height: 83px;
    font-size: 28px;
    /*px*/
    color: #000;
  }
}
</style>