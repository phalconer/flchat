(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-address/wanl-address"],{"0e5e":function(t,e,a){"use strict";a.r(e);var i=a("b36b"),n=a("da1f");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c484");var s,c=a("f0c5"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},"3d3e":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"WanlAddress",data:function(){return{isShow:!1,isShowMask:!1,dataList:["请选择"],currentIndex:0,cityData:{},cityAreaArray:[],selectIndexArr:[],indicatorStyleLeft:16}},created:function(){var e=this;t.request({url:"".concat(this.$flbooth.config("appurl"),"/flbooth/common/area"),success:function(t){t.data.data.length>0?(e.cityData=t.data.data,e.cityAreaArray.push(t.data.data)):e.$flbooth.msg("数据表area为空，请在后台安装示例服务")}})},mounted:function(){},methods:{show:function(){this.isShow=!0,this.isShowMask=!0},hidden:function(){this.isShow=!1,this.isShowMask=!1},select_top_item_click:function(t){this.currentIndex=t,this.changeIndicator(t)},swiperChange:function(t){var e=t.detail.current;this.currentIndex=e,this.changeIndicator(e)},changeIndicator:function(e){var a=this,i=30,n=t.createSelectorQuery().in(this),r=n.selectAll(".select_top_item .address_value");r.fields({size:!0,scrollOffset:!1},(function(t){var n=10+80*e+t[e]["width"]/2,r=n-i/2;a.indicatorStyleLeft=r})).exec()},address_item_click:function(e,a){var i=this;if(this.selectIndexArr.splice(e,5,a),0===e){var n=this.cityData[a],r=n.name;this.dataList.splice(e,5,r),this.dataList.splice(e+1,0,"请选择"),this.cityAreaArray.splice(e+1,1,n["city"]),setTimeout((function(){i.currentIndex=1,i.changeIndicator(1)}),50)}else{var s=this.cityAreaArray[e],c=s[a],o=c["area"];if(void 0!==o){var d=c.name;this.dataList.splice(e,5,d),this.dataList.splice(e+1,0,"请选择"),this.cityAreaArray.splice(e+1,1,c["area"]),setTimeout((function(){i.currentIndex=e+1,i.changeIndicator(e+1)}),50)}else{var u=c.name;this.dataList.splice(e,1,u),t.request({url:"https://restapi.amap.com/v3/geocode/geo",data:{address:this.dataList.join(""),key:this.$flbooth.config("amapkey")},success:function(t){var e=t.data.geocodes[0];"台湾省"===e.province&&(e.province=i.dataList[0],e.city=i.dataList[1],e.district=i.dataList[2],e.formatted_address=i.dataList.join("")),i.$emit("selectAddress",e),i.isShow=!1,i.isShowMask=!1}})}}}}};e.default=a}).call(this,a("543d")["default"])},b36b:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.dataList,(function(e,a){var i=t.__get_orig(e),n=t.__map(t.cityAreaArray[a],(function(e,i){var n=t.__get_orig(e),r=t.selectIndexArr[a]===i?t.$flbooth.appstc("/common/img_gou3x.png"):null;return{$orig:n,g0:r}}));return{$orig:i,l0:n}})));t.$mp.data=Object.assign({},{$root:{l1:a}})},r=[]},c484:function(t,e,a){"use strict";var i=a("e8b2"),n=a.n(i);n.a},da1f:function(t,e,a){"use strict";a.r(e);var i=a("3d3e"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e8b2:function(t,e,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-address/wanl-address-create-component',
    {
        'components/wanl-address/wanl-address-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0e5e"))
        })
    },
    [['components/wanl-address/wanl-address-create-component']]
]);
