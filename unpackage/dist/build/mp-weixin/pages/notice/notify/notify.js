(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/notify/notify"],{"95c0":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={wanlEmpty:function(){return n.e("components/wanl-empty/wanl-empty").then(n.bind(null,"e5e5"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,0!=t.dataList.length?t.__map(t.dataList,(function(e,n){var a=t.__get_orig(e),o=t.$flbooth.timeToChat(e.created),r=t.$flbooth.oss(e.image,82,82);return{$orig:a,g0:o,g1:r}})):null);t._isMounted||(t.e0=function(e,n){var a=arguments[arguments.length-1].currentTarget.dataset,o=a.eventParams||a["event-params"];n=o.item;return t.$flbooth.to(n.url)}),t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},b0b7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,o,r,u){try{var i=t[r](u),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(a,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var u=t.apply(e,n);function i(t){r(u,a,o,i,c,"next",t)}function c(t){r(u,a,o,i,c,"throw",t)}i(void 0)}))}}var i={data:function(){return{dataList:[],reload:!1,total:0,current_page:1,last_page:1,status:"more",contentText:{contentdown:" ",contentrefresh:"加载中",contentnomore:""}}},onLoad:function(){this.loadData(),this.$store.commit("statistics/noticec",{notice:0})},onPullDownRefresh:function(){this.current_page=1,this.reload=!0,this.loadData()},onReachBottom:function(){this.current_page>=this.last_page?this.status="noMore":(this.reload=!1,this.current_page=this.current_page+1,this.status="loading",this.loadData())},methods:{loadData:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$api.get({url:"/flbooth/notice/getNoticeList",data:{type:"notice",page:e.current_page},success:function(n){t.stopPullDownRefresh(),e.dataList=e.reload?n.data:e.dataList.concat(n.data),e.total=n.total,e.current_page=n.current_page,e.last_page=n.last_page,e.status=0==n.total?"noMore":"more"}});case 1:case"end":return n.stop()}}),n)})))()}}};e.default=i}).call(this,n("543d")["default"])},b70e:function(t,e,n){"use strict";(function(t){n("e954");a(n("66fd"));var e=a(n("bec8"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},bec8:function(t,e,n){"use strict";n.r(e);var a=n("95c0"),o=n("fada");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var u,i=n("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},fada:function(t,e,n){"use strict";n.r(e);var a=n("b0b7"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a}},[["b70e","common/runtime","common/vendor"]]]);