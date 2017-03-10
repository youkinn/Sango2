'use strict';
import Vue from 'vue';

class LoadData {
  constructor(url, options = {}) {
    this.loading = false;
    this.allLoaded = false;
    this.init = false;
    this.list = [];
    this.url = url;
    this.pageIndex = 0;
    this.pageSize = options.pageSize || 10;
    this.parmas = options;
  }

  getList(that, cb) {
    if (this.loading || this.allLoaded) {
      return;
    }
    var parmas = Object.assign({}, { pageIndex: this.pageIndex, pageSize: this.pageSize }, this.parmas);
    this.loading = true;
    Vue.ClientHttp(that).POST(parmas, this.url)
      .then((res) => {
        this.init = true;
        if (res.code === 10000) {
          this.list = this.list.concat(res.result.data);
          var length = res.result.data.length;
          if (length > 0) {
            this.pageIndex++;
          }
          if (length < this.pageSize) {
            this.allLoaded = true;
          }
          if (typeof cb == 'function') cb();

          setTimeout(() => {
            this.loading = false;
          }, 1000);
        }
      });
  }
}

module.exports = LoadData;