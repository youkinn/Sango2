'use strict';
// 导入每个模块的路由
import home from './home/home.route';
import demo from './demo/demo.route';
import personal from './personal/personal.route';
import gameCenter from './gameCenter/gameCenter.route';

// 整个应用的路由
var route = {};

// 合并路由
Object.assign(route, demo);
Object.assign(route, home);
Object.assign(route, personal);
Object.assign(route, gameCenter);

exports.route = route;
