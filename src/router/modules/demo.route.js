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
  },
  {
    name: 'components',
    path: '/demo/components',
    component: function(resolve) {
      require(['../../pages/demo/global-components.page'], resolve);
    }
  },
  {
    name: 'listitem',
    path: '/demo/list',
    component: function(resolve) {
      require(['../../pages/demo/list-item.page'], resolve);
    }
  }
];

export default router;