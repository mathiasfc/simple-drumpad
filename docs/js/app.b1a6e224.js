(function(e){function t(t){for(var o,i,r=t[0],c=t[1],d=t[2],u=0,l=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&l.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},n={app:0},s=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/simple-drumpad/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"055c":function(e,t,a){},"087b":function(e,t,a){e.exports=a.p+"media/77.628c3902.wav"},"08ad":function(e,t,a){e.exports=a.p+"media/188.580eea92.wav"},"0d5a":function(e,t,a){e.exports=a.p+"media/88.b9ab5552.wav"},1244:function(e,t,a){e.exports=a.p+"media/100.0d88fa18.mp3"},"130f":function(e,t,a){"use strict";var o=a("aaa5"),n=a.n(o);n.a},"19d8":function(e,t,a){e.exports=a.p+"media/66.8de8e513.wav"},"1a47":function(e,t,a){e.exports=a.p+"media/186.75cd8beb.wav"},"1ab3":function(e,t,a){e.exports=a.p+"media/84.c5442a22.wav"},"259d":function(e,t,a){e.exports=a.p+"media/67.4ca96106.wav"},"302f":function(e,t,a){e.exports=a.p+"media/87.d3a97532.wav"},3493:function(e,t,a){e.exports=a.p+"media/Record Crackle (3).b44d6709.wav"},"34af":function(e,t,a){"use strict";var o=a("055c"),n=a.n(o);n.a},3964:function(e,t,a){e.exports=a.p+"media/76.8d578f1a.wav"},4180:function(e,t,a){"use strict";var o=a("7a15"),n=a.n(o);n.a},"4ab4":function(e,t,a){var o={"./Record Crackle (3).wav":"3493","./bottom/188.wav":"08ad","./bottom/66.wav":"19d8","./bottom/67.wav":"259d","./bottom/77.wav":"087b","./bottom/78.wav":"6a1d","./bottom/86.wav":"b147","./bottom/88.wav":"0d5a","./bottom/90.wav":"f6b1","./mid/186.wav":"1a47","./mid/65.wav":"e877","./mid/68.wav":"d828","./mid/70.wav":"f236","./mid/71.wav":"6c6a","./mid/72.wav":"7456","./mid/74.wav":"cf14","./mid/75.wav":"7e3e","./mid/76.wav":"3964","./mid/83.wav":"a0b2","./numpad/100.mp3":"1244","./numpad/97.mp3":"dc12","./numpad/98.mp3":"69a2","./numpad/99.mp3":"ea6e","./top/69.wav":"c758","./top/73.wav":"c0ed","./top/79.wav":"83fd","./top/80.wav":"ae3a","./top/81.wav":"8d3c","./top/82.wav":"abc4","./top/84.wav":"1ab3","./top/85.wav":"d93f","./top/87.wav":"302f","./top/89.wav":"74f1"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=s,e.exports=n,n.id="4ab4"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drumpad-background"},[a("div",{staticClass:"container",attrs:{id:"drumpad"}},[a("ConfigPanel"),a("Loops"),a("Pads"),a("ControlsInfo"),a("Audios")],1)])},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"config-panel"}},[a("div",{staticClass:"left-config-block"},[a("div",{staticClass:"custom-dropdown"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?a:a[0]},e.onSelectChange]}},e._l(e.options,(function(t,o){return a("option",{key:o},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"volume-slider"},[a("vue-slider",{attrs:{max:1,interval:.1,"drag-end":this.onVolumeChange()},model:{value:e.volume,callback:function(t){e.volume=t},expression:"volume"}})],1)]),a("input",{staticClass:"btnControls",attrs:{type:"button",value:"ⓘ Controls",id:"btnControls"},on:{click:e.toggleInfos}})])},r=[],c=a("4971"),d=a.n(c),p=(a("24df"),{name:"ConfigPanel",data:function(){return{selected:"Hip Hop",options:["Hip Hop","Jazz"],volume:1}},methods:{toggleInfos:function(){ee.$emit("toggleInfos",!0)},onSelectChange:function(){ee.$emit("genreChanged",this.selected)},onVolumeChange:function(){ee.$emit("volumeChanged",this.volume)}},components:{VueSlider:d.a}}),u=p,l=(a("5c04"),a("2877")),f=Object(l["a"])(u,i,r,!1,null,"53288d84",null),v=f.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"loops"}},e._l(e.loops,(function(t){return a("div",{key:t.key,staticClass:"loop-empty",attrs:{"data-key":t.key},on:{click:function(a){return e.testFunction(t.key)}}},[e._v("\n        "+e._s(e.defaultMessage)+"\n    ")])})),0)},h=[],y={name:"Loops",data:function(){return{defaultMessage:"Empty loop",loops:[{key:49},{key:50},{key:51},{key:52},{key:53},{key:54},{key:55},{key:56},{key:57},{key:48}]}},methods:{testFunction:function(e){alert(e)}}},b=y,g=(a("4180"),Object(l["a"])(b,m,h,!1,null,"42f912a3",null)),k=g.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"pads"}},[a("div",{staticClass:"wrapper-left"},[e._l(e.firstline,(function(t){return a("div",{key:t,staticClass:"pad",class:{playing:e.pressedKeys.includes(t)},attrs:{"data-key":t}})})),e._l(e.secondLine,(function(t){return a("div",{key:t,staticClass:"pad",class:{playing:e.pressedKeys.includes(t)},attrs:{"data-key":t}})})),e._l(e.thirdLine,(function(t){return a("div",{key:t,staticClass:"pad",class:{playing:e.pressedKeys.includes(t)},attrs:{"data-key":t}})}))],2),a("div",{staticClass:"wrapper-right"},e._l(e.rightPads,(function(e){return a("div",{key:e,staticClass:"pad",attrs:{"data-key":e}},[a("div",{class:"audio-range range-"+e})])})),0)])},C=[],_=(a("6762"),a("2fdb"),a("57e7"),{name:"Pads",data:function(){return{pressedKeys:[],firstline:[81,87,69,82,84,89,85,73,79,80],secondLine:[65,83,68,70,71,72,74,75,76,186],thirdLine:[90,88,67,86,66,78,77,188,190,191],rightPads:[103,104,105,100,101,102,97,98,99]}},created:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)},methods:{keyDown:function(e){this.isLoopKey(e)?(console.log("Loop clicked"),this.loopClick(e)):this.isNormalKey(e)&&(console.log("Pad clicked"),this.playAudio(e),this.padClick(e))},keyUp:function(e){var t=this.pressedKeys.indexOf(e.keyCode);t>-1&&this.pressedKeys.splice(t,1)},isLoopKey:function(e){return e.keyCode>=48&&e.keyCode<=57},isNormalKey:function(e){return this.firstline.includes(e.keyCode)||this.secondLine.includes(e.keyCode)||this.thirdLine.includes(e.keyCode)||this.rightPads.includes(e.keyCode)},loopClick:function(e){},padClick:function(e){this.pressedKeys.includes(e.keyCode)||this.pressedKeys.push(e.keyCode)},playAudio:function(e){ee.$emit("playAudio",e)}}}),x=_,P=(a("cd1b"),Object(l["a"])(x,w,C,!1,null,"722ff057",null)),K=P.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.howToUse?a("div",[a("div",{staticClass:"backgroundDiv",on:{click:e.toggleInfo}}),e._m(0)]):e._e()},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"messagepop pop"},[a("h1",{staticStyle:{"text-align":"center"}},[e._v("Keyboard")]),a("br"),a("span",[a("b",[e._v("0-9:")]),e._v(" Record your loops "),a("span",{staticStyle:{color:"red"}},[e._v(" [In progress...]")])]),a("br"),a("br"),a("span",[a("b",[e._v("(Q-P):")]),e._v(" Hat's "),a("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")])]),a("br"),a("br"),a("span",[a("b",[e._v("(A-;):")]),e._v(" Clap's / Kick's")]),a("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")]),a("br"),a("br"),a("span",[a("b",[e._v("(Z-?):")]),e._v(" Voice's "),a("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")])]),a("br"),a("br"),a("span",[a("b",[e._v("Numpad's (0-9)")]),e._v(" Effect's "),a("span",{staticStyle:{color:"red"}},[e._v(" [TODO]")])]),a("br"),a("span",{staticStyle:{"font-size":"14px",float:"right"}},[e._v("*Press [esc] to clear all loop's.")])])}],H={name:"ControlsInfo",data:function(){return{howToUse:!1}},created:function(){var e=this;ee.$on("toggleInfos",(function(t){e.howToUse=t}))},methods:{toggleInfo:function(){this.howToUse=!this.howToUse}}},j=H,A=(a("130f"),Object(l["a"])(j,O,L,!1,null,"e5b2aea0",null)),S=A.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"audios"}}),a("loading",{attrs:{active:!this.loadedAllPads,"is-full-page":!0,"background-color":"#000",color:"#FFF"},on:{"update:active":function(t){return e.$set(!this,"loadedAllPads",t)}}},[a("span",{staticClass:"span-loading"},[e._v("Loading...")])]),this.loadingProgress<96||!this.loadedAllPads?a("ProgressBar",{attrs:{progress:this.loadingProgress}}):e._e()],1)},E=[],$=(a("ac6a"),a("f3e2"),a("20d6"),a("759f"),a("d25f"),a("75fc")),T={hiphop:[{key:65,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Jay.wav"},{key:83,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Dance.wav"},{key:68,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - Pop.wav"},{key:70,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - High.wav"},{key:71,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Claps/C - RnB.wav"},{key:72,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hot.wav"},{key:74,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Oldschool.wav"},{key:75,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Hard 3.wav"},{key:76,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Dark.wav"},{key:186,type:"kick",src:"http://hpanagramizer.freeoda.com/beats/HipHop/Kick/K - Bass.wav"}],jazz:[]},I=T,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"progress"}},[a("div",{style:"width:"+this.progress+"%",attrs:{id:"progress-line"}})])},N=[],U={name:"ProgressBar",data:function(){return{}},props:["progress"],created:function(){console.log("teste"+this.progress)},methods:{}},M=U,B=(a("8cb0"),Object(l["a"])(M,D,N,!1,null,"391523f5",null)),F=B.exports;o["default"].mixin({methods:{isNumPadKey:function(e){return e>=97&&e<=105},isNormalKey:function(e){return e>=65&&e<=90||186===e}}});a("5118");var J=a("9062"),R=a.n(J),V=(a("e40d"),{name:"Audios",data:function(){return{selectedGenre:"hiphop",audioItems:I,loadedAllPads:!1,volume:1,loadingProgress:0,topKeys:[69,73,79,80,81,82,84,85,87,89],midKeys:[65,68,70,71,72,74,75,76,83,186],bottomKeys:[66,67,77,78,86,88,90,188],numPadKeys:[97,98,99,100],acitiveLoops:[],padsLoaded:0}},components:{Loading:R.a,ProgressBar:F},mounted:function(){this.preLoadSounds()},created:function(){var e=this;ee.$on("genreChanged",(function(t){switch(t){case"Hip Hop":e.selectedGenre="hiphop";break;case"Jazz":e.selectedGenre="jazz";break}})),ee.$on("volumeChanged",(function(t){e.volume=t})),ee.$on("playAudio",(function(t){e.playSoundKey(t.keyCode)}))},methods:{playSoundKey:function(e){var t=this,o=this.getAudioPath(e),n="numpad"===o?"mp3":"wav",s=a("4ab4")("./".concat(o,"/").concat(e,".").concat(n)),i=new Audio(s);if(i.volume=this.volume,i)if(this.loadedAllPads||(i.muted="true",i.addEventListener("canplay",(function(){var e=[].concat(Object($["a"])(t.topKeys),Object($["a"])(t.midKeys),Object($["a"])(t.bottomKeys),Object($["a"])(t.numPadKeys));t.padsLoaded+=1,t.loadingProgress+=3.1,t.padsLoaded===e.length-1&&(t.loadedAllPads=!0)}))),this.isNormalKey(e))i.play();else if(this.isNumPadKey(e)&&this.loadedAllPads){var r=this.acitiveLoops.filter((function(t){return t.key===e}))[0];r?this.stopLoop(e,r.sound):this.startLoop(e,i)}},startProgress:function(e,t){var a=this,o=document.getElementsByClassName("range-".concat(e))[0];t.addEventListener("timeupdate",(function(){var n=t.currentTime,s=Math.min(10/t.duration*n*10,100);o.style.width=s+"%",s>=98&&(console.log("stoped all"),s=0,t.pause(),t.currentTime=0,t.play(),a.resetProgress(t,o));var i=a.acitiveLoops.some((function(t){return t.key===e}));i||(a.resetProgress(t,o),t.pause())}))},resetProgress:function(e,t){t.style.width=0},startLoop:function(e,t){var o=this.getAudioPath(e),n="numpad"===o?"mp3":"wav",s=a("4ab4")("./".concat(o,"/").concat(e,".").concat(n));t=new Audio(s);t.volume=this.volume,this.acitiveLoops.push({key:e,sound:t}),this.startProgress(e,t),t.play()},stopLoop:function(e,t){t.pause(),this.acitiveLoops.splice(this.acitiveLoops.findIndex((function(t){return t.key===e})),1)},checkUserCookies:function(){},preLoadSounds:function(){var e=this,t=[].concat(Object($["a"])(this.topKeys),Object($["a"])(this.midKeys),Object($["a"])(this.bottomKeys),Object($["a"])(this.numPadKeys));t.forEach((function(t,a){e.playSoundKey(t)}))},getAudioPath:function(e){return this.topKeys.includes(e)?"top":this.midKeys.includes(e)?"mid":this.bottomKeys.includes(e)?"bottom":this.numPadKeys.includes(e)?"numpad":void 0}}}),G=V,Q=(a("34af"),Object(l["a"])(G,z,E,!1,null,"2db9c733",null)),Z=Q.exports,q=(a("a039"),{name:"app",components:{ConfigPanel:v,Loops:k,Pads:K,ControlsInfo:S,Audios:Z}}),W=q,X=(a("5c0b"),Object(l["a"])(W,n,s,!1,null,null,null)),Y=X.exports;a.d(t,"Bus",(function(){return ee})),o["default"].config.productionTip=!1;var ee=new o["default"];new o["default"]({render:function(e){return e(Y)}}).$mount("#app")},"5c04":function(e,t,a){"use strict";var o=a("a4d4"),n=a.n(o);n.a},"5c0b":function(e,t,a){"use strict";var o=a("e332"),n=a.n(o);n.a},"69a2":function(e,t,a){e.exports=a.p+"media/98.e33b682c.mp3"},"6a1d":function(e,t,a){e.exports=a.p+"media/78.989c67a4.wav"},"6c6a":function(e,t,a){e.exports=a.p+"media/71.4ba62f6e.wav"},7456:function(e,t,a){e.exports=a.p+"media/72.2a25267f.wav"},"74f1":function(e,t,a){e.exports=a.p+"media/89.9b6a7564.wav"},"7a15":function(e,t,a){},"7e3e":function(e,t,a){e.exports=a.p+"media/75.f59aec43.wav"},"83fd":function(e,t,a){e.exports=a.p+"media/79.d8cb2931.wav"},"8cb0":function(e,t,a){"use strict";var o=a("a8b9"),n=a.n(o);n.a},"8d3c":function(e,t,a){e.exports=a.p+"media/81.174c096f.wav"},a039:function(e,t,a){e.exports=a.p+"img/nbig.7becda6d.jpg"},a0b2:function(e,t,a){e.exports=a.p+"media/83.97a75718.wav"},a4d4:function(e,t,a){},a8b9:function(e,t,a){},aaa5:function(e,t,a){},abc4:function(e,t,a){e.exports=a.p+"media/82.c66c3229.wav"},ae3a:function(e,t,a){e.exports=a.p+"media/80.3083d8eb.wav"},b147:function(e,t,a){e.exports=a.p+"media/86.78a13414.wav"},c0ed:function(e,t,a){e.exports=a.p+"media/73.6dbb91e6.wav"},c6bd:function(e,t,a){},c758:function(e,t,a){e.exports=a.p+"media/69.48d398d5.wav"},cd1b:function(e,t,a){"use strict";var o=a("c6bd"),n=a.n(o);n.a},cf14:function(e,t,a){e.exports=a.p+"media/74.aca2bbdf.wav"},d828:function(e,t,a){e.exports=a.p+"media/68.65b2cf47.wav"},d93f:function(e,t,a){e.exports=a.p+"media/85.c694cc95.wav"},dc12:function(e,t,a){e.exports=a.p+"media/97.c7128356.mp3"},e332:function(e,t,a){},e877:function(e,t,a){e.exports=a.p+"media/65.e799ce63.wav"},ea6e:function(e,t,a){e.exports=a.p+"media/99.0f4aa972.mp3"},f236:function(e,t,a){e.exports=a.p+"media/70.34596b92.wav"},f6b1:function(e,t,a){e.exports=a.p+"media/90.f5ad7b6e.wav"}});
//# sourceMappingURL=app.b1a6e224.js.map