(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/notice/chat"],{

/***/ 67:
/*!****************************************************************************!*\
  !*** D:/soft/fenglei/code/flshop/main.js?{"page":"pages%2Fnotice%2Fchat"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/notice/chat.vue */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 68:
/*!*********************************************************!*\
  !*** D:/soft/fenglei/code/flshop/pages/notice/chat.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=e4b7b674& */ 69);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 71);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=css& */ 74);
/* harmony import */ var _hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/notice/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/*!****************************************************************************************!*\
  !*** D:/soft/fenglei/code/flshop/pages/notice/chat.vue?vue&type=template&id=e4b7b674& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=e4b7b674& */ 70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_e4b7b674___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 70:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/fenglei/code/flshop/pages/notice/chat.vue?vue&type=template&id=e4b7b674& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.msgList, function(row, index) {
    var $orig = _vm.__get_orig(row)

    var g0 =
      row.type == "chat" &&
      row.to_id == _vm.to_id &&
      row.message.type == "goods"
        ? _vm.$flbooth.oss(row.message.content.image, 100, 0)
        : null
    var l0 =
      row.type == "chat" &&
      row.to_id == _vm.to_id &&
      row.message.type == "order"
        ? _vm.__map(row.message.content.goods, function(item, index) {
            var $orig = _vm.__get_orig(item)

            var g1 = _vm.$flbooth.oss(item.image, 50, 50)
            return {
              $orig: $orig,
              g1: g1
            }
          })
        : null
    var g2 =
      row.type == "chat" && row.to_id == _vm.to_id
        ? _vm.$flbooth.oss(row.form.avatar, 100, 100)
        : null
    var g3 =
      row.type == "chat" && row.to_id == _vm.to_id
        ? _vm.$flbooth.timeToChat(row.created)
        : null
    var g4 =
      row.type == "chat" && !(row.to_id == _vm.to_id)
        ? _vm.$flbooth.oss(row.form.avatar, 100, 100)
        : null
    var g5 =
      row.type == "chat" && !(row.to_id == _vm.to_id)
        ? _vm.$flbooth.timeToChat(row.created)
        : null
    return {
      $orig: $orig,
      g0: g0,
      l0: l0,
      g2: g2,
      g3: g3,
      g4: g4,
      g5: g5
    }
  })

  var g6 =
    _vm.goods && _vm.isGoods
      ? _vm.$flbooth.oss(_vm.goods.image, 100, 100)
      : null

  var l2 = _vm.__map(_vm.goodsData, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var g7 =
      item.goods !== null ? _vm.$flbooth.oss(item.goods.image, 100, 100) : null
    return {
      $orig: $orig,
      g7: g7
    }
  })

  var l4 = _vm.__map(_vm.orderData, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var l3 = _vm.__map(item.goods, function(goods, key) {
      var $orig = _vm.__get_orig(goods)

      var g8 = _vm.$flbooth.oss(goods.image, 100, 100)
      return {
        $orig: $orig,
        g8: g8
      }
    })

    return {
      $orig: $orig,
      l3: l3
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
        g6: g6,
        l2: l2,
        l4: l4
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 71:
/*!**********************************************************************************!*\
  !*** D:/soft/fenglei/code/flshop/pages/notice/chat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbuild_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hbuild/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 72);
/* harmony import */ var _hbuild_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hbuild_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hbuild_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hbuild_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hbuild_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/fenglei/code/flshop/pages/notice/chat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























































































































































































































































































































var _vuex = __webpack_require__(/*! vuex */ 13); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var emotions = __webpack_require__(/*! @/static/json/emotions.json */ 73);var _default = { data: function data() {return { user_id: this.$store.state.user.id, avatar: this.$store.state.user.avatar, username: this.$store.state.user.username, nickname: this.$store.state.user.nickname, to_id: 0, shop_id: 0, shop_name: null, shop_avatar: null, textMsg: '', //????????????
      isHistoryLoading: false, //????????????
      reload: false, current_page: 1, scrollAnimation: false, scrollTop: 0, scrollToView: '', msgList: [], msgImgList: [], goods: null, isGoods: true, goodsData: [], orderData: [], // ????????????
      emptybottom: false, //??????????????????
      //H5????????????
      RECORDER: uni.getRecorderManager(), isVoice: false, voiceTis: '?????? ??????', recordTis: '???????????? ????????????', recording: false, willStop: false, initPoint: { identifier: 0, Y: 0 }, recordTimer: null, recordLength: 0, //????????????????????????
      AUDIO: uni.createInnerAudioContext(), playMsgid: null, VoiceTimer: null, // ????????????
      popupLayerClass: false, // more??????
      hideMore: true, modalName: null, stateText: ["???????????????", "????????????", "?????????", "?????????", "????????????", "???????????????", "????????????"], refundStatusText: ["?????????", "?????????", "?????????", "????????????", "????????????", "????????????"], refundStatusBg: ["", "bg-orange", "bg-red", "bg-green", "bg-grey", "bg-red"], //????????????
      //??????
      TabCur: '??????', hideEmoji: true, emojiList: this.emojiData(), QnUrl: '', Sysmodel: this.$flbooth.wanlsys().model };}, onLoad: function onLoad(option) {var _this = this; // ?????????????????????????????? 1.0.2??????
    if (option.hasOwnProperty('goods')) {this.goods = JSON.parse(option.goods);setTimeout(function () {_this.isGoods = false;}, 5000);} // ??????????????????
    this.$store.commit('chat/setIschat', { notice: false }); // ???????????? 1.0.2?????? ???????????????????????? 
    this.$api.post({ url: '/flbooth/chat/getShopChat', data: { id: option.shop_id, type: 'chat' }, success: function success(res) {_this.to_id = res.user_id;_this.shop_id = res.id; // ???????????????
        _this.shop_name = res.shopname;_this.shop_avatar = res.avatar;_this.$flbooth.title(res.shopname + (res.isOnline == 1 ? '-??????' : '-??????')); // ????????????
        _this.getMsgList(res.user_id);} }); //????????????????????????
    this.AUDIO.onEnded(function (res) {_this.playMsgid = null;}); //??????????????????
    this.RECORDER.onStart(function (e) {_this.recordBegin(e);}); //??????????????????
    this.RECORDER.onStop(function (e) {_this.recordEnd(e);}); // ??????????????????
    uni.$on('onChat', this.onSend);}, // ????????????
  onNavigationBarButtonTap: function onNavigationBarButtonTap() {this.onShop(this.shop_id);}, // ????????????
  onUnload: function onUnload() {this.$store.dispatch('chat/update', { type: 'del', id: this.to_id }); // ??????????????????
    this.$store.commit('chat/setIschat', { notice: true, number: 0 });}, onShow: function onShow() {this.scrollTop = 9999999;}, methods: { getMsgList: function getMsgList(id) {var _this2 = this; // ????????????
      uni.getStorage({ key: 'wanlchat:message_' + id, success: function success(res) {var list = res.data;for (var i = 0; i < list.length; i++) {// ????????????????????????,?????????????????????
            if (list[i].type == 'chat' && list[i].message.type == 'img') {list[i].message.content = _this2.setPicSize(list[i].message.content);_this2.msgImgList.push(list[i].message.content.url);} // ??????????????????????????????????????????
            if (list[i].type == 'chat' && list[i].message.type == 'text') {list[i].message.content.text = _this2.replaceEmoji(list[i].message.content.text);}}_this2.msgList = list; // ???????????????
          _this2.$nextTick(function () {//???????????????????????????
            _this2.scrollTop = 9999;_this2.$nextTick(function () {_this2.scrollAnimation = true;});});} });}, // ??????????????????
    onChat: function onChat(msg) {var _this3 = this;if (msg.type == 'system') {if (msg.msg.type == 'text') {this.addSystemTextMsg(msg);}} else if (msg.type == 'chat') {// ????????????
        if (msg.message.type == 'text') {this.addTextMsg(msg);}if (msg.message.type == 'voice') {this.addVoiceMsg(msg);}if (msg.message.type == 'img') {this.addImgMsg(msg);} // 1.0.2??????
        if (msg.message.type == 'goods') {this.addGoodsMsg(msg);}if (msg.message.type == 'order') {this.addOrderMsg(msg);}} // ????????????
      this.$nextTick(function () {_this3.scrollToView = 'msg' + msg.id;});}, // ??????????????????
    onSend: function onSend(msg) {var _this4 = this;if (msg.form.id == this.to_id) {if (msg.type == 'system') {if (msg.msg.type == 'text') {this.addSystemTextMsg(msg);}} else if (msg.type == 'chat') {// ????????????
          if (msg.message.type == 'text') {this.addTextMsg(msg);}if (msg.message.type == 'voice') {this.addVoiceMsg(msg);}if (msg.message.type == 'img') {this.addImgMsg(msg);}if (msg.message.type == 'goods') {this.addGoodsMsg(msg);}if (msg.message.type == 'order') {this.addOrderMsg(msg);}} // ????????????
        this.$nextTick(function () {_this4.scrollToView = 'msg' + msg.id;});}}, // ????????????
    sendMsg: function sendMsg(content, type) {var lastid = 1;if (this.msgList.length) {lastid = this.msgList[this.msgList.length - 1].id;lastid++;}var data = { id: lastid, type: 'chat', to_id: this.to_id, form: { id: this.user_id, //??????
          avatar: this.avatar, name: this.nickname }, message: { type: type, content: content }, created: parseInt(new Date().getTime() / 1000) }; // ???????????????????????????
      this.onChat(JSON.parse(JSON.stringify(data))); // ????????????
      this.$store.dispatch('chat/update', { type: 'send', data: data, shop: { id: this.shop_id, user_id: this.to_id, name: this.shop_name, avatar: this.shop_avatar } }); // ????????????
      this.$flbooth.send(data);}, // ???????????????????????????
    addTextMsg: function addTextMsg(msg) {msg.message.content.text = this.replaceEmoji(msg.message.content.text);this.msgList.push(msg);}, // ???????????????????????????
    addVoiceMsg: function addVoiceMsg(msg) {this.msgList.push(msg);}, // ???????????????????????????
    addImgMsg: function addImgMsg(msg) {msg.message.content = this.setPicSize(msg.message.content);this.msgImgList.push(msg.message.content.url);this.msgList.push(msg);}, // ??????????????????????????? 1.0.2??????
    addGoodsMsg: function addGoodsMsg(msg) {this.msgList.push(msg);}, addOrderMsg: function addOrderMsg(msg) {this.msgList.push(msg);}, // ?????????????????????????????????
    addSystemTextMsg: function addSystemTextMsg(msg) {this.msgList.push(msg);}, // ????????????
    emojiData: function emojiData() {var groups = {},categories = [],map = {};emotions.forEach(function (emotion) {var cate = emotion.category.length > 0 ? emotion.category : '??????';if (!groups[cate]) {groups[cate] = [];categories.push(cate);}groups[cate].push(emotion);map[emotion.phrase] = emotion.icon;});return { groups: groups, categories: categories, map: map };}, //???????????????????????????
    replaceEmoji: function replaceEmoji(str) {var _this5 = this; // ???????????? ??????   ?????????
      var replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, function (item, index) {return '<img src="' + _this5.emojiList.map[item] + '" width="18rpx">';});return replacedStr.replace(/(\r\n)|(\n)/g, '<br>');}, // ??????tab
    tabSelect: function tabSelect(e) {this.TabCur = e.currentTarget.dataset.id;}, //?????????????????????(????????????????????????)
    loadHistory: function loadHistory(e) {var _this6 = this;if (this.isHistoryLoading) {return;} // ???????????????????????????????????????????????????
      if (this.reload) {return;}this.isHistoryLoading = true; //???????????????????????????????????????????????????
      this.scrollAnimation = false; //??????????????????
      var view_id = this.msgList[0].id; //?????????????????????ID
      //????????????????????????
      this.$api.post({ url: '/flbooth/chat/history', data: { to_id: this.to_id, page: this.current_page }, success: function success(res) {// ????????????
          var list = res.data; // ????????????????????????,?????????????????????
          for (var i = 0; i < list.length; i++) {if (list[i].type == 'chat' && list[i].message.type == 'img') {list[i].message.content = _this6.setPicSize(list[i].message.content);_this6.msgImgList.unshift(list[i].message.content.url);} // ??????????????????????????????????????????
            if (list[i].type == 'chat' && list[i].message.type == 'text') {list[i].message.content.text = _this6.replaceEmoji(list[i].message.content.text);}}list.sort(function (a, b) {return a.modified - b.modified;});_this6.msgList = res.current_page == 1 ? list : list.concat(_this6.msgList); //????????????????????????????????????????????????????????????????????????
          _this6.$nextTick(function () {_this6.scrollToView = 'msg' + view_id;_this6.$nextTick(function () {_this6.scrollAnimation = true; //??????????????????
            });}); // ????????????
          if (res.current_page == res.last_page) {// ????????????????????????????????????
            _this6.reload = true;} else {_this6.current_page = res.current_page + 1;}_this6.isHistoryLoading = false;}, fail: function fail(res) {_this6.isHistoryLoading = false;} });}, //????????????????????????????????????????????????????????????????????????????????????
    setPicSize: function setPicSize(content) {// ????????????????????????????????????????????????????????????????????????????????????????????????????????????aspectFit?????????
      var maxW = uni.upx2px(350); //350?????????????????????????????????
      var maxH = uni.upx2px(350); //350?????????????????????????????????
      if (content.w > maxW || content.h > maxH) {var scale = content.w / content.h;content.w = scale > 1 ? maxW : maxH * scale;content.h = scale > 1 ? maxW / scale : maxH;}return content;}, //????????????(??????+??????)
    showMore: function showMore() {this.isVoice = false;this.hideEmoji = true;if (this.hideMore) {this.hideMore = false;this.openDrawer();} else {this.hideDrawer();}}, // ????????????
    openDrawer: function openDrawer() {this.emptybottom = true;this.popupLayerClass = true;},
    // ????????????
    hideDrawer: function hideDrawer() {var _this7 = this;
      this.emptybottom = false;
      this.popupLayerClass = false;
      setTimeout(function () {
        _this7.hideMore = true;
        _this7.hideEmoji = true;
      }, 150);
    },
    // ??????????????????
    chooseImage: function chooseImage() {
      this.getImage('album');
    },
    //????????????
    camera: function camera() {
      this.getImage('camera');
    },
    //????????? or ??????
    getImage: function getImage(type) {var _this8 = this;
      this.hideDrawer();
      uni.chooseImage({
        sourceType: [type],
        sizeType: ['original', 'compressed'], //?????????????????????????????????????????????????????????
        success: function success(res) {
          _this8.$api.get({
            url: '/flbooth/common/uploadData',
            success: function success(updata) {
              for (var i = 0; i < res.tempFilePaths.length; i++) {
                // ??????????????????
                uni.getImageInfo({
                  src: res.tempFilePaths[i],
                  success: function success(image) {
                    _this8.$api.upload({
                      url: updata.uploadurl,
                      filePath: image.path,
                      name: 'file',
                      formData: updata.storage == 'local' ? null : updata.multipart,
                      success: function success(data) {
                        _this8.sendMsg({ url: data.fullurl, w: image.width, h: image.height }, 'img');
                      } });

                  } });

              }
            } });

        } });

    },
    // ????????????
    showPic: function showPic(message) {
      uni.previewImage({
        indicator: 'none',
        current: message.content.url,
        urls: this.msgImgList });

    },
    // ????????????
    chooseEmoji: function chooseEmoji() {
      this.hideMore = true;
      if (this.hideEmoji) {
        this.hideEmoji = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    //????????????
    addEmoji: function addEmoji(em) {
      this.textMsg += em;
    },
    //????????????????????????????????????ing,???????????????
    textareaFocus: function textareaFocus() {
      this.emptybottom = true;
      this.closeTips();
      if (this.popupLayerClass && this.hideMore == false) {
        this.hideDrawer();
      }
    },
    // ????????????
    textareaBlur: function textareaBlur() {
      this.emptybottom = false;
    },

    // ??????????????????
    sendText: function sendText() {
      this.hideDrawer(); //????????????
      if (!this.textMsg) {
        return;
      }
      var msg = { text: this.textMsg };
      this.sendMsg(msg, 'text');
      this.textMsg = ''; //???????????????
    },
    // ??????????????????
    sendGoods: function sendGoods(data) {
      this.sendMsg(data, 'goods');
      this.closeTips();
      this.hideModal();
    },
    // ??????????????????
    sendOrder: function sendOrder(data) {
      this.sendMsg({ id: data.id, order_no: data.order_no, goods: data.goods, state: data.state }, 'order');
      this.closeTips();
      this.hideModal();
    },
    // ??????????????????
    closeTips: function closeTips() {
      this.isGoods = false;
    },
    // ??????
    complaint: function complaint() {
      this.$flbooth.to("/pages/user/complaint/complaint?id=".concat(this.shop_id, "&type=2"));
      //????????????
      this.hideDrawer();
    },
    // ??????????????????
    browsing: function browsing() {var _this9 = this;
      //????????????
      this.hideDrawer();
      this.$api.post({
        url: '/flbooth/product/getBrowsingToShop',
        data: { shop_id: this.shop_id },
        success: function success(res) {
          _this9.goodsData = res;
          _this9.modalName = 'goods';
        } });

    },
    // ????????????
    order: function order() {var _this10 = this;
      //????????????
      this.hideDrawer();
      this.$api.post({
        url: '/flbooth/order/getOrderListToShop',
        data: { shop_id: this.shop_id },
        success: function success(res) {
          _this10.orderData = res;
          _this10.modalName = 'order';
        } });

    },
    hideModal: function hideModal() {
      this.modalName = null;
    },
    // ????????????
    playVoice: function playVoice(message) {var _this11 = this;
      this.playMsgid = message.id;
      this.AUDIO.src = message.content.url;
      this.$nextTick(function () {
        _this11.AUDIO.play();
      });
    },
    // ????????????
    voiceBegin: function voiceBegin(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.initPoint.Y = e.touches[0].clientY;
      this.initPoint.identifier = e.touches[0].identifier;
      this.RECORDER.start({ format: 'mp3' }); //????????????,
    },
    //????????????UI??????
    recordBegin: function recordBegin(e) {var _this12 = this;
      this.recording = true;
      this.voiceTis = '?????? ??????';
      this.recordLength = 0;
      this.recordTimer = setInterval(function () {
        _this12.recordLength++;
      }, 1000);
    },
    // ???????????????
    voiceCancel: function voiceCancel() {
      this.recording = false;
      this.voiceTis = '?????? ??????';
      this.recordTis = '???????????? ????????????';
      this.willStop = true; //???????????????
      this.RECORDER.stop(); //????????????
    },
    // ?????????(????????????????????????????????????)
    voiceIng: function voiceIng(e) {
      if (!this.recording) {
        return;
      }
      var touche = e.touches[0];
      //??????????????????????????????????????????????????????
      if (this.initPoint.Y - touche.clientY >= uni.upx2px(200)) {
        this.willStop = true;
        this.recordTis = '???????????? ????????????';
      } else {
        this.willStop = false;
        this.recordTis = '???????????? ????????????';
      }
    },
    // ????????????
    voiceEnd: function voiceEnd(e) {
      if (!this.recording) {
        return;
      }
      this.recording = false;
      this.voiceTis = '?????? ??????';
      this.recordTis = '???????????? ????????????';
      this.RECORDER.stop(); //????????????
    },
    //????????????(????????????)
    recordEnd: function recordEnd(e) {var _this13 = this;
      clearInterval(this.recordTimer);
      if (!this.willStop) {
        this.$api.get({
          url: '/flbooth/common/uploadData',
          success: function success(updata) {
            _this13.$api.upload({
              url: updata.uploadurl,
              filePath: e.tempFilePath,
              name: 'file',
              formData: updata.storage == 'local' ? null : updata.multipart,
              success: function success(data) {
                var msg = { length: 0, url: data.fullurl };
                msg.length = _this13.recordLength % 60;
                if (msg.length > 0) {
                  _this13.sendMsg(msg, 'voice');
                }
              },
              fail: function fail(error) {
                _this13.$flbooth.msg(JSON.parse(error.data).msg);
              } });

          } });

      } else {
        console.log('??????????????????');
      }
      this.willStop = false;
    },
    // ????????????/????????????
    switchVoice: function switchVoice() {
      this.hideDrawer();
      this.isVoice = this.isVoice ? false : true;
    },
    discard: function discard() {
      return;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 74:
/*!******************************************************************************************!*\
  !*** D:/soft/fenglei/code/flshop/pages/notice/chat.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbuild_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hbuild_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hbuild_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../hbuild/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../hbuild/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../hbuild/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../hbuild/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=css& */ 75);
/* harmony import */ var _hbuild_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hbuild_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hbuild_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hbuild_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hbuild_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hbuild_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hbuild_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hbuild_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hbuild_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hbuild_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hbuild_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hbuild_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hbuild_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_hbuild_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_hbuild_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_hbuild_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hbuild_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/fenglei/code/flshop/pages/notice/chat.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[67,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/notice/chat.js.map