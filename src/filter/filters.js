'use strict';

import moment from 'moment/moment';
import Timeago from 'timeago.js';

// 字符串的截取
export const substr = function(value, length, modifier) {
  var output,innerModifier;
  innerModifier = modifier || '';
  output = value + '';
  if(output.length > length) {
    output = output.substring(0, length);
    output += innerModifier;
  }
  return output;
};

// 日期转换
export const formatDate = function(value, style) {
  var innerValue;
  innerValue = +(value || 0);
  return moment(new Date(innerValue)).format(style);
};

// 字符串的截取,向前截取
export const foreSubstr = function(value, length, modifier) {
  var output,innerModifier,len;
  innerModifier = modifier || '';
  output = value + '';
  len = output.length;
  if(len > length) {
    output = output.substring(len - length, len);
    output = innerModifier + output;
  }
  return output;
};

// 字符串的截取（指定字符数）
export const substrByChar = function(value, limit, modifier, dir = 1) {
  let len = 0;
  for (var i = 0; i < value.length; i++) {
    let length = value.charCodeAt(i);
    if (length >= 0 && length <= 128) {
      len += 1;
    } else {
      len += 2;
    }
    if(len > limit){
      break;
    }
  }
  if(dir == 1){
    return value.substring(0, i) + modifier;
  }
  return modifier + value.substring(0, i);
};

/**
 * formatDateToTimeago 日期转换：将datetime时间转化成类似于***的时间描述字符串
 * @param  {string} value: datetime
 * @return {string} 刚刚/12秒前/3分钟前/2小时前/4天前/3周前/6月前/3年前 or 12秒后/3分钟后/2小时后/24天后/6月后/3年后
 */
export const formatDateToTimeago = function(value) {
  if(value == '') return '';
  return new Timeago().format(value, 'zh_CN');
};
