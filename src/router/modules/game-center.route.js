'use strict';
let router = [{ // 游戏中心首页
  name: 'gameCenter',
  path: '/gameCenter',
  component: function(resolve) {
    require.ensure([],
        () => {
          resolve(require('../../pages/game-center/game-center.page'));
        },
        'gameCenter'
      );
  }
}];

export default router;