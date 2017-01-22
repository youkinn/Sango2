'use strict';
let router = {
  '/': {  // 首页
    name: 'home',
    component: function (resolve) {
      require(['../../pages/home/index.page'], resolve);
    }
  }
};

export default router;
