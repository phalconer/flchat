(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wanl-find/video"],{"0407":function(t,e,i){"use strict";i.r(e);var n=i("d024"),o=i("7d51");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("9a5a");var u,r=i("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"1c315510",null,!1,n["a"],u);e["default"]=d.exports},"1b7b":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{videoId:{type:Number,default:0},src:{type:String,default:""},play:{type:Boolean,default:!1},height:{type:Number,default:0},width:{type:Number,default:0},objectFit:{type:String,default:"cover"},coverUrl:{type:String,default:""},initialTime:{type:Number,default:0},gDuration:{type:Number,default:999}},data:function(){return{videoFit:"cover",time:0,duration:0,OpenCover:!0,initialize:!1,videoTimer:null}},mounted:function(){var e=this;this.videoFit=this.objectFit;var i="video".concat(this.videoId);this.videoContext=t.createVideoContext(i,this),setTimeout((function(){e.videoContext.play()}),10)},methods:{continuePlay:function(){var t=this;this.initialize||setTimeout((function(){t.initialize=!0,t.videoPlay()}),100)},timeupdate:function(t){},videoPlay:function(){var t=this;this.videoTimer&&clearTimeout(this.videoTimer),this.videoTimer=setTimeout((function(){t.play?(t.videoContext.play(),t.OpenCover=!1):t.videoContext.pause()}))}},watch:{play:function(t,e){this.initialize&&this.videoPlay()},gDuration:{immediate:!0,handler:function(t,e){this.duration=t}}},computed:{barWidth:function(){var t=this.time/this.duration*parseInt(this.width);return"".concat(t,"px")}}};e.default=i}).call(this,i("543d")["default"])},"328c":function(t,e,i){},"7d51":function(t,e,i){"use strict";i.r(e);var n=i("1b7b"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"9a5a":function(t,e,i){"use strict";var n=i("328c"),o=i.n(n);o.a},d024:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wanl-find/video-create-component',
    {
        'components/wanl-find/video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0407"))
        })
    },
    [['components/wanl-find/video-create-component']]
]);
