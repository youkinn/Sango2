'use strict';
let router = {
  "/demo/crud": {
    name: 'crud',
    component: function (resolve) {
      require(['../../pages/demo/crud.page'], resolve);
    }
  },
  "/demo/vuex": {
    name: 'vuex',
    component: function (resolve) {
      require(['../../pages/demo/vuex.page'], resolve);
    }
  }
};

export default router;

