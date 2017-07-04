'use strict';
let router = [{ // 首页
    name: 'home',
    path: '/',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/home/home/home.page'));
        },
        'home'
      );
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
      require.ensure([],
        () => {
          resolve(require('../../pages/home/news/detail/news-detail.page'));
        },
        'newsDetail'
      );
    }
  }
];

export default router;