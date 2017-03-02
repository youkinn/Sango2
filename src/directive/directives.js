'use strict';

// 设置光标 v-focus
export const focus = {

  // 当绑定元素插入到 DOM 中
  inserted: function(el) {

    // 聚焦元素
    el.focus();
  }
};