(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/auth/validcode"],{"259b":function(t,e,i){"use strict";(function(t){i("e954");n(i("66fd"));var e=n(i("2a7d"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"2a7d":function(t,e,i){"use strict";i.r(e);var n=i("68d0"),o=i("ada6");for(var c in o)"default"!==c&&function(t){i.d(e,t,(function(){return o[t]}))}(c);i("5b8e");var s,u=i("f0c5"),r=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports},"5b8e":function(t,e,i){"use strict";var n=i("dd61"),o=i.n(n);o.a},"68d0":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={wanlKeyboard:function(){return i.e("components/wanl-keyboard/wanl-keyboard").then(i.bind(null,"1ded"))}},o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.keyboardVisible=!1})},c=[]},"87bd":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{config:{count:[{index:1,key:"valid-code-input-1"},{index:2,key:"valid-code-input-2"},{index:3,key:"valid-code-input-3"},{index:4,key:"valid-code-input-4"},{index:5,key:"valid-code-input-5"},{index:6,key:"valid-code-input-6"}]},keyboardVisible:!0,currentFocus:1,mobile:"",code:[],style:{inputWidth:"40upx",inputHeight:"100upx"},countdown:60,cTimer:null,event:"",pageroute:""}},onLoad:function(t){this.mobile=t.mobile,this.event=t.event,this.pageroute=t.url,this.sendMessage(),this.startTimer()},methods:{inputCode:function(t){this.code[this.currentFocus-1]=t,6==this.currentFocus&&this.login(),this.currentFocus<=6&&this.currentFocus++},login:function(){var e=this;t.showLoading(),"resetpwd"==this.event&&(this.$flbooth.to("resetpwd?mobile=".concat(this.mobile,"&captcha=").concat(this.code.join(""),"&url=").concat(this.pageroute)),t.hideLoading()),this.event,"mobilelogin"==this.event&&this.$api.post({url:"/flbooth/user/mobilelogin",data:{mobile:this.mobile,captcha:this.code.join(""),client_id:t.getStorageSync("flbooth:chat_client_id")?t.getStorageSync("flbooth:chat_client_id"):null},success:function(i){t.hideLoading(),e.$store.dispatch("user/login",i),e.$store.dispatch("cart/login"),t.reLaunch({url:decodeURIComponent(e.pageroute)})}}),"register"==this.event&&this.$api.post({url:"/flbooth/user/register",data:{mobile:this.mobile,captcha:this.code.join(""),client_id:t.getStorageSync("flbooth:chat_client_id")?t.getStorageSync("flbooth:chat_client_id"):null},success:function(i){t.hideLoading(),e.$store.dispatch("user/login",i),e.$store.dispatch("cart/login"),e.$store.dispatch("chat/get"),t.reLaunch({url:decodeURIComponent(e.pageroute)})}}),this.currentFocus=0,this.code=[]},deleteCode:function(){this.currentFocus--,this.code.splice(-1,1)},emptyCode:function(){this.code=[],this.currentFocus=0},hanldeOpenKeyboard:function(){this.keyboardVisible=!0},sendMessage:function(){var t=this;this.$api.get({url:"/flbooth/sms/send",data:{event:this.event,mobile:this.mobile},loadingTip:"验证码发送中...",success:function(e){t.$flbooth.msg("验证码发送成功")}})},startTimer:function(){var t=this;null==this.cTimer&&(this.cTimer=setInterval((function(){t.countdown--,0==t.countdown&&t.clearTimer()}),1e3))},clearTimer:function(){clearInterval(this.cTimer),this.cTimer=null},resend:function(){this.startTimer(),this.code=[],this.currentFocus=0,this.countdown=60,this.sendMessage()}}};e.default=i}).call(this,i("543d")["default"])},ada6:function(t,e,i){"use strict";i.r(e);var n=i("87bd"),o=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=o.a},dd61:function(t,e,i){}},[["259b","common/runtime","common/vendor"]]]);