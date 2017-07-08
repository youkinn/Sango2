'use strict';
let router = [{
    name: 'crud',
    path: '/demo/crud',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/crud.page'));
        },
        'crud'
      );
    }
  },
  {
    name: 'vuex',
    path: '/demo/vuex',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/vuex.page'));
        },
        'vuex'
      );
    }
  },
  {
    name: 'share',
    path: '/demo/share',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/share.page'));
        },
        'share'
      );
    }
  },
  {
    name: 'button',
    path: '/demo/button',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/button.page'));
        },
        'button'
      );
    }
  },
  {
    name: 'listitem',
    path: '/demo/list',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/list.page'));
        },
        'listitem'
      );
    }
  },
  {
    name: 'iframe',
    path: '/demo/iframe',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/iframe.page'));
        },
        'iframe'
      );
    }
  },
  {
    name: 'toast',
    path: '/demo/toast',
    component: function(resolve) {
      require.ensure([],
        () => {
          resolve(require('../../pages/demo/toast.page'));
        },
        'toast'
      );
    }
  }
];

export default router;