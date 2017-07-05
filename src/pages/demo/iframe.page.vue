<template>
  <div class="container">
    <iframe :style="payIframeStyle" v-if="false" :src="iframeUrl" class="PAY_IFRAME" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeUrl: 'https://mapi.alipay.com/gateway.do?_input_charset=utf-8&body=60%E9%92%BB%E7%9F%B3&goodsType=4&it_b_pay=10&notify_url=http%3A%2F%2Finterface.lly800.com%2FOrder%2FPayCallback%2Falipay_notify_url%2F&out_trade_no=921512424299&partner=2088421499757105&payment_type=1&return_url=http%3A%2F%2F1.lly800.com%2Fstatic%2Fpages%2Falipay-complete.html&seller_id=2088421499757105&service=alipay.wap.create.direct.pay.by.user&show_url=http%3A%2F%2F1.lly800.com%2Fstatic%2Fpages%2Falipay-cancel.html&subject=%E6%B7%98%E6%B8%B8%E5%8A%A9%E6%89%8B-%E6%B8%B8%E6%88%8F%E5%85%85%E5%80%BC&total_fee=6.00&sign=89e2c90ad60fa81f92ec5d69a7ecae20&sign_type=MD5',
      viewport: $('meta[name=viewport]').attr('content'),
      dpr: window.devicePixelRatio
    };
  },
  methods: {
    iframeLoaded() {
      console.log('iframe loaded');
    }
  },
  created() {
    // debugger;
    console.log(this.$store.user);
    
    console.log(this.viewport);
    console.log(this.dpr);
     // 修正dpr;
    let meta = $('meta[name=viewport]')[0];
    let html = $('html')[0];
    meta.setAttribute('content', 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    html.setAttribute('data-dpr', 1);
    /* eslint no-undef: 0*/
    lib.flexible.refreshRem();
  },
  mounted(){
    debugger;
    console.log(this.$store.user);
  },
  deactivated(){

  }
};
</script>

<style>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
}

.PAY_IFRAME {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 66;
  width: 100%;
  height: 100%;
}
</style>
