(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/product/list"],{"0231":function(t,a,e){},"205a":function(t,a,e){"use strict";e.r(a);var o=e("fdeb"),s=e("60b2");for(var r in s)"default"!==r&&function(t){e.d(a,t,(function(){return s[t]}))}(r);e("e64a");var n,i=e("f0c5"),l=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],n);a["default"]=l.exports},"27bf":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,a,e,o,s,r,n){try{var i=t[r](n),l=i.value}catch(c){return void e(c)}i.done?a(l):Promise.resolve(l).then(o,s)}function n(t){return function(){var a=this,e=arguments;return new Promise((function(o,s){var n=t.apply(a,e);function i(t){r(n,o,s,i,l,"next",t)}function l(t){r(n,o,s,i,l,"throw",t)}i(void 0)}))}}var i={data:function(){return{shop_id:0,empty:"",WanlScroll:0,scrollStype:!1,filterIndex:0,priceOrder:0,liststyle:"col-2-10",goodsData:[],category:"",params:{search:"",sort:"weigh",order:"asc",page:1,filter:{},op:{}},reload:!1,last_page:0,status:"loading",contentText:{contentdown:"",contentrefresh:"正在加载..",contentnomore:""}}},onLoad:function(t){this.shop_id=t.shop_id,t.category_id?(this.params.filter.shop_category_id=t.category_id,this.params.op.shop_category_id="FIND_IN_SET",t.category_name?this.category="当前店铺类目:"+t.category_name:this.category="搜索店铺商品",this.loadData(),0==this.goodsData.length&&(this.empty="没有查询到“"+this.category+"”的相关宝贝，以下为您推荐猜你喜欢的商品~")):(this.params.filter.shop_id=t.shop_id,this.params.op.shop_id="in",this.category="搜索店铺商品",this.status="more",this.loadData(),0==this.goodsData.length&&(this.empty="暂时没有在店铺内找到任何产品，请搜索查询~"))},onPullDownRefresh:function(){this.params.page=1,this.reload=!0,this.loadData()},onReachBottom:function(){this.params.page>=this.last_page?this.status="noMore":(this.reload=!1,this.contentText.contentdown="上拉显示更多",this.params.page=this.params.page+1,this.status="loading",this.loadData())},onPageScroll:function(t){t.scrollTop>this.WanlScroll?this.scrollStype=!1:this.scrollStype=!0,t.scrollTop<0&&(this.scrollStype=!1),this.WanlScroll=t.scrollTop},methods:{loadData:function(){var a=this;return n(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.$api.get({url:"/flbooth/product/lists",data:a.params,success:function(e){t.stopPullDownRefresh(),a.status=0==e.total?"noMore":"more",a.goodsData=a.reload?e.data:a.goodsData.concat(e.data),a.params.page=e.current_page,a.last_page=e.last_page}});case 1:case"end":return e.stop()}}),e)})))()},tabClick:function(a){this.filterIndex===a&&3!==a||(this.filterIndex=a,this.priceOrder=3===a?1===this.priceOrder?2:1:0,0===a&&(this.params.sort="weigh",this.params.order="asc"),1===a&&(this.params.sort="sales",this.params.order="asc"),2===a&&(this.params.sort="created",this.params.order="asc"),3===a&&1===this.priceOrder&&(this.params.sort="price",this.params.order="asc"),3===a&&2===this.priceOrder&&(this.params.sort="price",this.params.order="desc"),this.status="loading",this.params.page=1,this.reload=!0,this.loadData(),t.pageScrollTo({duration:300,scrollTop:0}))},editListstyle:function(){"col-1-10"==this.liststyle?this.liststyle="col-2-10":this.liststyle="col-1-10"},confirm:function(a){this.category=a.detail.value,this.params.search=a.detail.value,this.params.filter={shop_id:this.shop_id},this.params.op={shop_id:"="},this.reload=!0,this.loadData(),t.pageScrollTo({duration:300,scrollTop:0})}}};a.default=i}).call(this,e("543d")["default"])},"60b2":function(t,a,e){"use strict";e.r(a);var o=e("27bf"),s=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(a,t,(function(){return o[t]}))}(r);a["default"]=s.a},"79c8":function(t,a,e){"use strict";(function(t){e("e954");o(e("66fd"));var a=o(e("205a"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},e64a:function(t,a,e){"use strict";var o=e("0231"),s=e.n(o);s.a},fdeb:function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return o}));var o={wanlEmpty:function(){return e.e("components/wanl-empty/wanl-empty").then(e.bind(null,"e5e5"))},wanlProduct:function(){return e.e("components/wanl-product/wanl-product").then(e.bind(null,"8121"))},uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"1e1f"))}},s=function(){var t=this,a=t.$createElement,e=(t._self._c,t.$flbooth.wanlsys()),o=t.$flbooth.wanlsys(),s=t.$flbooth.wanlsys();t._isMounted||(t.e0=function(a){return t.$flbooth.back(1)}),t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,g2:s}})},r=[]}},[["79c8","common/runtime","common/vendor"]]]);