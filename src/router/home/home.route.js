'use strict';
let router = {
  '/': {  // 首页
    name: 'home',
    component: function (resolve) {
      require(['../../pages/home/index.page'], resolve);
    }
  },
  'news/:id': {  // 首页
    name: 'dewsDetail',
    component: function (resolve) {
      require(['../../pages/news/detail/index.page'], resolve);
    }
  }
};

export default router;
