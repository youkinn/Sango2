<template>
  <div class="page">
    <app-header-component s-title="Toast"></app-header-component>
    <div class="page__toast-wrapper">
      <div @click="openToast">点击弹出 Toast</div>
      <div @click="openToastWithIcon('操作成功', 'success')">点击弹出带有 icon 的 Toast--success</div>
      <div @click="openToastWithIcon('操作失败', 'failed')">点击弹出带有 icon 的 Toast--failed</div>
      <div @click="openToastWithIcon('处理中', 'loading')">点击弹出带有 icon 的 Toast--loading</div>
      <div @click="openBottomToast">自定义 Toast 位置</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  &__toast-wrapper {
    width: 100%;
    padding: 30px;
    div {
      margin-bottom: 20px;
    }
  }
}
</style>

<script>
import Toast from '../../components/basic/toast/toast';
export default {
  methods: {
    openToast() {
      Toast('提示信息');
    },

    openToastWithIcon(msg, type) {
      Toast({
        message: msg,
        iconType: type
      });
    },

    openBottomToast() {
      Toast({
        message: '提示信息',
        position: 'bottom'
      });
    }
  }
};
</script>
