<template>
  <div class="mark" v-if="isShow" @click.stop.prevent.self="close">
    <div class="container">
      <div class="header">
        <div class="left">
          <div class="let">我也来说几句</div>
          <div class="info">5/20</div>
        </div>
        <button-component :type="1" text="发表" @touch="publish"></button-component>
      </div>
      <div class="content">
        <textarea v-focus v-model="content" placeholder="发表自己的见解" autofocus></textarea>
      </div>
    </div>
  </div>
</template>
<script>
'use strict';
import ButtonComponent from '../../../../components/button/button.component';
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: '',
      commentList: [],
      show: this.isShow
    };
  },
  components: {
    ButtonComponent
  },
  methods: {
    close() {
      this.isShow = false;
    },
    publish() {
      var newsId = this.$route.params.id;
      var content = this.content;
      var level = 0;
      var parentId = 0;
      Vue.ClientHttp(this).POST({ newsId, content, level, parentId }, '/api/auth/doComment')
        .then((res) => {
          if (res.code === 10000) {
            bus.$emit('comment-change', res.result.data);
            this.content = '';
            this.isShow = false;
          }
        });
    }
  },
  mounted() {
    bus.$on('showCommentDialog', () => {
      this.isShow = true;
    });
  }
};
</script>
<style lang="scss" scoped>
.mark {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
}

.container {
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f8f8;
  padding: 0 30px 40px 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
}

.left {
  flex: 1;
  display: flex;
  align-items: baseline;
  height: 50px;
  .let {
    margin-right: 30px;
    font-size: 32px;
    /*px*/
    color: #a5a5a5;
  }
  .info {
    font-size: 24px;
    /*px*/
    color: #ccc;
  }
}

.content {
  height: 170px;
  border: solid #e2e2e2 1px;
  /*no*/
  border-radius: 8px;
  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: none;
    font-size: 24px;
    color: #a5a5a5;
    resize: none;
    border-radius: 8px;
  }
}

 ::-webkit-input-placeholder {
  font-size: 24px;
  color: #a5a5a5;
}
</style>