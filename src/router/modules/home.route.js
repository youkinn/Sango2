'use strict';
let router = [{ // 首页
    name: 'home',
    path: '/',
    component: function(resolve) {
      require(['../../pages/home/home/home.page'], resolve);
    },
    beforeEnter(to, from, next) {
      console.log('beforeEnter home');
      next();
    }
  },
  { // 资讯详情
    name: 'NewsDetail',
    path: '/news/:id',
    component: function(resolve) {
      require(['../../pages/home/news/detail/news-detail.page'], resolve);
    }
  }
];

export default router;