'use strict';
// 导入我们的请求路径
import httpUrlConfig from '../config/url.config';
(function() {
  // 可以在这里配置是否使用本地的测试环境
  let apiType = 0;

  // 我们封装的组件
  function install(Vue) {
    Vue.http.options.emulateJSON = true;
    Vue.http.options.emulateHTTP = true;

    // 配置整个应用的URL
    let URL = {};
    if (0 === apiType) {
      URL = httpUrlConfig.test;
    }
    else if(1 === apiType) {
      URL = httpUrlConfig.production;
    }

    Vue.ClientHttp = function() {
      let handle;
      // 测试环境的url  手机上访问不到loclhost路径 模拟数据 可能要实时更改
      let testIP = location.hostname;
      let TEST_URL = 'http://' + testIP + ':8002';
      // 生产环境的url
      let PRODUCTION_URL = 'http://interface.baidu.com';  // 根据实际设定
      // 当前请求的url
      let RUNNING_URL = '';

      if (0 === apiType) {
        RUNNING_URL = TEST_URL;
      } else {
        RUNNING_URL = PRODUCTION_URL;
      }

      /*
       * query: 请求的参数 ?a=123
       * subUrl: 是否是在原有的路由基础上拼接的路由
       * independentUrl: 一个完成的路由,即我们不再使用拼接的路由
       */
      function GET(query, subUrl, independentUrl, innerHandle) {
        let url;
        if (handle) {
          handle = innerHandle;
        }

        if (independentUrl) {
          url = independentUrl;
        }
        else if (subUrl) {
          url = RUNNING_URL + subUrl;
        }
        else {
          url = RUNNING_URL
        }
        // 判断是本地还是线上环境
        let option = {
          method: 'GET',
          url: url,
          params: query
        };
        if (0 === apiType) {
          // TODO
        }
        else {
          let subOption = {
            credentials: true
          };
          Object.assign(option, subOption);
        }

        return Vue.http(option)
               .then(successHandler, errorHandler);
      }

      // POST方法
      /*
       * data: 传送给后台的数据
       * subUrl: 是否是在原有的路由基础上拼接的路由
       * independentUrl: 一个完成的路由,即我们不再使用拼接的路由
       */
      function POST(data, subUrl, independentUrl) {
        // 处理请求的路由
        let url;
        if (independentUrl) {
          url = independentUrl;
        }
        else if (subUrl) {
          url = RUNNING_URL + subUrl;
        }
        else {
          url = RUNNING_URL
        }
        // 请求的配置
        let option = {};
        if (0 === apiType) {
          // TODO
        }
        else {
          let subOption = {
            credentials: true
          };
          Object.assign(option, subOption);
        }
        return Vue.http.post(url, data, option)
               .then(successHandler, errorHandler);
      }

      // 处理成功情况
      function successHandler(res) {
        if (typeof res.data == "string") {
          try {
            res.data = JSON.parse(res.data);
          }
          catch (e) {
            console.log(res.data);
            res.data = {
              code: 10001,
              msg: "接口错误"
            };
          }
        }
        if (res.data.code == 20000) {
          //登录失效
          //window.location.href = "/#/error";
        }
        return res.data;
      }

      // 处理失败失败情况
      function errorHandler(res) {
        console.error('数据获取失败!');
        return res || {};
      }

      // 返回本应用中的需要用到的所有的HTTP方法
      return {
        GET: GET,
        POST: POST
      }
    }

    Vue.ClientUrl = URL;
  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function() {
      return install
    })
  } else if (window.Vue) {
    Vue.use(install)
  }

})();

