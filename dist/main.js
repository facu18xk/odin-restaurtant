(()=>{"use strict";var n={602:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),r=t.n(i),a=t(645),o=t.n(a)()(r());o.push([n.id,"/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n",""]);const s=o},28:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),r=t.n(i),a=t(645),o=t.n(a)()(r());o.push([n.id,":root {\n  --dark-green: #195A00;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  min-height: 100vh;\n  background: #E5E5E5;\n  font-family: 'Montserrat', sans-serif;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 30px;\n}\n\n\n.nav--tab {\n  background-color: transparent;\n  border: none;\n}\n\n.tab--active {\n  border-bottom: 2px solid var(--dark-green);\n  font-weight: bold;\n}\n\n.main {\n  min-width: 100vw;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.main--left {\n  margin-top: 20%;\n  justify-self: end;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n\n.left--subtitle {\n  font-family: 'Miniver', cursive;\n  color: var(--dark-green);\n  font-size: 1.2rem;\n}\n\n.left--title {\n  margin: 0;\n  font-size: 3rem;\n  max-width: 460px;\n}\n\n.left--description {\n  max-width: 480px;\n}\n\n.buttons--order,\n.buttons--show {\n  width: 195px;\n  height: 58px;\n  border-radius: 6px;\n  border: none;\n  font-weight: bold;\n}\n\n.buttons--order {\n  margin-right: 10px;\n  background: var(--dark-green);\n  color: white;\n}\n\n.buttons--show {\n  background-color: transparent;\n  color: var(--dark-green);\n  border: 1px solid var(--dark-green);\n}\n\n.main--right {\n  display: flex;\n  position: relative;\n  justify-content: end;\n}\n\n.right--bg {\n  position: absolute;\n  top: -2vh;\n  width: 80%;\n  ;\n}\n\n.right--lettuce {\n  position: absolute;\n  width: 50%;\n  top: 25%;\n  right: 35%;\n}\n\n.right--leaf1,\n.right--leaf2 {\n  position: absolute;\n  width: 30%;\n}\n\n.right--leaf1 {\n  top: 16%;\n  right: 50%;\n}\n\n.right--leaf2 {\n  transform: rotate(250deg);\n  top: 50%;\n  right: 45%;\n}\n\n.right--plate {\n  z-index: 10;\n  position: relative;\n  top: 20%;\n  right: 20%;\n  width: max(240px, 50%);\n  height: max(240px, 50%);\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu--subheader {\n  text-align: center;\n}\n\n.subheader--title {\n  font-size: 2.5rem;\n}\n\n.subheader--description {\n  max-width: 500px;\n  font-weight: 300;\n}\n\n.menu--list {\n  width: 70%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  column-gap: 20px;\n}\n\n\n.list--item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.list--item {\n  border-bottom: 1px dotted gray;\n}\n\n.description--title {\n  font-size: 1.2rem;\n}\n\n.description--p {\n  font-size: .8rem;\n  font-weight: 300;\n}\n\n.item--price {\n  font-weight: bold;\n  color: var(--dark-green);\n}\n\n.about {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.about--gallery {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template: repeat(6, 1fr) / repeat(7, 1fr);\n}\n\n.gallery--image1 {\n  grid-area: 1 / 1 / 6 / 5;\n}\n\n.gallery--image2 {\n  grid-area: 2 / 4 / 8 / 7;\n}\n\n.article--why {\n  margin: 0;\n  font-size: 1.2rem;\n  font-family: 'Miniver', cursive;\n  color: var(--dark-green);\n}\n\n.article--title {\n  margin: 0;\n  font-size: 3rem;\n}\n\n.article--p {\n  max-width: 700px;\n  font-weight: 300;\n  line-height: 1.4rem;\n}\n\n.article--grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 20px;\n}\n\n.grid--item {\n  padding: 10px;\n  display: flex;\n  gap: 20px;\n  background: #fff;\n  border-radius: 10px;\n}\n\n.grid--item:first-child {\n  border-left: 4px solid var(--dark-green);\n}",""]);const s=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,i);i.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=i(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=i(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!n;)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),a=t(569),o=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(602),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(28),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const b=t.p+"17d1434c534612adbdf8.svg",v=document.body,y=t.p+"775c5b28b68f6b2c2ea7.png",w=t.p+"5acb02eb82acdea49fe1.png",x=t.p+"cd25037029348d239cb5.png",C=t.p+"ff57cd57f1ae4c1f8547.png";function k(){const n=document.createElement("div");return n.classList.add("main"),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("main--left"),n.innerHTML='\n  <p class="left--subtitle">Healthy & Testy Food</p>\n  <h1 class="left--title">Enjoy Healthy life & Testy Food</h1> \n  <p class="left--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Varius sed pharetra dictum neque massa congue</p>\n  <div class="left--buttons">\n    <button class="buttons--order">Order</button>\n    <button class="buttons--show">Show more</button>\n  </div>\n  ',n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("main--right"),n.innerHTML=`\n  <img class="right--bg" src="${y}" alt="green background almost like a leaf" > \n  <img class="right--plate" src="${w}" alt="plate" >\n  <img class="right--lettuce" src="${x}" alt="lettuce" >\n  <img class="right--leaf1" src="${C}" alt="leaf" >\n  <img class="right--leaf2" src="${C}" alt="leaf" >\n  `,n}()),n}const S=[{name:"Classic Burger",description:"Juicy beef patty with lettuce, tomato, and cheese on a sesame seed bun.",calories:600,price:9.99},{name:"Vegetarian Wrap",description:"Grilled vegetables and hummus wrapped in a whole-grain tortilla.",calories:450,price:8.49},{name:"Caesar Salad",description:"Crisp romaine lettuce, croutons, and parmesan cheese with Caesar dressing.",calories:300,price:7.99},{name:"Margherita Pizza",description:"Fresh mozzarella, tomatoes, and basil on a thin crust.",calories:700,price:12.99},{name:"Chicken Alfredo Pasta",description:"Grilled chicken breast with creamy Alfredo sauce over fettuccine.",calories:800,price:10.99},{name:"Shrimp Tacos",description:"Grilled shrimp with cabbage slaw, cilantro, and lime in soft corn tortillas.",calories:550,price:11.49},{name:"Vegan Buddha Bowl",description:"Quinoa, roasted vegetables, avocado, and tahini dressing.",calories:500,price:9.99},{name:"Chocolate Lava Cake",description:"Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",calories:600,price:6.99}];function z(){const n=document.createElement("div");return n.classList.add("menu"),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("menu--subheader"),n.innerHTML='\n  <h2 class="subheader--title" >Our food menu</h2> \n  <p class="subheader--description" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVarius sed pharetra dictum neque massa congue </p>\n  ',n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("menu--list"),S.forEach((e=>{n.appendChild(function(n,e,t,i){const r=document.createElement("div");return r.classList.add("list--item"),r.innerHTML=`\n    <div class="item--description">\n      <h3 class="description--title">${n}</h3>\n      <p class="description--p">${e}</p>\n      <p class="description--calories">${t} calories\n   </div>\n   <p class="item--price">${i}$</p>\n  `,r}(e.name,e.description,e.calories,e.price))})),n}()),n}const L=t.p+"39c9c503ae5d56360c90.png",E=t.p+"275708cb1b0d78a50460.png",T=t.p+"dd3bce33b54c093eedba.png",M=t.p+"c25d3ef754fa6c60c66a.png",A=t.p+"13b350eae535522c016a.png",$=t.p+"3276423b4067451f1aa0.png";function j(){const n=document.createElement("div");return n.classList.add("about"),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("about--gallery"),n.innerHTML=`\n    <img src="${L}" class="gallery--image1" alt="A person cutting an onion"> \n    <img src="${E}" class="gallery--image2" alt="A salad plate next to a glass of orange juice">\n  `,n}()),n.appendChild(function(){const n=document.createElement("section");return n.classList.add("about--article"),n.innerHTML=`\n    <p class="article--why" >Why choose us</p>\n    <h2 class="article--title"> Why we are the best?</h2>\n    <p class="article--p">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Varius sed pharetra dictum neque massa congue\n    </p>\n    <div class="article--grid">\n      <div class="grid--item">\n        <img src="${T}" alt="truck">\n        <p>Fast Delivery</p>\n      </div> \n      <div class="grid--item">\n        <img src="${M}" alt="timer">\n        <p>24/7 services</p>\n      </div> \n      <div class="grid--item">\n        <img src="${A}" alt="burger">\n        <p>Fresh food</p>\n      </div> \n      <div class="grid--item">\n        <img src="${$}" alt="factory">\n        <p>Quality maintain</p>\n      </div>\n    </div>\n  `,n}()),n}v.innerHTML=`\n    <header class="header">\n    <img src="${b}" alt="logo food tuck">\n    <nav class="header--nav">\n      <button class="nav--tab tab--home">Home</button>\n      <button class="nav--tab tab--menu">Menu</button>\n      <button class="nav--tab tab--about">About</button>\n    </nav>\n  </header>\n  <div id="content" class="content">\n  </div>  `;const F=document.getElementById("content");F.appendChild(k());let H="tab--home";document.querySelector(`.${H}`).classList.add("tab--active"),function(){const n={home:k,menu:z,about:j};document.querySelectorAll(".nav--tab").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.textContent.toLowerCase();document.querySelector(`.${H}`).classList.remove("tab--active"),e.target.classList.add("tab--active"),F.innerHTML="",F.appendChild(n[t]()),H=`tab--${t}`}))}))}()})()})();