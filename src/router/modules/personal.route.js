'use strict';
let router = [{ // 个人中心首页
  name: 'personal',
  path: '/personal',
  component: function(resolve) {
    require(['../../pages/personal/personal.page'], resolve);
  },
  meta: { requiresAuth: true }
}];

export default router;