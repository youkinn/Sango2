'use strict';
let router = [{
    name: 'crud',
    path: '/demo/crud',
    component: function(resolve) {
      require(['../../pages/demo/crud.page'], resolve);
    }
  },
  {
    name: 'vuex',
    path: '/demo/vuex',
    component: function(resolve) {
      require(['../../pages/demo/vuex.page'], resolve);
    }
  },
  {
    name: 'share',
    path: '/demo/share',
    component: function(resolve) {
      require(['../../pages/demo/share.page'], resolve);
    }
  }
];

export default router;