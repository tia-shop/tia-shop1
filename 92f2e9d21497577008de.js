(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{209:function(t,e,r){var content=r(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("931d01e6",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";var n=r(209);r.n(n).a},212:function(t,e,r){(e=r(33)(!1)).push([t.i,".surah__header[data-v-3942433b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.surah__title[data-v-3942433b]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-3942433b]{width:100%;font-size:1.2rem}.surah__trans[data-v-3942433b]{font-style:italic;line-height:2}.surah__count[data-v-3942433b],.surah__trans[data-v-3942433b]{text-align:right}.surah svg[data-v-3942433b]{fill:var(--text-color)}",""]),t.exports=e},213:function(t,e,r){"use strict";r(21),r(22),r(12),r(55),r(67),r(91),r(111);var n=r(26),o=r(35),c=r(28),l=r(27),d=r(13),f=r(3),v=r(14),h=r(8);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t){Object(c.a)(r,t);var e=_(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"doAddToFavorite",value:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})}},{key:"doRemoveFromfavorite",value:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})}},{key:"findInFavorite",value:function(t){return!!(this.surahFavorite||[]).find((function(e){return e.index===t.index}))}},{key:"getSurahDetailUrl",value:function(t){return"/".concat(t,"/")}},{key:"goToSurahDetail",value:function(t){var path=this.getSurahDetailUrl(t);this.$router.push(path)}},{key:"isAmp",get:function(){return this.source.includes("amp")}}]),r}(v.Vue);Object(f.a)([Object(v.Prop)({default:function(){return[]}})],y.prototype,"surahArray",void 0),Object(f.a)([Object(v.Prop)({type:String,default:""})],y.prototype,"source",void 0),Object(f.a)([h.State],y.prototype,"surahFavorite",void 0),Object(f.a)([h.Action],y.prototype,"addToFavorite",void 0),Object(f.a)([h.Action],y.prototype,"removeFromFavorite",void 0),Object(f.a)([h.Action],y.prototype,"showNotification",void 0);var m=y=Object(f.a)([v.Component],y),x=(r(211),r(5)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},t._l(t.surahArray,(function(e){return r("nuxt-link",{key:e.index,staticClass:"surah block_content has-shadow",attrs:{to:"/"+e.index+"/"},on:{click:function(r){return r.preventDefault(),t.goToSurahDetail(e.index)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(e.index)+"\n      ")]),t._v(" "),r("div",{staticClass:"surah__header--right"},[t.isAmp||t.findInFavorite(e)?t._e():r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){return r.preventDefault(),t.doAddToFavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),!t.isAmp&&t.findInFavorite(e)?r("svg",{staticStyle:{fill:"#f5aa1e!important"},attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){return r.preventDefault(),t.doRemoveFromfavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl",lang:"ar"}},[t._v("\n        "+t._s(e.arabic)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(e.latin)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n      ")])])])})),1)}),[],!1,null,"3942433b",null);e.a=component.exports},229:function(t,e,r){var content=r(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("cd75b5b0",content,!0,{sourceMap:!1})},274:function(t,e,r){"use strict";var n=r(229);r.n(n).a},275:function(t,e,r){(e=r(33)(!1)).push([t.i,".feed[data-v-30d36832]{display:block;width:90%;margin:1em auto;padding-bottom:1em;border-bottom:1px solid #ccc}.feed__title[data-v-30d36832]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:1.5rem}.feed__title svg[data-v-30d36832]{margin-right:.2em}.feed__empty[data-v-30d36832]{text-align:left;padding-top:1em;color:var(--text-color);font-style:italic}",""]),t.exports=e},459:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(12),r(55);var n=r(26),o=r(35),c=r(28),l=r(27),d=r(13),f=r(3),v=r(14),h=r(8),_=r(138),y=r.n(_),m=r(213),x=r(31),j=r(66);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var O=function(t){Object(c.a)(r,t);var e=k(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle(j.a.FAVORITE),this.setPage("favorite")}},{key:"activated",value:function(){this.setHeaderTitle(j.a.FAVORITE),this.setPage("favorite")}},{key:"metaHead",get:function(){var title="Baca berbagai surat favorit dalam Al-Qur'an | Qur'an Web";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"isHaveFav",get:function(){return Object(x.a)(this.surahFavorite)}}]),r}(v.Vue);Object(f.a)([h.State],O.prototype,"settingActiveTheme",void 0),Object(f.a)([h.State],O.prototype,"surahFavorite",void 0),Object(f.a)([h.Mutation],O.prototype,"setHeaderTitle",void 0),Object(f.a)([h.Mutation],O.prototype,"setPage",void 0);var w=O=Object(f.a)([Object(v.Component)({components:{IosStarOutlineIcon:y.a,Surah:m.a}})],O),F=(r(274),r(5)),component=Object(F.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosStarOutlineIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Surat favorit:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveFav?e("Surah",{attrs:{"surah-array":this.surahFavorite,source:"favorite"}}):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum punya surat yang ditandai sebagai favorit.\n      ")])],1)])])}),[],!1,null,"30d36832",null);e.default=component.exports}}]);