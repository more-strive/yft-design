if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let l={};const t=e=>i(e,c),a={module:{uri:c},exports:l,require:t};s[c]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5cda5720"],(function(e){"use strict";e.setCacheNameDetails({prefix:"yft-design-cache"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/element-plus-6fec3fbf.js",revision:null},{url:"assets/fabric-03dcb107.js",revision:null},{url:"assets/html2canvas.esm-5bc3a809.js",revision:null},{url:"assets/index-54277540.css",revision:null},{url:"assets/index.es-73b71bdd.js",revision:null},{url:"assets/purify.es-e1310737.js",revision:null},{url:"assets/vue-6455310f.js",revision:null},{url:"index.html",revision:"43e596caa504cca634801041f077f5c6"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./favicon.ico",revision:"041e571db7264be1ed5a6ad5965b4657"},{url:"manifest.webmanifest",revision:"10dd2a18d513265fa216669a25cbb01d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
