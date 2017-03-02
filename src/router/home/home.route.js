'use strict';
let router = [{ // 首页
    name: 'home',
    path: '/',
    component: function(resolve) {
      require(['../../pages/home/home/index.page'], resolve);
    }
  },
  { // 首页
    name: 'newsDetail',
    path: '/news/:id',
    component: function(resolve) {
      require(['../../pages/home/news/detail/index.page'], resolve);
    }
  }
];

export default router;