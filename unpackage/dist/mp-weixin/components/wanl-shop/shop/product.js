(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-shop/shop/product"],{"5b4e":function(t,a,e){"use strict";e.r(a);var r=e("9ace"),n=e("afe8");for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);e("f6bf");var s,o=e("f0c5"),u=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);a["default"]=u.exports},"9ace":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return r}));var r={wanlProduct:function(){return e.e("components/wanl-product/wanl-product").then(e.bind(null,"8121"))},wanlEmpty:function(){return e.e("components/wanl-empty/wanl-empty").then(e.bind(null,"e5e5"))},uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"1e1f"))}},n=function(){var t=this,a=t.$createElement;t._self._c},i=[]},afe8:function(t,a,e){"use strict";e.r(a);var r=e("fc1a"),n=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(a,t,(function(){return r[t]}))}(i);a["default"]=n.a},f4c4:function(t,a,e){},f6bf:function(t,a,e){"use strict";var r=e("f4c4"),n=e.n(r);n.a},fc1a:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function i(t,a,e,r,n,i,s){try{var o=t[i](s),u=o.value}catch(c){return void e(c)}o.done?a(u):Promise.resolve(u).then(r,n)}function s(t){return function(){var a=this,e=arguments;return new Promise((function(r,n){var s=t.apply(a,e);function o(t){i(s,r,n,o,u,"next",t)}function u(t){i(s,r,n,o,u,"throw",t)}o(void 0)}))}}var o={name:"flboothProduct",props:{tabbarHeight:{type:Number,default:0},windowHeight:{type:Number,default:0},tabId:{type:String,default:""},option:{type:Object,default:function(){return{}}}},data:function(){return{filterIndex:0,priceOrder:0,listStyle:"col-2-10",dataList:[],empty:"",params:{search:"",sort:"weigh",order:"asc",page:1,filter:{},op:{},type:"goods"},last_page:1,status:"loading",contentText:{contentdown:"下拉加载更多",contentrefresh:"疯狂加载中...",contentnomore:""}}},mounted:function(){"goods"===this.tabId&&this.initialize(this.tabId)},methods:{initialize:function(t){this.params.type="groups"===t?"groups":"goods",this.option.category_id?(this.params.filter.shop_category_id=this.option.category_id,this.params.op.shop_category_id="FIND_IN_SET",this.loadData(),0===this.dataList.length&&(this.empty="没有查询到相关宝贝，以下为您推荐猜你喜欢的商品~")):(this.params.filter.shop_id=this.option.shop_id,this.params.op.shop_id="in","news"===t&&(this.params.sort="created"),this.loadData(),0===this.dataList.length&&(this.empty="暂时没有在店铺内找到任何产品，请搜索查询~"))},loadData:function(t){var a=this;return s(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.status="loading","upper"!==t){e.next=5;break}a.params.page=1,e.next=12;break;case 5:if("lower"!==t){e.next=12;break}if(!(a.params.page>=a.last_page)){e.next=11;break}return a.status="noMore",e.abrupt("return",!1);case 11:a.params.page+=1;case 12:return e.next=14,a.$api.get({url:"/flbooth/product/lists",loadingTip:"加载中...",data:a.params,success:function(e){a.dataList="lower"===t?a.dataList.concat(e.data):e.data,a.params.page=e.current_page,a.last_page=e.last_page,e.current_page===e.last_page||0===e.total?a.status="noMore":a.status="more"}});case 14:case"end":return e.stop()}}),e)})))()},handleUpper:function(){},handleLower:function(){this.loadData("lower")},handleListStyle:function(){"col-1-10"==this.listStyle?this.listStyle="col-2-10":this.listStyle="col-1-10"},handleBarTab:function(a){this.filterIndex===a&&3!==a||(this.filterIndex=a,this.priceOrder=3===a?1===this.priceOrder?2:1:0,0===a&&(this.params.sort="weigh",this.params.order="asc"),1===a&&(this.params.sort="sales",this.params.order="asc"),2===a&&(this.params.sort="created",this.params.order="asc"),3===a&&1===this.priceOrder&&(this.params.sort="price",this.params.order="asc"),3===a&&2===this.priceOrder&&(this.params.sort="price",this.params.order="desc"),this.status="loading",this.params.page=1,this.loadData(),t.pageScrollTo({duration:300,scrollTop:0}))}},watch:{tabId:function(t,a){"news"!==t&&"groups"!==t||(this.dataList=[],this.initialize(t))}}};a.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-shop/shop/product-create-component',
    {
        'components/wanl-shop/shop/product-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5b4e"))
        })
    },
    [['components/wanl-shop/shop/product-create-component']]
]);
