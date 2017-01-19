(function(){
	var mallUtils = {
		screen:{
			width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		},
		interfaceApi: 'http://api.mall.com/',
		regs:{
			mobile: /^1\d{10}$/
		}
	};

	//客户端检测
	
	var device = function(){
		function deviceDetect(needle) {
		    needle = needle.toLowerCase();
		    return navigator.userAgent.toLowerCase().indexOf(needle) !== -1;
		}
		function getVersion(nece) {
		    var arr = nece.split('.');
		    return parseFloat(arr[0] + '.' + arr[1]);
		}
        var ua = navigator.userAgent.toLowerCase();
        return {
            isWindows: /windows/.test(ua),
            isIOS: deviceDetect('iPhone') || deviceDetect('iPad') || deviceDetect('iPod'),
            isAndroid: deviceDetect('Android'),
            isUCBrowser: deviceDetect('UCBrowser'),
            isQQBrowser: deviceDetect('MQQBrowser'),
            isSafari:/.*version\/([\w.]+).*(safari).*/.test(ua),
            isWeixin: deviceDetect('MicroMessenger'),
            qqBrowserVersion: this.isQQBrowser ? getVersion(ua.split('mqqbrowser/')[1]) : 0,
            ucBrowserVersion: this.isUCBrowser ? getVersion(ua.split('ucbrowser/')[1]) : 0,
            iosVersion: this.isIOS ? parseInt(ua.match(/\s*os\s*\d/gi)[0].split(' ')[2], 10) : 0
        };
    }
	mallUtils.device = device();

	/* 常用方法 */
	mallUtils.funs = {
		preventDefault:function(ev){
			//阻止冒泡 默认事件
			ev.preventDefault && ev.preventDefault();
        	ev.stopPropagation && ev.stopPropagation();
        	return false;
		},
		unTouchMove:function(){
			/* 禁止滚屏 */
			document.addEventListener('touchmove',this.preventDefault, false);
		},
		activeTouchMove:function(){
			/* 恢复滚屏 */
			document.removeEventListener('touchmove',this.preventDefault, false);
		},
		scroll:function(callback){
			//监听窗口滚动事件
			if(callback && typeof callback === 'function') {
				window.addEventListener("scroll",callback);
			}
		},
		unscroll:function(callback){
			//解除窗口滚动事件
			window.removeEventListener("scroll",callback);
		}
	}

	/* 弹框 */
	mallUtils.layer = {
		err:function(text, time){
			//错误提示框
			layer.open({
			    content: text,
			    skin: 'msg',
			    time: time || 2
			});
		},
		alert:function(content,time,endcallback){
			//提示框自动消失
			layer.open({
			    content: content,
			    skin: 'msg',
			    time: time || 2,
			    end: endcallback
			});
		},
		confirm:function(content,yesCallback,cancelCallback){
			//确认框
			var _content = [];
			if(!!!content) {
				return false;
			}
			if(content.indexOf('&') === -1){
				_content[0] = content;
			}
			else{
				_content = content.split('&');
			}

			//成功提示框
			var _html = '';
			_html	+=		'<p class="layer-text">';
			_content.forEach(function(item){
				_html	+=		'<span class="layer-text">'+ item +'</span>';
			});
			_html	+=		'</p>';

			layer.open({
				className: 'layer-no-yes',
			    content: content,
			    btn: ['确认', '取消'],
			    shadeClose: false,
			    yes: function(){
			        layer.closeAll();
			    	mallUtils.funs.activeTouchMove();
			    	if(!!yesCallback && typeof yesCallback === 'function') {
			    		return yesCallback();
			    	}
			    }, no: function(){
			        layer.closeAll();
			    }
			});
		},
		yes:function(content,callback){
			var _content = [];
			if(!!!content) {
				return false;
			}
			if(content.indexOf('&') === -1){
				_content[0] = content;
			}
			else{
				_content = content.split('&');
			}

			//成功提示框
			var _html = '';
			_html	+=		'<p class="layer-text">';
			_content.forEach(function(item){
				_html	+=		'<span class="layer-text">'+ item +'</span>';
			});
			_html	+=		'</p>';
			//成功提示框
			layer.open({
				className: 'layer-yes',
			    content: _html,
			    shadeClose: false,
			    btn:['确定'],
			    yes:function(){
			    	layer.closeAll();
			    	mallUtils.funs.activeTouchMove();
			    	if(!!callback && typeof callback === 'function') {
			    		return callback();
			    	}
			    }
			})
		}
	};

	/* 请求 */
	mallUtils.http = {
		get: function(opt, successCallback){
			// if(!!!opt) {
			// 	return mallUtils.layer.err("请求参数错误")
			// }
			// if(!!!opt.method || opt.method === '') {
			// 	console.error(opt);
			// 	return mallUtils.layer.err("接口参数错误")
			// }
			
			//opt.openid = userInfo.openid;

			Vue.http
			.get(mallUtils.interfaceApi, opt)
			.then(function (res) {
		      	var data = res.data;
		      	if(data.code === 10000) {
		      		//console.log(data.return);
		      		return successCallback(data.return || {})
		      	}
		      	else{
					return mallUtils.layer.err(data.msg)
		      	}
		      }, function (res, data, status) {
		          mallUtils.layer.err("服务器繁忙")
		    });

		},
		weixin: function(successCallback){
			Vue.http
			.get('微信信息接口',{ url: location.href})
			.then(function (res) {
		      	var data = res.data;
		      	successCallback(data);
		      	
		      }, function (res, data, status) {
		          mallUtils.layer.err("服务器繁忙")
		    });
		}
	};

	//微信
	mallUtils.weixin = {
		init:function(callback){
			mallUtils.http.weixin(function(res){
				wx.config({
					debug: false,
				    appId: res.appId, // 必填，公众号的唯一标识
				    timestamp: res.timestamp, // 必填，生成签名的时间戳
				    nonceStr: res.nonceStr, // 必填，生成签名的随机串
				    signature: res.signature,// 必填，签名，见附录1
				    jsApiList: [	// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				    	'onMenuShareTimeline',
		                'onMenuShareAppMessage',
		                'onMenuShareQQ',
		                'onMenuShareWeibo',
		                'hideMenuItems',
		                'showMenuItems',
		                "chooseImage",
				        "previewImage",
				        "uploadImage",
				        "downloadImage",
				        "chooseWXPay"
				    ] 
				});

				wx.ready(function(){
					!!callback && (typeof callback === "function") && callback();
				});

				wx.error(function(res){
					console.log(JSON.stringify(res));
				});
			});

			
		},
		share:function(opts){
			var _opts = opts || {};
		    _opts.icon = _opts.icon || 'http://res2.caiguo.com/images/logo.jpg';
		    _opts.link = _opts.link || 'http://m.igapper.com';
		    _opts.title= _opts.title || "间隔年，遇见真实的自己";
		    _opts.desc = _opts.desc || "间隔年，闻见自由的味道，遇见真实的自己";
 			
 			//console.log("分享："+ JSON.stringify(_opts));

			wx.onMenuShareTimeline({
			    title: 	_opts.title, // 分享标题
			    link: 	_opts.link, // 分享链接
			    imgUrl: _opts.icon, // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			        mallUtils.layer.alert("分享成功");
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			        //mallUtils.layer.alert("分享已取消");
			    }
			});
			
		
			//分享给朋友
	        wx.onMenuShareAppMessage({
	            title: 	_opts.title, // 分享标题
			    desc: 	_opts.desc, // 分享描述
			    link: 	_opts.link, // 分享链接
			    imgUrl: _opts.icon, // 分享图标
			    type: '', // 分享类型,music、video或link，不填默认为link
			    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	            success: function () {
	               mallUtils.layer.alert("分享成功");
	            },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			        //mallUtils.layer.alert("分享已取消");
			    }
	        });

	        //分享到QQ
	        wx.onMenuShareQQ({
	            title: 	_opts.title, // 分享标题
			    desc: 	_opts.desc, // 分享描述
			    link: 	_opts.link, // 分享链接
			    imgUrl: _opts.icon, // 分享图标
	            success: function () { 
	               mallUtils.layer.alert("分享成功");
	            },
	            cancel: function () { 
	               // 用户取消分享后执行的回调函数
	               //mallUtils.layer.alert("分享已取消");
	            }
	        });
		},
		chooseImage:function(){
			//从相册中选择
			this.init(function(){
				wx.chooseImage({
				    count: 1, // 默认9
				    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
				    success: function (res) {
				        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
				        wx.uploadImage({
						    localId:  localId, // 需要上传的图片的本地ID，由chooseImage接口获得
						    isShowProgressTips: 1, // 默认为1，显示进度提示
						    success: function (res) {
						        var serverId = res.serverId; // 返回图片的服务器端ID
						        window.userInfo.user_avator = serverId;
						        return serverId;
						    }
						});
				    }
				});
			})
		}
	}

	//时间格式
	mallUtils.date = {
		format:function(dateStr,fmt){
			var d = "";
			if(arguments.length == 1){
			    fmt = dateStr;
			    d = new Date();
			}
			else{
			    d = new Date(dateStr);
			}
			  var o = {   
			    "M+" : d.getMonth()+1,                 //月份   
			    "d+" : d.getDate(),                    //日   
			    "h+" : d.getHours(),                   //小时   
			    "m+" : d.getMinutes(),                 //分   
			    "s+" : d.getSeconds(),                 //秒   
			    "S"  : d.getMilliseconds()             //毫秒   
			  };   
			  if(/(y+)/.test(fmt)){
			    fmt=fmt.replace(RegExp.$1, (d.getFullYear()+"").substr(4 - RegExp.$1.length)); 
			  }
			  for(var k in o){
			     if(new RegExp("("+ k +")").test(fmt)){
			        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
			     }
			  }
			  return fmt;   
		}
	}
	window.mallUtils = mallUtils;
})()










