<template>
  <div class="page">
    <app-header-component s-title="Button"></app-header-component>
    <div class="btn-container">
      <div class="btn-group">
        <tm-button s-text="进入" :b-plain="true" s-type="primary" @click.native="tt">></tm-button>
        <tm-button s-text="进入" :b-plain="true" s-type="primary" :b-disabled="true" @click.native="tt">></tm-button>
      </div>
      <div class="btn-group">
        <tm-button s-text="进入" @click.native="tt"></tm-button>
        <tm-button s-text="进入" s-type="primary" @click.native="tt"></tm-button>
        <tm-button s-text="进入" s-type="primary" :b-disabled="true" @click.native="tt"></tm-button>
      </div>
      <br>
      <div class="btn-group btn-group--large">
        <tm-button s-text="进入" s-size="large" s-type="primary" :b-plain="true" @click.native="tt"></tm-button>
        <tm-button s-text="进入" s-size="large" @click.native="tt"></tm-button>
        <tm-button s-text="进入" s-size="large" s-type="primary" @click.native="tt"></tm-button>
        <tm-button s-text="进入" s-size="large" s-type="primary" :b-disabled="true" @click.native="tt"></tm-button>
      </div>
    </div>
  </div>
</template>
<script>
'use strict';
import TmButton from '../../components/basic/button/button.component';
export default {
  components: {
    TmButton
  },
  methods: {
    tt() {
      console.log('click');
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-container {
  padding: 30px;

  .btn-group {
    margin-bottom: 40px;
    &--large {
      .tm-button {
        margin-bottom: 20px;
      }
    }
  }
}
</style>