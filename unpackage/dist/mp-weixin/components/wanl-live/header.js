(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-live/header"],{"1add":function(t,e,n){"use strict";n.r(e);var a=n("ee00"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=o.a},3884:function(t,e,n){"use strict";n.r(e);var a=n("f4c7"),o=n("1add");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("f97d");var r,c=n("f0c5"),i=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"5d43ca90",null,!1,a["a"],r);e["default"]=i.exports},a9ac:function(t,e,n){},ee00:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"wanlLiveHeader",props:{statusBarHeight:{default:0},online:{type:Number,default:0},state:{default:0},isFollow:{type:Boolean,default:!1},userinfo:{type:Object,default:function(){return{}}}},methods:{shopLike:function(){this.$emit("change")},liveBack:function(){t.navigateBack({delta:1})},toShop:function(e){t.navigateTo({url:"/pages/shop/index?id=".concat(e)})},stcOss:function(t){var e=this.$store.state.common.appUrl.oss,n="";return n=t?/^(http|https):\/\/.+/.test(t)?t:e+t:e+"/assets/addons/flbooth/img/common/img_default3x.png",n},numFormat:function(t){return t>9999?(t-t%1e3)/1e4+"万":t}}};e.default=n}).call(this,n("543d")["default"])},f4c7:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.stcOss(t.userinfo.avatar)),a=t.numFormat(t.online);t.$mp.data=Object.assign({},{$root:{m0:n,m1:a}})},u=[]},f97d:function(t,e,n){"use strict";var a=n("a9ac"),o=n.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-live/header-create-component',
    {
        'components/wanl-live/header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3884"))
        })
    },
    [['components/wanl-live/header-create-component']]
]);
