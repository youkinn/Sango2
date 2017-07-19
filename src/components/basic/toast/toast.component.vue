<template>
  <transition name="tm-toast-pop">
    <div class="tm-toast" v-show="visible" :class="customClass">
      <i class="tm-toast__icon icon" :class="iconClass" v-if="iconType !== ''"></i>
      <span class="tm-toast__text">{{ message }}</span>
    </div>
  </transition>
</template>
<script>
/**
 * @module components/toast
 * @desc 轻提示
 * @param {string} [message=''] - 消息内容
 * @param {string} [position='middle'] - 提示位置，接受 middle, bottom
 * @param {boolean} [iconType=''] - icon，默认不带，接受success，failed，offline，loading
 *
 * @example
 * Toast('提示信息');
 * 
 */
export default {
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle',
      validator(value) {
        return ['middle', 'bottom'].indexOf(value) > -1;
      }
    },
    iconType: {
      type: String,
      default: '',
      validator(value) {
        return ['success', 'failed', 'offline', 'loading'].indexOf(value) > -1;
      }
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    customClass() {
      let classes = {};
      classes[`tm-toast--place${this.position}`] = true;
      classes['tm-toast--with-icon'] = this.iconType != '';
      return classes;
    },
    iconClass() {
      let classes = {};
      classes[`icon-${this.iconType}`] = true;
      return classes;
    }
  }
};
</script>
<style lang="scss" scoped>
.tm-toast {
  position: fixed;
  max-width: 80%;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  transition: opacity .3s linear;

  &--with-icon {
    border-radius: 20px;
  }

  &__icon {
    display: block;
    margin: 30px 55px 0 55px;
    text-align: center;
    font-size: 70px;
    /*px*/
  }

  &__text {
    display: block;
    padding: 20px;
    font-size: 26px;
    /*px*/
    text-align: center;
  }

  &--placetop {
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &--placemiddle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &--placebottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &-pop-enter,
  &-pop-leave-active {
    opacity: 0;
  }
}

.icon-loading:before {
  display: inline-block;
  animation: loadingCircle 1s infinite linear;
}

@keyframes loadingCircle {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(1turn)
  }
}
</style>