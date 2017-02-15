'use strict';
let router = {
  '/gameCenter': {  // 游戏中心首页
    name: 'gameCenter',
    component: function (resolve) {
      require(['../../pages/gameCenter/index.page'], resolve);
    }
  }
};

export default router;
