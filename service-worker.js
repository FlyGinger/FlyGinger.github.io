if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(f.map((a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.fb2e954a.css",revision:"a893e3e070aa05ee055653308c7cdf34"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/27.e6666d3b.js",revision:"56cf2e8f648783fd22e9c3eff5289a99"},{url:"assets/js/28.b655072e.js",revision:"6b86178274a9696836bb3cd9627856a7"},{url:"assets/js/29.8f2e65d9.js",revision:"d6b6da3da0af0bd242c0bd5dafb43711"},{url:"assets/js/app.9efd4c05.js",revision:"232d2cf0b6b2567feb4afd85490169d4"},{url:"assets/js/layout-Blog.b8aa2753.js",revision:"21d03196e588ea1ef7264c26991c22d4"},{url:"assets/js/layout-Layout.3db73797.js",revision:"85ca02f33566d60c133b0537e2f50e9e"},{url:"assets/js/layout-NotFound.a40b0249.js",revision:"3719da3c1c389fe6ae5d948d11a8c609"},{url:"assets/js/layout-Slide.41be3be8.js",revision:"0b31448ea08cb435fab7fa64ee888d0e"},{url:"assets/js/page-zenk'sblog.32fcd797.js",revision:"cc5d4a281f5785864cd8ace41727b4e0"},{url:"assets/js/page-个人介绍.3c87a9e9.js",revision:"543a25e00c77c4bf11e86aa181f8b0bb"},{url:"assets/js/page-快速排序的优化.7a272b5d.js",revision:"5885212f1cb35fbc414a220063908339"},{url:"assets/js/page-算法导论.1889dd82.js",revision:"2fa4733a111046d9308137b8cfe3508c"},{url:"assets/js/page-算法导论10基础数据结构.14471ae9.js",revision:"9c4fe148e55e4e678ff3db3690380020"},{url:"assets/js/page-算法导论11哈希表.28610daf.js",revision:"3eac848b0dcb645bf5bf85d74a28871b"},{url:"assets/js/page-算法导论12二叉搜索树.7ec1900a.js",revision:"e412a1f58be158ffe131a689e9944fdb"},{url:"assets/js/page-算法导论1算法的概念.f0195662.js",revision:"d36c63603b6540403dab00c9d05e24a2"},{url:"assets/js/page-算法导论2设计算法的流程.22c1e9f4.js",revision:"d21343c2c1dc8660de8515b269db9e89"},{url:"assets/js/page-算法导论3函数的增长.41d2c245.js",revision:"a99ba75da077baef647bbe3f3d3ec96e"},{url:"assets/js/page-算法导论4分治.4d63a71f.js",revision:"73684e39acca70fdbaf358d0095975ad"},{url:"assets/js/page-算法导论5概率分析和随机算法.aa1f9295.js",revision:"9f7f15c60c91aea5e4a73553a03a852d"},{url:"assets/js/page-算法导论6堆排序.79e9d0b7.js",revision:"9c3f854a620b7539f48234de90ccb3ed"},{url:"assets/js/page-算法导论7快速排序.d1640e48.js",revision:"3d4d37961b7f19a12a3e2407de86a396"},{url:"assets/js/page-算法导论8线性时间排序.d454b109.js",revision:"75977c699db8ca687fa49efa345735c5"},{url:"assets/js/page-算法导论9中位数和顺序统计.ce86cede.js",revision:"94e64981233a89e88d875e9627316bdc"},{url:"assets/js/vendors~layout-Blog~layout-Layout.ab1cbace.js",revision:"dd8538141ffef2c0cf1aa778370f6e17"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7df9a7a2.js",revision:"7860852fca7ad58964b538015c25ceb2"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.eaffadb6.js",revision:"cf32c388266bd389b913ea458cd4c251"},{url:"assets/js/vendors~photo-swipe.db2f5e99.js",revision:"f4f86f986d1af473cb9db938214b509f"},{url:"assets/js/vendors~waline.990e55a5.js",revision:"fa5be854547a809a02937d17fb168490"},{url:"logo.svg",revision:"a66375fdcf542d4008b7b55940e5ba4e"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"404.html",revision:"6e023801b02dd3f1ed6e309ca2c89f3d"},{url:"article/index.html",revision:"9dcbb37fa5aa23b3712148db8d6ac055"},{url:"category/index.html",revision:"821ce3335eeabe0d4e4a1770952f8dec"},{url:"category/每日迷惑/index.html",revision:"97e4428ab94aba2b75820a0ca0018551"},{url:"category/算法导论/index.html",revision:"7522b888ab069766693b4fa2ec8e1985"},{url:"category/算法导论/page/2/index.html",revision:"2854d7492ee0dcfe85457c3e03793448"},{url:"encrypt/index.html",revision:"df9de726017e9971192e3a46abcaef35"},{url:"index.html",revision:"841320e6d3abef55c164640668313f45"},{url:"intro/index.html",revision:"3904b103fe1a6b2c8761f7396abfbf40"},{url:"note/算法导论/doc/1 算法的概念/index.html",revision:"9fde46214129a0ddae13652f674d6c67"},{url:"note/算法导论/doc/10 基础数据结构/index.html",revision:"3c15e3ccb1e8460c02eee3189f9d4565"},{url:"note/算法导论/doc/11 哈希表/index.html",revision:"a1561d6d1a858785d1de4bca75ea86ea"},{url:"note/算法导论/doc/12 二叉搜索树/index.html",revision:"388fd2abb8a92f60e0a4146e3cb7387d"},{url:"note/算法导论/doc/2 设计算法的流程/index.html",revision:"c36960601c3093bb8a701ca2bd350e1e"},{url:"note/算法导论/doc/3 函数的增长/index.html",revision:"c3c9357e35037bc7820154c1842d38de"},{url:"note/算法导论/doc/4 分治/index.html",revision:"1013b7c79a681f3a485cfa906c4c01da"},{url:"note/算法导论/doc/5 概率分析和随机算法/index.html",revision:"8326935433e924d85d96dd3558961979"},{url:"note/算法导论/doc/6 堆排序/index.html",revision:"c19f88176a3070106bac79202f68f2a8"},{url:"note/算法导论/doc/7 快速排序/index.html",revision:"c386802f04b97c072e6d652981f975e4"},{url:"note/算法导论/doc/8 线性时间排序/index.html",revision:"d8f07f931fba124ea5f0bf21cec92156"},{url:"note/算法导论/doc/9 中位数和顺序统计/index.html",revision:"01612d76034aef2ba0eb42128571b29b"},{url:"note/算法导论/index.html",revision:"1078c0cb9e6951e2da5703b45c793db9"},{url:"post/2021-05-19 快速排序的优化/index.html",revision:"ac286617cbd39259d5b6b3a338bf0ca4"},{url:"slide/index.html",revision:"17c67b63ee60bc81292079a00f015208"},{url:"star/index.html",revision:"71a18bca8340e57c7824e4e26a204e70"},{url:"tag/Go/index.html",revision:"510dbf42ce4295fe1a86bdd545eeeee8"},{url:"tag/index.html",revision:"9b9d255b7522751247e73c4252de33f4"},{url:"tag/分治/index.html",revision:"45ce26a63ca62512c4d21e9c4d12e370"},{url:"tag/哈希/index.html",revision:"4a328dfa6120d34c9e9b84ff6e5ce2f8"},{url:"tag/排序/index.html",revision:"b708aeba2dbddebe80a0aab4c150e013"},{url:"tag/数学/index.html",revision:"ea72e4092cbcc2182f254cac87a17abd"},{url:"tag/树/index.html",revision:"8e1f7d711f1a6d61575a42bd0091d5af"},{url:"tag/算法/index.html",revision:"39f2f1165fdf4f361d456caae66b3a14"},{url:"tag/算法/page/2/index.html",revision:"9bd5df92e5755e94440d0c8f7d1edbe1"},{url:"timeline/index.html",revision:"825bfd9cafb381c959725187b3f813d3"},{url:"assets/icon/apple-icon-152.png",revision:"208bdd3935a7e966bc5b38858195b0e9"},{url:"assets/icon/chrome-192.png",revision:"d4b5ce54210fd2e87d575b1088750089"},{url:"assets/icon/chrome-512.png",revision:"1202bb08e2924a8a96288950783c85a6"},{url:"assets/icon/chrome-mask-192.png",revision:"0515cc5542dddf3bbf4f2f0ba11c4d73"},{url:"assets/icon/chrome-mask-512.png",revision:"fb2b552760c41c00e3a563e91b64dcec"},{url:"assets/icon/ms-icon-144.png",revision:"ac8aaf4b7b412c63e5454649cbb895ac"},{url:"assets/img/1-1.e4418bf6.png",revision:"e4418bf671c1a06c6752dbc3f60523b2"},{url:"assets/img/12-1.00490234.png",revision:"0049023470e1779452f3c5cd7634d092"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"bdcad369a5673e288250bf7aed2536ff"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
