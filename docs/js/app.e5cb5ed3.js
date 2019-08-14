(function(e){function t(t){for(var a,s,r=t[0],c=t[1],p=t[2],u=0,l=[];u<r.length;u++)s=r[u],o[s]&&l.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/simple-drumpad/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0659":function(e,t,n){},"06ee":function(e,t,n){},1244:function(e,t,n){e.exports=n.p+"media/100.0d88fa18.mp3"},"130f":function(e,t,n){"use strict";var a=n("a891"),o=n.n(a);o.a},"19b0":function(e,t,n){e.exports=n.p+"media/83.0fdb3f0f.wav"},"1a47":function(e,t,n){e.exports=n.p+"media/186.6123a801.wav"},"1ab3":function(e,t,n){e.exports=n.p+"media/84.65b2cf47.wav"},"302f":function(e,t,n){e.exports=n.p+"media/87.580c2d4e.wav"},3964:function(e,t,n){e.exports=n.p+"media/76.89b8a1fe.wav"},4180:function(e,t,n){"use strict";var a=n("0659"),o=n.n(a);o.a},"4ab4":function(e,t,n){var a={"./bkp/65.wav":"c35e","./bkp/68.wav":"b1df","./bkp/70.wav":"bae7","./bkp/75.wav":"6e47","./bkp/83.wav":"19b0","./mid/186.wav":"1a47","./mid/65.wav":"e877","./mid/68.wav":"d828","./mid/70.wav":"f236","./mid/71.wav":"6c6a","./mid/72.wav":"7456","./mid/74.wav":"cf14","./mid/75.wav":"7e3e","./mid/76.wav":"3964","./mid/83.wav":"a0b2","./numpad/100.mp3":"1244","./numpad/97.mp3":"dc12","./numpad/98.mp3":"69a2","./numpad/99.mp3":"ea6e","./top/69.wav":"c758","./top/73.wav":"c0ed","./top/79.wav":"83fd","./top/80.wav":"ae3a","./top/81.wav":"8d3c","./top/82.wav":"abc4","./top/84.wav":"1ab3","./top/85.wav":"d93f","./top/87.wav":"302f","./top/89.wav":"74f1"};function o(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id="4ab4"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"drumpad-background"},[n("div",{staticClass:"container",attrs:{id:"drumpad"}},[n("ConfigPanel"),n("Loops"),n("Pads"),n("ControlsInfo"),n("Audios")],1)])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"config-panel"}},[n("span",{staticClass:"custom-dropdown"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]},e.onSelectChange]}},e._l(e.options,function(t,a){return n("option",{key:a},[e._v("\n        "+e._s(t)+"\n      ")])}),0)]),n("input",{staticClass:"btnControls",attrs:{type:"button",value:"ⓘ Controls",id:"btnControls"},on:{click:e.toggleInfos}})])},r=[],c={name:"ConfigPanel",data:function(){return{selected:"Hip Hop",options:["Hip Hop","Jazz"]}},methods:{toggleInfos:function(){F.$emit("toggleInfos",!0)},onSelectChange:function(){F.$emit("genreChanged",this.selected)}}},p=c,d=(n("b852"),n("2877")),u=Object(d["a"])(p,s,r,!1,null,"a764e3c8",null),l=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"loops"}},e._l(e.loops,function(t){return n("div",{key:t.key,staticClass:"loop-empty",attrs:{"data-key":t.key},on:{click:function(n){return e.testFunction(t.key)}}},[e._v("\n        "+e._s(e.defaultMessage)+"\n    ")])}),0)},v=[],m={name:"Loops",data:function(){return{defaultMessage:"Empty loop",loops:[{key:49},{key:50},{key:51},{key:52},{key:53},{key:54},{key:55},{key:56},{key:57},{key:48}]}},methods:{testFunction:function(e){alert(e)}}},y=m,h=(n("4180"),Object(d["a"])(y,f,v,!1,null,"42f912a3",null)),k=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pads"}},[n("div",{staticClass:"wrapper-left"},[e._l(e.firstline,function(t){return n("div",{key:t,staticClass:"pad",class:{playing:e.pressedKeys.includes(t)},attrs:{"data-key":t}})}),e._l(e.secondLine,function(t){return n("div",{key:t,staticClass:"pad",class:{playing:e.pressedKeys.includes(t)},attrs:{"data-key":t}})}),e._l(e.thirdLine,function(t){return n("div",{key:t,staticClass:"pad",class:{playing:e.pressedKeys.includes(t)},attrs:{"data-key":t}})})],2),n("div",{staticClass:"wrapper-right"},e._l(e.rightPads,function(e){return n("div",{key:e,staticClass:"pad",attrs:{"data-key":e}},[n("div",{class:"audio-range range-"+e})])}),0)])},w=[],g=(n("6762"),n("2fdb"),n("57e7"),{name:"Pads",data:function(){return{pressedKeys:[],firstline:[81,87,69,82,84,89,85,73,79,80],secondLine:[65,83,68,70,71,72,74,75,76,186],thirdLine:[90,88,67,86,66,78,77,188,190,191],rightPads:[103,104,105,100,101,102,97,98,99]}},created:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)},methods:{keyDown:function(e){this.isLoopKey(e)?(console.log("Loop clicked"),this.loopClick(e)):this.isNormalKey(e)&&(console.log("Pad clicked"),this.playAudio(e),this.padClick(e))},keyUp:function(e){var t=this.pressedKeys.indexOf(e.keyCode);t>-1&&this.pressedKeys.splice(t,1)},isLoopKey:function(e){return e.keyCode>=48&&e.keyCode<=57},isNormalKey:function(e){return this.firstline.includes(e.keyCode)||this.secondLine.includes(e.keyCode)||this.thirdLine.includes(e.keyCode)||this.rightPads.includes(e.keyCode)},loopClick:function(e){},padClick:function(e){this.pressedKeys.includes(e.keyCode)||this.pressedKeys.push(e.keyCode)},playAudio:function(e){F.$emit("playAudio",e)}}}),C=g,_=(n("cd1b"),Object(d["a"])(C,b,w,!1,null,"722ff057",null)),x=_.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.howToUse?n("div",[n("div",{staticClass:"backgroundDiv",on:{click:e.toggleInfo}}),e._m(0)]):e._e()},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"messagepop pop"},[n("h1",{staticStyle:{"text-align":"center"}},[e._v("Keyboard")]),n("br"),n("span",[n("b",[e._v("0-9:")]),e._v(" Record your loops "),n("span",{staticStyle:{color:"red"}},[e._v(" [In progress...]")])]),n("br"),n("br"),n("span",[n("b",[e._v("(Q-P):")]),e._v(" Hat's "),n("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")])]),n("br"),n("br"),n("span",[n("b",[e._v("(A-;):")]),e._v(" Clap's / Kick's")]),n("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")]),n("br"),n("br"),n("span",[n("b",[e._v("(Z-?):")]),e._v(" Voice's "),n("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")])]),n("br"),n("br"),n("span",[n("b",[e._v("Numpad's (0-9)")]),e._v(" Effect's "),n("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")])]),n("br"),n("span",{staticStyle:{"font-size":"14px",float:"right"}},[e._v("*Press [esc] to clear all loop's.")])])}],O={name:"ControlsInfo",data:function(){return{howToUse:!1}},created:function(){var e=this;F.$on("toggleInfos",function(t){e.howToUse=t})},methods:{toggleInfo:function(){this.howToUse=!this.howToUse}}},H=O,L=(n("130f"),Object(d["a"])(H,K,P,!1,null,"e5b2aea0",null)),j=L.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"audios"}})},S=[],A=(n("ac6a"),n("f3e2"),n("75fc")),E=(n("20d6"),n("759f"),n("d25f"),{hiphop:[{key:65,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Jay.wav"},{key:83,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Dance.wav"},{key:68,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Pop.wav"},{key:70,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - High.wav"},{key:71,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav"},{key:72,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav"},{key:74,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Oldschool.wav"},{key:75,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hard 3.wav"},{key:76,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Dark.wav"},{key:186,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Bass.wav"}],jazz:[]}),T=E;a["a"].mixin({methods:{isNumPadKey:function(e){return e>=97&&e<=105},isNormalKey:function(e){return e>=65&&e<=90||186===e}}});n("5118");var $={name:"Audios",data:function(){return{selectedGenre:"hiphop",audioItems:T,loadedAllPads:!1,topKeys:[69,73,79,80,81,82,84,85,87,89],midKeys:[65,68,70,71,72,74,75,76,83,186],numPadKeys:[97,98,99,100],acitiveLoops:[]}},mounted:function(){this.preLoadSounds()},created:function(){var e=this;F.$on("genreChanged",function(t){switch(t){case"Hip Hop":e.selectedGenre="hiphop";break;case"Jazz":e.selectedGenre="jazz";break}}),F.$on("playAudio",function(t){e.playSoundKey(t.keyCode)})},methods:{playSoundKey:function(e){var t=this.getAudioPath(e),a="numpad"===t?"mp3":"wav",o=n("4ab4")("./".concat(t,"/").concat(e,".").concat(a)),i=new Audio(o);if(i)if(this.loadedAllPads||(i.muted="true"),this.isNormalKey(e))i.play();else if(this.isNumPadKey(e)&&this.loadedAllPads){var s=this.acitiveLoops.filter(function(t){return t.key===e})[0];s?this.stopLoop(e,s.sound):this.startLoop(e,i)}},startProgress:function(e,t){var n=this,a=document.getElementsByClassName("range-".concat(e))[0];t.addEventListener("timeupdate",function(){var o=t.currentTime,i=Math.min(10/t.duration*o*10,100);a.style.width=i+"%",i>=98&&(console.log("stoped all"),i=0,t.pause(),t.currentTime=0,t.play(),n.resetProgress(t,a));var s=n.acitiveLoops.some(function(t){return t.key===e});s||(n.resetProgress(t,a),t.pause())})},resetProgress:function(e,t){t.style.width=0},startLoop:function(e,t){var a=this.getAudioPath(e),o="numpad"===a?"mp3":"wav",i=n("4ab4")("./".concat(a,"/").concat(e,".").concat(o));t=new Audio(i);this.acitiveLoops.push({key:e,sound:t}),this.startProgress(e,t),t.play()},stopLoop:function(e,t){t.pause(),this.acitiveLoops.splice(this.acitiveLoops.findIndex(function(t){return t.key===e}),1)},checkUserCookies:function(){},preLoadSounds:function(){var e=this,t=[].concat(Object(A["a"])(this.topKeys),Object(A["a"])(this.midKeys),Object(A["a"])(this.numPadKeys));t.forEach(function(n,a){e.playSoundKey(n),a===t.length-1&&(e.loadedAllPads=!0)})},getAudioPath:function(e){return this.topKeys.includes(e)?"top":this.midKeys.includes(e)?"mid":this.numPadKeys.includes(e)?"numpad":void 0}}},I=$,D=(n("ed96"),Object(d["a"])(I,z,S,!1,null,"285c1492",null)),N=D.exports,U=(n("a039"),{name:"app",components:{ConfigPanel:l,Loops:k,Pads:x,ControlsInfo:j,Audios:N}}),M=U,J=(n("5c0b"),Object(d["a"])(M,o,i,!1,null,null,null)),B=J.exports;n.d(t,"Bus",function(){return F}),a["a"].config.productionTip=!1;var F=new a["a"];new a["a"]({render:function(e){return e(B)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5da1":function(e,t,n){},"5e27":function(e,t,n){},"69a2":function(e,t,n){e.exports=n.p+"media/98.e33b682c.mp3"},"6c6a":function(e,t,n){e.exports=n.p+"media/71.2a25267f.wav"},"6e47":function(e,t,n){e.exports=n.p+"media/75.7959fc75.wav"},"6f06":function(e,t,n){},7456:function(e,t,n){e.exports=n.p+"media/72.3d8bedd7.wav"},"74f1":function(e,t,n){e.exports=n.p+"media/89.d3a97532.wav"},"7e3e":function(e,t,n){e.exports=n.p+"media/75.8f5ed5b2.wav"},"83fd":function(e,t,n){e.exports=n.p+"media/79.72539095.wav"},"8d3c":function(e,t,n){e.exports=n.p+"media/81.94822237.wav"},a039:function(e,t,n){e.exports=n.p+"img/nbig.7becda6d.jpg"},a0b2:function(e,t,n){e.exports=n.p+"media/83.195344d6.wav"},a891:function(e,t,n){},abc4:function(e,t,n){e.exports=n.p+"media/82.c5442a22.wav"},ae3a:function(e,t,n){e.exports=n.p+"media/80.3249d4cb.wav"},b1df:function(e,t,n){e.exports=n.p+"media/68.ab215edf.wav"},b852:function(e,t,n){"use strict";var a=n("6f06"),o=n.n(a);o.a},bae7:function(e,t,n){e.exports=n.p+"media/70.29e4c8a2.wav"},c0ed:function(e,t,n){e.exports=n.p+"media/73.6bf2feeb.wav"},c35e:function(e,t,n){e.exports=n.p+"media/65.7787d0de.wav"},c758:function(e,t,n){e.exports=n.p+"media/69.e7c82fbe.wav"},cd1b:function(e,t,n){"use strict";var a=n("06ee"),o=n.n(a);o.a},cf14:function(e,t,n){e.exports=n.p+"media/74.c6a7f9e2.wav"},d828:function(e,t,n){e.exports=n.p+"media/68.99a4dd60.wav"},d93f:function(e,t,n){e.exports=n.p+"media/85.ae8cc56c.wav"},dc12:function(e,t,n){e.exports=n.p+"media/97.c7128356.mp3"},e877:function(e,t,n){e.exports=n.p+"media/65.5d200abf.wav"},ea6e:function(e,t,n){e.exports=n.p+"media/99.0f4aa972.mp3"},ed96:function(e,t,n){"use strict";var a=n("5da1"),o=n.n(a);o.a},f236:function(e,t,n){e.exports=n.p+"media/70.26c34d9e.wav"}});
//# sourceMappingURL=app.e5cb5ed3.js.map