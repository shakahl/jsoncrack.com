if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const o=e=>s(e,c),d={module:{uri:c},exports:r,require:o};a[c]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-Carm6ODM-Xa85dVpy_nmY.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192.png",revision:"4a8d21d6cfb2f95f67102c12e956b71d"},{url:"/404.svg",revision:"4fc49eb0df0f3f1c2a98c80f2aa1a52f"},{url:"/421.svg",revision:"28b2cc900a170ca3d3c7dd0ff2d1dc83"},{url:"/512.png",revision:"a7462b705d92cb13cfbe64141ca6f211"},{url:"/CNAME",revision:"08f5efa96713c7872bd13006bc423c6c"},{url:"/_next/static/Carm6ODM-Xa85dVpy_nmY/_buildManifest.js",revision:"c7c8bf0625bada32368fcc084db9f589"},{url:"/_next/static/Carm6ODM-Xa85dVpy_nmY/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Carm6ODM-Xa85dVpy_nmY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/252f366e.ba3c0f1af151a44f.js",revision:"ba3c0f1af151a44f"},{url:"/_next/static/chunks/366.83f1458797ca519b.js",revision:"83f1458797ca519b"},{url:"/_next/static/chunks/72fdc299.13ac368d6056aded.js",revision:"13ac368d6056aded"},{url:"/_next/static/chunks/78e521c3.b92df0a23b33d275.js",revision:"b92df0a23b33d275"},{url:"/_next/static/chunks/7f0c75c1.ab6f6e51c2d88b94.js",revision:"ab6f6e51c2d88b94"},{url:"/_next/static/chunks/949-ec85b4dcb43c6cd2.js",revision:"ec85b4dcb43c6cd2"},{url:"/_next/static/chunks/988.ecda788ff4e47bfe.js",revision:"ecda788ff4e47bfe"},{url:"/_next/static/chunks/ae51ba48.a750db2dabe621a0.js",revision:"a750db2dabe621a0"},{url:"/_next/static/chunks/bd1a647f.92669c0f3798153c.js",revision:"92669c0f3798153c"},{url:"/_next/static/chunks/d64684d8.a82f92467542074f.js",revision:"a82f92467542074f"},{url:"/_next/static/chunks/d7eeaac4-9519da27a0d2627d.js",revision:"9519da27a0d2627d"},{url:"/_next/static/chunks/de71a805.f1c92c238836c337.js",revision:"f1c92c238836c337"},{url:"/_next/static/chunks/framework-0471df08d5fed370.js",revision:"0471df08d5fed370"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/404-7a853318a0ffa097.js",revision:"7a853318a0ffa097"},{url:"/_next/static/chunks/pages/_app-87563190199cefec.js",revision:"87563190199cefec"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/editor-25c434895b75eccf.js",revision:"25c434895b75eccf"},{url:"/_next/static/chunks/pages/index-fb25baa598f5a8b8.js",revision:"fb25baa598f5a8b8"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-1230b10eafafc8e9.js",revision:"1230b10eafafc8e9"},{url:"/_next/static/css/bea3ee2275ffba4f.css",revision:"bea3ee2275ffba4f"},{url:"/editor",revision:"Carm6ODM-Xa85dVpy_nmY"},{url:"/favicon.ico",revision:"c692c04b35a99adb5a7bd7072f02e02b"},{url:"/graphs3.svg",revision:"c6d7787bdc0540545421e9caca2257da"},{url:"/graphs4.svg",revision:"c565f80acb8d2da83ed32828426f1a83"},{url:"/graphs5.svg",revision:"ff5350dfb978487fd22c4b637dbf0630"},{url:"/jsonvisio.png",revision:"3ec7e3af932a78f8bd34826da24927e0"},{url:"/logo.png",revision:"448c52ee96ab697d2d6e7e9a485dc894"},{url:"/manifest.json",revision:"75c291ffb65d4c9159c9178e9b9a71fd"},{url:"/monaco-editor/CAUTION.md",revision:"6f572426ac439b0388b0d1ed0ee7f48d"},{url:"/monaco-editor/min/vs/base/browser/ui/codicons/codicon/codicon.ttf",revision:"cb361a5a5838a0c9f3ff87558bc6961c"},{url:"/monaco-editor/min/vs/base/worker/workerMain.js",revision:"e4f7c3a3a72da43c9bba5ba221b5b54b"},{url:"/monaco-editor/min/vs/basic-languages/abap/abap.js",revision:"2a7426c17d0e5dfb9aa5a7e9a7b93585"},{url:"/monaco-editor/min/vs/basic-languages/apex/apex.js",revision:"2bfed88162999aaa7e21d81a51928646"},{url:"/monaco-editor/min/vs/basic-languages/azcli/azcli.js",revision:"3a4ee9235c78cc9abc40018f57800e80"},{url:"/monaco-editor/min/vs/basic-languages/bat/bat.js",revision:"5114b999c175dad04e2d3c31c3296b38"},{url:"/monaco-editor/min/vs/basic-languages/bicep/bicep.js",revision:"f5bb2cb395af46f28ece940bf959e4cc"},{url:"/monaco-editor/min/vs/basic-languages/cameligo/cameligo.js",revision:"1e5bea5a324ba1d7c624f600c4e46a7c"},{url:"/monaco-editor/min/vs/basic-languages/clojure/clojure.js",revision:"74569a1ba83fd8a0e47e7806b9eff1f2"},{url:"/monaco-editor/min/vs/basic-languages/coffee/coffee.js",revision:"d5904efab744906c584eac33f64f3617"},{url:"/monaco-editor/min/vs/basic-languages/cpp/cpp.js",revision:"0150eec9fe512442f70f180edc408dab"},{url:"/monaco-editor/min/vs/basic-languages/csharp/csharp.js",revision:"74f53bc5f337068ffd99984afb824f4d"},{url:"/monaco-editor/min/vs/basic-languages/csp/csp.js",revision:"9cc6c8f3637ad8dee8e6e4a741401bae"},{url:"/monaco-editor/min/vs/basic-languages/css/css.js",revision:"03a67f11eadcf55bf508a811db8a960c"},{url:"/monaco-editor/min/vs/basic-languages/dart/dart.js",revision:"3cfbd6ea675bb377ea6ae19e7a0e4e77"},{url:"/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile.js",revision:"480d3a59a8dd444feda8519f23b198b3"},{url:"/monaco-editor/min/vs/basic-languages/ecl/ecl.js",revision:"63359f10d65418c57c16101c7ff2a3e4"},{url:"/monaco-editor/min/vs/basic-languages/elixir/elixir.js",revision:"6394ed10b370f77952e99b0962135e85"},{url:"/monaco-editor/min/vs/basic-languages/flow9/flow9.js",revision:"075c38656896031d99fde758171a22b8"},{url:"/monaco-editor/min/vs/basic-languages/freemarker2/freemarker2.js",revision:"d5efc6606db9c6d90979a9c31dfcec96"},{url:"/monaco-editor/min/vs/basic-languages/fsharp/fsharp.js",revision:"bb23385fea46ff9bf5aa9853df1fd2d9"},{url:"/monaco-editor/min/vs/basic-languages/go/go.js",revision:"d4ff74fbef7a476b255587c383123151"},{url:"/monaco-editor/min/vs/basic-languages/graphql/graphql.js",revision:"f8eed241c177e965fd212492a7ed75a1"},{url:"/monaco-editor/min/vs/basic-languages/handlebars/handlebars.js",revision:"8487bc8d5e9ca6ea45c5d784a2110647"},{url:"/monaco-editor/min/vs/basic-languages/hcl/hcl.js",revision:"c370f3be7e0ea081be354f2f567ccf64"},{url:"/monaco-editor/min/vs/basic-languages/html/html.js",revision:"cd3fe7959c180d9e07b509dd241048e9"},{url:"/monaco-editor/min/vs/basic-languages/ini/ini.js",revision:"7b00a13be0dee7388ffe2f6cd37774cd"},{url:"/monaco-editor/min/vs/basic-languages/java/java.js",revision:"7a23d9a9743d9d973498549ebbdae290"},{url:"/monaco-editor/min/vs/basic-languages/javascript/javascript.js",revision:"c11bb6692b7f2ab1a8b31426b3d91cd2"},{url:"/monaco-editor/min/vs/basic-languages/julia/julia.js",revision:"9b9b59474d44db7ddd3ada3ae0b454c2"},{url:"/monaco-editor/min/vs/basic-languages/kotlin/kotlin.js",revision:"a50ccd32263cef0bbf8be07ea1b99b0b"},{url:"/monaco-editor/min/vs/basic-languages/less/less.js",revision:"c726a61a9ba67ed05d7e0b125fd8ad6c"},{url:"/monaco-editor/min/vs/basic-languages/lexon/lexon.js",revision:"c8d8cce9882a0f5e3dfb58ff3184daf4"},{url:"/monaco-editor/min/vs/basic-languages/liquid/liquid.js",revision:"0232ebff9a91e5266305420212f81f5a"},{url:"/monaco-editor/min/vs/basic-languages/lua/lua.js",revision:"59f56e3800fbbbaf7c756d869b762573"},{url:"/monaco-editor/min/vs/basic-languages/m3/m3.js",revision:"5571e62870b0ab9135808e489a2c3db8"},{url:"/monaco-editor/min/vs/basic-languages/markdown/markdown.js",revision:"752f7d4eb39a078843f827080c30c5e1"},{url:"/monaco-editor/min/vs/basic-languages/mips/mips.js",revision:"720b5211155e6bf2a903a7f6faf12c2e"},{url:"/monaco-editor/min/vs/basic-languages/msdax/msdax.js",revision:"e163c017b1999f41b8113a5da3e9867e"},{url:"/monaco-editor/min/vs/basic-languages/mysql/mysql.js",revision:"8fe79d1f3600179e150d994bcdf5a85b"},{url:"/monaco-editor/min/vs/basic-languages/objective-c/objective-c.js",revision:"5f113dc5604ba48bd465eaf6dd9fda45"},{url:"/monaco-editor/min/vs/basic-languages/pascal/pascal.js",revision:"4dcede38e02c6a0a92f7c8debaec009c"},{url:"/monaco-editor/min/vs/basic-languages/pascaligo/pascaligo.js",revision:"404e0702be51b71e8bcba61eed61f16d"},{url:"/monaco-editor/min/vs/basic-languages/perl/perl.js",revision:"5762edd774bc57f2a3dc714be9267b25"},{url:"/monaco-editor/min/vs/basic-languages/pgsql/pgsql.js",revision:"a0b7f12df13fe89bfe1838c7ed1bbbc7"},{url:"/monaco-editor/min/vs/basic-languages/php/php.js",revision:"0afcc48a24c43c4e9f52d818c97a2f4d"},{url:"/monaco-editor/min/vs/basic-languages/pla/pla.js",revision:"18ce470ec7a3d7cbdb83e580e953a5ce"},{url:"/monaco-editor/min/vs/basic-languages/postiats/postiats.js",revision:"105cc086247db4d1af388a75451c5d8b"},{url:"/monaco-editor/min/vs/basic-languages/powerquery/powerquery.js",revision:"58818395d46928e863ec229c16d42978"},{url:"/monaco-editor/min/vs/basic-languages/powershell/powershell.js",revision:"2d965b1f2359ff170edd9635e096e9db"},{url:"/monaco-editor/min/vs/basic-languages/protobuf/protobuf.js",revision:"bfae97593705d153eba4131f9ef99cef"},{url:"/monaco-editor/min/vs/basic-languages/pug/pug.js",revision:"c2d04d01d45474249a7fc78e25aa53f7"},{url:"/monaco-editor/min/vs/basic-languages/python/python.js",revision:"8601f5c91808d5988b49c5d00f76f6ba"},{url:"/monaco-editor/min/vs/basic-languages/qsharp/qsharp.js",revision:"de87274d74782c315a53dff810904110"},{url:"/monaco-editor/min/vs/basic-languages/r/r.js",revision:"a3999866aa469a4c89dda8adaf35fac9"},{url:"/monaco-editor/min/vs/basic-languages/razor/razor.js",revision:"a94fe0478c1fa5ae18f8639b816dde18"},{url:"/monaco-editor/min/vs/basic-languages/redis/redis.js",revision:"f91e4dd417eda6d88cd6b508b8ee55e4"},{url:"/monaco-editor/min/vs/basic-languages/redshift/redshift.js",revision:"28b966af060755f946e655ee20d7ddc3"},{url:"/monaco-editor/min/vs/basic-languages/restructuredtext/restructuredtext.js",revision:"08d2c5d557a35472b213f21c2fd0ac97"},{url:"/monaco-editor/min/vs/basic-languages/ruby/ruby.js",revision:"d87bf57efc90bf7e6c303874129bc770"},{url:"/monaco-editor/min/vs/basic-languages/rust/rust.js",revision:"cdcbece34c3f3bb86780bdedce055f13"},{url:"/monaco-editor/min/vs/basic-languages/sb/sb.js",revision:"d47e86586abf2b754dfc133d07cf7521"},{url:"/monaco-editor/min/vs/basic-languages/scala/scala.js",revision:"970baa4b7a1f79de1422027f7c5e6817"},{url:"/monaco-editor/min/vs/basic-languages/scheme/scheme.js",revision:"9828a314b5091946064559c41bec96e4"},{url:"/monaco-editor/min/vs/basic-languages/scss/scss.js",revision:"bc6fe9dee54fbb04ef060932d2fe0854"},{url:"/monaco-editor/min/vs/basic-languages/shell/shell.js",revision:"8fd01798b7d9ad7fb9f661bbc0d026df"},{url:"/monaco-editor/min/vs/basic-languages/solidity/solidity.js",revision:"705e4280a876a3fcea0ac49dd9f107f0"},{url:"/monaco-editor/min/vs/basic-languages/sophia/sophia.js",revision:"6b73ac38ad86fb78de1d2c1ec3670f26"},{url:"/monaco-editor/min/vs/basic-languages/sparql/sparql.js",revision:"78632bbb26047690816406af7449cf30"},{url:"/monaco-editor/min/vs/basic-languages/sql/sql.js",revision:"9cecd88fd09a4e11ed9e0bc56562f0a0"},{url:"/monaco-editor/min/vs/basic-languages/st/st.js",revision:"b453dd23821285b51f9825e3814a6d72"},{url:"/monaco-editor/min/vs/basic-languages/swift/swift.js",revision:"ed18a6d3f0f872737f32c7ab9380122c"},{url:"/monaco-editor/min/vs/basic-languages/systemverilog/systemverilog.js",revision:"8fb8901823bad2bc04b2cc0526cae902"},{url:"/monaco-editor/min/vs/basic-languages/tcl/tcl.js",revision:"288258358a176c0941e17bd20add74ff"},{url:"/monaco-editor/min/vs/basic-languages/twig/twig.js",revision:"e19f93fc27d0721ac9247c43f9769436"},{url:"/monaco-editor/min/vs/basic-languages/typescript/typescript.js",revision:"db93bf1ffac50be11d2179ba4bc3e010"},{url:"/monaco-editor/min/vs/basic-languages/vb/vb.js",revision:"5ca37c7d4f93b399309174f43983bf2d"},{url:"/monaco-editor/min/vs/basic-languages/xml/xml.js",revision:"a185e53d12433baa97a7dce11935a5b4"},{url:"/monaco-editor/min/vs/basic-languages/yaml/yaml.js",revision:"9adbc765243e4ce9be6058d68b72e8cd"},{url:"/monaco-editor/min/vs/editor/editor.main.css",revision:"110f8a4cdc2c399becde1c26d78dc127"},{url:"/monaco-editor/min/vs/editor/editor.main.js",revision:"317e5767d72f51cce36669ce45ba6c17"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.de.js",revision:"89578f92bc8937fbd0e1f13627883eeb"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.es.js",revision:"3ce745a3923c37c3d32f796d86801bae"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.fr.js",revision:"55a5579a5e0b411720655cb9b850c9ab"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.it.js",revision:"a9e1e6c7dfcfb07b3edaa3ff1be97290"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.ja.js",revision:"6feb1f13c6866e4e929b3a9a3b80577a"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.js",revision:"9a015f4c5a3d5be1efc4f280bb14a39e"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.ko.js",revision:"73eaa6dda11559007e82f640b69294f7"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.ru.js",revision:"d52bdef21c9bd95611830bb050aa6dcd"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.zh-cn.js",revision:"93d1819d4b9f975c1b46b24311faf7d1"},{url:"/monaco-editor/min/vs/editor/editor.main.nls.zh-tw.js",revision:"0d3b5885f92d8c01f938165a5f3ae827"},{url:"/monaco-editor/min/vs/language/css/cssMode.js",revision:"efbff97fd588bce88e0d108f684f30b6"},{url:"/monaco-editor/min/vs/language/css/cssWorker.js",revision:"1f9dc1968afebdf34f8ee322af79a247"},{url:"/monaco-editor/min/vs/language/html/htmlMode.js",revision:"edab58513f33f641b3e83d9fa5dd1a5b"},{url:"/monaco-editor/min/vs/language/html/htmlWorker.js",revision:"de8dae1407814ef173c94bb471ce69fe"},{url:"/monaco-editor/min/vs/language/json/jsonMode.js",revision:"e907f65123a1de5a0b4d372f553cbabc"},{url:"/monaco-editor/min/vs/language/json/jsonWorker.js",revision:"3353acffecb55104c1ce5eeb782ec2ea"},{url:"/monaco-editor/min/vs/language/typescript/tsMode.js",revision:"f28b23ce719bc6dd4c50bf4d29398499"},{url:"/monaco-editor/min/vs/language/typescript/tsWorker.js",revision:"9b65c380146cc20e47576d70edeaf4dc"},{url:"/monaco-editor/min/vs/loader.js",revision:"740cc2480d8b3c4b5e87f409debdaf4d"},{url:"/preview_2.png",revision:"63d2ba797be45e79022adbf6dce57d35"},{url:"/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
