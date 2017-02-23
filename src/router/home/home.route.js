'use strict';
let router = {
  '/': {  // 首页
    name: 'home',
    component: function (resolve) {
      require(['../../pages/home/home/index.page'], resolve);
    }
  },
  'news/:id': {  // 首页
    name: 'dewsDetail',
    component: function (resolve) {
      require(['../../pages/home/news/detail/index.page'], resolve);
    }
  }
};

export default router;
