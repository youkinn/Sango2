Vue.silents = [ // 静默列表，不显示的错误详细关键词
  'Error when evaluating expression'
];


(function() {
  Vue.warn = Vue.warn || true;

  var style = {
    red: 'color:#A51A0C;',
    blue: 'color:#369;',

    bold: 'font-weight:bold;'
  };

  var error = console.error;

  console.error = function (err) {
    if (!Vue.warn || typeof err !== 'string' || String(err).indexOf('[Vue warn]:') === -1) {
      return error.apply(console, arguments);
    }

    if (Vue.silents) {
      for (var i=0; i < Vue.silents.length; i++) { // 静默列表的内容不显示
        if (err.indexOf(Vue.silents[i]) > -1) {
          return false;
        }
      }
    }

    if (window.chrome) {
      console.log(
        err.replace(/\[Vue warn\]:/, '%c$&%c'),
        style.red + style.bold,
        style.blue
      );
    } else {
      console.warn(err);
    }
  };
})();
