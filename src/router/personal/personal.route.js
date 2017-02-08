'use strict';
let router = {
  '/personal': {  // 个人中心首页
    name: 'personal',
    component: function (resolve) {
      require(['../../pages/personal/index.page'], resolve);
    }
  }
};

export default router;
