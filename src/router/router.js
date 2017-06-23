'use strict';
// 导入每个模块的路由
import demo from './modules/demo.route';
import home from './modules/home.route';
import personal from './modules/personal.route';
import gameCenter from './modules/game-center.route';

// 整个应用的路由
var route = [];

// 合并路由
route = [...demo, ...home, ...personal, ...gameCenter];

exports.route = route;