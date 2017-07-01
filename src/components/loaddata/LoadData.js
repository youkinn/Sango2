'use strict';
import Vue from 'vue';

class LoadData {
  constructor(url, options = {}, method = 'GET') {
    this.loading = false;
    this.allLoaded = false;
    this.init = false;
    this.list = [];
    this.url = url;
    this.page = 1;
    this.limit = options.limit || 10;
    this.parmas = options;
    this.method = method;
  }

  getList(that, cb) {
    if (this.loading || this.allLoaded) {
      return;
    }
    var parmas = Object.assign({}, { page: this.page, limit: this.limit }, this.parmas);
    this.loading = true;
    return Vue.ClientHttp(that)[this.method](parmas, this.url)
      .then((res) => {
        this.init = true;
        this.loading = false;
        if (res.code === 10000) {
          this.list = this.list.concat(res.result);
          var length = res.result.length;
          if (length > 0) {
            this.page++;
          }
          if (length < this.limit) {
            this.allLoaded = true;
          }
          if (typeof cb == 'function') cb.apply(that, [res]);
          return res;
        }
      });
  }
}

module.exports = LoadData;