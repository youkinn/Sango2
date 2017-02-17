'use strict';
import Vue from 'vue';

class LoadData {
    constructor(options = {}) {
        this.loading = false;
        this.allLoaded = false;
        this.init = false;
        this.list = [];
        this.url = options.url;
        this.pageIndex = 0;
        this.pageSize = options.pageSize || 10;
    }

    getList(that, cb) {
        if (this.loading || this.allLoaded) {
            return;
        }
        this.loading = true;
        Vue.ClientHttp(that).POST({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
        }, this.url)
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
                    setTimeout(()=> {
                        debugger;
                        this.loading = false;
                    }, 1000);
                    if(typeof cb == 'function') cb();
                }
            });
    }
}

module.exports = LoadData;