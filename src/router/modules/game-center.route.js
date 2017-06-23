'use strict';
let router = [{ // 游戏中心首页
  name: 'gameCenter',
  path: '/gameCenter',
  component: function(resolve) {
    require(['../../pages/game-center/game-center.page'], resolve);
  }
}];

export default router;