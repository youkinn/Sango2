'use strict';
// 导入每个模块的路由
import demo from './demo/demo.route';
import home from './home/home.route';
import personal from './personal/personal.route';
import gameCenter from './gameCenter/gameCenter.route';

// 整个应用的路由
var route = [];

// 合并路由
route = [...demo, ...home, ...personal, ...gameCenter];

exports.route = route;