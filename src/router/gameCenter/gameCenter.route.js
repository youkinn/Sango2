'use strict';
let router = [{ // 游戏中心首页
  name: 'gameCenter',
  path: '/gameCenter',
  component: function(resolve) {
    require(['../../pages/gameCenter/index.page'], resolve);
  }
}];

export default router;