(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-detail"],{"0011":function(t,e,i){"use strict";i.r(e);var n=i("682e"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"0135":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("3b8d")),a=i("2b74"),o=i("8492"),s=n(i("d138")),c=n(i("b19a")),d={components:{empty:s.default,rfImage:c.default},data:function(){return{detail:{},title:null}},onLoad:function(t){this.initData(t)},methods:{initData:function(t){this.title=t.title,uni.setNavigationBarTitle({title:t.title}),this.getConfigList(t.field)},getConfigList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(-1===e.indexOf("protocol")){t.next=5;break}return t.next=3,this.$get("".concat(a.configList),{field:e}).then((function(t){n.detail=t.data})).catch((function(t){console.log(t)}));case 3:t.next=10;break;case 5:if(i=uni.getStorageSync("userInfo"),i){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,this.$get("".concat(o.merchantView),{id:i.merchant_id,field:e}).then((function(t){n.detail=t.data})).catch((function(t){console.log(t)}));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=d},"2b74":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notifyAnnounceView=e.notifyAnnounceIndex=e.wechatConfig=e.configList=e.payCreate=e.advList=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var n="/tiny-shop/v1/common/provinces/index";e.provinceList=n;var r="/tiny-shop/v1/common/collect/create";e.collectCreate=r;var a="/tiny-shop/v1/common/collect/delete";e.collectDel=a;var o="/tiny-shop/v1/common/transmit/create";e.transmitCreate=o;var s="/tiny-shop/v1/common/adv/index";e.advList=s;var c="/tiny-shop/v1/common/config/index";e.configList=c;var d="/tiny-shop/v1/common/pay/create";e.payCreate=d;var l="/tiny-shop/v1/third-party/wechat-js-sdk";e.wechatConfig=l;var u="/tiny-shop/v1/common/notify-announce/index";e.notifyAnnounceIndex=u;var f="/tiny-shop/v1/common/notify-announce/view";e.notifyAnnounceView=f},"2ce0":function(t,e,i){var n=i("5139");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("8e6f6326",n,!0,{sourceMap:!1,shadowMode:!1})},5139:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".empty[data-v-437c4f2f]{background-color:#fff}.empty .empty-content[data-v-437c4f2f]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?20?% 0 %?80?%}.empty .empty-content .empty-content-info[data-v-437c4f2f]{font-size:%?26?%}.empty .empty-content .iconfont[data-v-437c4f2f]{font-size:%?240?%;color:#fa436a}.empty .empty-content-image[data-v-437c4f2f]{width:%?200?%;height:%?200?%}.empty .emptyOnly[data-v-437c4f2f]{position:fixed;left:0;top:0;right:0;bottom:0}",""]),t.exports=e},"571b":function(t,e,i){var n=i("af6f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("3d160407",n,!0,{sourceMap:!1,shadowMode:!1})},"5ed3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"about"},["商城介绍"===t.title?i("v-uni-view",{staticClass:"shop-info"},[i("rf-image",{attrs:{src:t.detail.cover||t.detail.web_logo}}),t.detail.title?i("v-uni-view",[i("v-uni-text",[t._v("商城名称:")]),i("v-uni-text",[t._v(t._s(t.detail.title))])],1):t._e(),t.detail.address_name?i("v-uni-view",[i("v-uni-text",[t._v("联系地址:")]),i("v-uni-text",[t._v(t._s(t.detail.address_name))])],1):t._e(),t.detail.address_details?i("v-uni-view",[i("v-uni-text",[t._v("详细地址:")]),i("v-uni-text",[t._v(t._s(t.detail.address_details))])],1):t._e(),t.detail.mobile?i("v-uni-view",[i("v-uni-text",[t._v("手机号码:")]),i("v-uni-text",[t._v(t._s(t.detail.mobile))])],1):t._e(),t.detail.qq?i("v-uni-view",[i("v-uni-text",[t._v("QQ:")]),i("v-uni-text",[t._v(t._s(t.detail.qq))])],1):t._e()],1):t._e(),"注册协议"===t.title?i("v-uni-view",{staticClass:"shop-info"},[t.detail.protocol_register?i("v-uni-view",[i("v-uni-text",{domProps:{innerHTML:t._s(t.detail.protocol_register)}})],1):t._e(),t.detail.protocol_register?t._e():i("empty",{attrs:{info:"暂无"+t.title}})],1):t._e(),"隐私协议"===t.title?i("v-uni-view",{staticClass:"shop-info"},[t.detail.protocol_privacy?i("v-uni-view",[i("v-uni-text",{domProps:{innerHTML:t._s(t.detail.protocol_privacy)}})],1):t._e(),t.detail.protocol_privacy?t._e():i("empty",{attrs:{info:"暂无"+t.title}})],1):t._e(),"充值协议"===t.title?i("v-uni-view",{staticClass:"shop-info"},[t.detail.protocol_recharge?i("v-uni-view",[i("v-uni-text",{domProps:{innerHTML:t._s(t.detail.protocol_recharge)}})],1):t._e(),t.detail.protocol_recharge?t._e():i("empty",{attrs:{info:"暂无"+t.title}})],1):t._e(),0===t.detail.length?i("empty",{attrs:{info:"暂无"+t.title}}):t._e()],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},6269:function(t,e,i){"use strict";i.r(e);var n=i("0135"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"682e":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("3b8d")),a=i("c4c8"),o={name:"rfRecommend",props:{list:{type:Array,default:function(){return[{},{}]}}},data:function(){return{guessYouLikeList:[]}},mounted:function(){this.initData()},methods:{initData:function(){0===this.list.length?this.getGuessYouLikeList():this.guessYouLikeList=this.list},getGuessYouLikeList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(a.guessYouLikeList),{page:this.page}).then((function(t){e.guessYouLikeList=t.data})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),navTo:function(t,e){e&&uni.navigateTo({url:t})}}};e.default=o},7266:function(t,e,i){"use strict";var n=i("2ce0"),r=i.n(n);r.a},8492:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.merchantIndex=e.merchantView=void 0;var n="/merchants/v1/merchant/view";e.merchantView=n;var r="/merchants/v1/merchant/index";e.merchantIndex=r},"8fe3":function(t,e,i){"use strict";i.r(e);var n=i("e59f"),r=i("0011");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("cc38");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"311bb834",null);e["default"]=s.exports},"9d1a":function(t,e,i){var n=i("b4ae");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("25c852cc",n,!0,{sourceMap:!1,shadowMode:!1})},a61e:function(t,e,i){"use strict";i.r(e);var n=i("ddda"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},af6f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-86af1274]{position:relative;background-color:#f5f5f5}uni-page-body .about .shop-info[data-v-86af1274]{margin:%?100?% 0;text-align:center}uni-page-body .about .shop-info uni-image[data-v-86af1274]{width:%?240?%;height:%?240?%;border-radius:50%}body.?%PAGE?%[data-v-86af1274]{background-color:#f5f5f5}",""]),t.exports=e},af80:function(t,e,i){"use strict";i.r(e);var n=i("5ed3"),r=i("6269");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("c2c5");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"86af1274",null);e["default"]=s.exports},b4ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.rf-floor-index .banner[data-v-311bb834]{width:92%;margin:%?20?% 4% 0}.rf-floor-index .banner uni-image[data-v-311bb834]{width:100%;height:25vw;border-radius:%?20?%;box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.05)}.rf-floor-index .f-header[data-v-311bb834]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?40?% 20% %?20?%}.rf-floor-index .f-header .line[data-v-311bb834]{border-bottom:%?1?% solid rgba(0,0,0,.15);width:%?120?%}.rf-floor-index .f-header .name[data-v-311bb834]{margin:0 %?20?%}.rf-floor-index .hot-floor[data-v-311bb834]{width:100%;overflow:hidden;margin-bottom:%?20?%}.rf-floor-index .hot-floor .floor-img-box[data-v-311bb834]{width:100%;height:%?320?%;position:relative}.rf-floor-index .hot-floor .floor-img-box[data-v-311bb834]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.rf-floor-index .hot-floor .floor-img[data-v-311bb834]{width:100%;height:100%}.rf-floor-index .hot-floor .floor-list[data-v-311bb834]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.rf-floor-index .hot-floor .scoll-wrapper[data-v-311bb834]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.rf-floor-index .hot-floor .floor-item[data-v-311bb834]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.rf-floor-index .hot-floor .floor-item uni-image[data-v-311bb834]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.rf-floor-index .hot-floor .floor-item .price[data-v-311bb834]{color:#fa436a}.rf-floor-index .hot-floor .more[data-v-311bb834]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.rf-floor-index .hot-floor .more uni-text[data-v-311bb834]:first-child{margin-bottom:%?4?%}',""]),t.exports=e},c2c5:function(t,e,i){"use strict";var n=i("571b"),r=i.n(n);r.a},c4c8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cartItemCount=e.cartItemUpdateSku=e.orderProductExpressDetails=e.orderPreview=e.evaluateList=e.orderFreightFee=e.orderPay=e.orderClose=e.orderCreate=e.cartItemUpdateNum=e.cartItemClear=e.cartItemDel=e.cartItemList=e.cartItemCreate=e.productDetail=e.guessYouLikeList=e.productList=e.productCateList=e.productCate=e.indexList=void 0;var n="/tiny-shop/v1/index/index";e.indexList=n;var r="/tiny-shop/v1/product/cate/index";e.productCate=r;var a="/tiny-shop/v1/product/cate/list";e.productCateList=a;var o="/tiny-shop/v1/product/product/index";e.productList=o;var s="/tiny-shop/v1/product/product/view";e.productDetail=s;var c="/tiny-shop/v1/product/product/guess-you-like";e.guessYouLikeList=c;var d="/tiny-shop/v1/member/cart-item/create";e.cartItemCreate=d;var l="/tiny-shop/v1/member/cart-item/index";e.cartItemList=l;var u="/tiny-shop/v1/member/cart-item/count";e.cartItemCount=u;var f="/tiny-shop/v1/member/cart-item/delete-ids";e.cartItemDel=f;var v="/tiny-shop/v1/member/cart-item/clear";e.cartItemClear=v;var p="/tiny-shop/v1/member/cart-item/update-num";e.cartItemUpdateNum=p;var m="/tiny-shop/v1/member/cart-item/update-sku";e.cartItemUpdateSku=m;var h="/tiny-shop/v1/order/order/create";e.orderCreate=h;var b="/tiny-shop/v1/order/order/preview";e.orderPreview=b;var g="/tiny-shop/v1/member/order/close";e.orderClose=g;var x="/tiny-shop/v1/common/pay/create";e.orderPay=x;var y="/tiny-shop/v1/order/order/freight-fee";e.orderFreightFee=y;var w="/tiny-shop/v1/product/evaluate/index";e.evaluateList=w;var _="/tiny-shop/v1/member/order-product-express/details";e.orderProductExpressDetails=_},cc38:function(t,e,i){"use strict";var n=i("9d1a"),r=i.n(n);r.a},d138:function(t,e,i){"use strict";i.r(e);var n=i("f061"),r=i("a61e");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("7266");var o=i("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"437c4f2f",null);e["default"]=s.exports},ddda:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("8fe3")),a={components:{rfRecommend:r.default},props:{src:{type:String,default:"empty"},isRecommendShow:{type:Boolean,default:!0},info:{type:String,default:""},list:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{}};e.default=a},e59f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-floor-index"},[i("v-uni-view",{staticClass:"f-header"},[i("v-uni-view",{staticClass:"line"}),i("v-uni-text",{staticClass:"name"},[t._v("为你推荐")]),i("v-uni-view",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"rf-product-list"},t._l(t.guessYouLikeList.length>0?t.guessYouLikeList:[0,0,0,0],(function(e,n){return i("v-uni-view",{key:n,staticClass:"product-item",on:{click:function(i){i=t.$handleEvent(i),t.navTo("/pages/product/product?id="+e.id,e.id)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.picture,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"sketch"},[t._v(t._s(e.sketch))])],1),e.name?i("v-uni-text",{staticClass:"title clamp in2line"},[t._v(t._s(e.name))]):t._e(),e.name?i("v-uni-view",{staticClass:"last-line"},[i("v-uni-text",{staticClass:"price in1line"},[t._v(t._s(e.price)),e.market_price>e.price?i("v-uni-text",{staticClass:"m-price"},[t._v("¥ "+t._s(e.market_price))]):t._e()],1),i("v-uni-text",{staticClass:"sales in1line"},[i("v-uni-text",{staticClass:"red"},[t._v(t._s(e.sales))]),t._v("付款")],1)],1):t._e()],1)})),1)],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))},f061:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty"},[i("v-uni-view",{staticClass:"empty-content",class:{emptyOnly:!t.isRecommendShow}},[i("i",{staticClass:"iconfont iconnodata-search"}),i("v-uni-text",{staticClass:"empty-content-info"},[t._v(t._s(t.info))])],1),t.isRecommendShow?i("rf-recommend",{staticClass:"recommend",attrs:{list:t.list}}):t._e()],1)},r=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}))}}]);