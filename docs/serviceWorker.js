const e="color:#ff00ff",t=["assets/audio/JeffSteitzer.act1.webm","assets/audio/JenTaylor.act1.webm","assets/audio/RichardBrake.act1.webm","assets/audio/TommieEarlJenkins.act1.webm","assets/audio/JeffSteitzer.act2.webm","assets/audio/JenTaylor.act2.webm","assets/audio/RichardBrake.act2.webm","assets/audio/JeffSteitzer.act3.webm","assets/audio/JenTaylor.act3.webm","assets/audio/RichardBrake.act3.webm"];self.addEventListener("install",(a=>{console.log("%c[Service Worker] installing Service Worker",e),a.waitUntil(caches.open("static-v0.0.1.guid.324").then((a=>{console.log("[Service Worker] Precaching App shell"),a.addAll(t).then((()=>{self.skipWaiting().catch((t=>{console.log("%c/**************************************/\n/*     WARNING - REQUIRES REFRESH     */\n/**************************************/",e),console.error(t)}))})).catch((e=>{console.error(e)}))})).catch((e=>{console.error(e)})))})),self.addEventListener("activate",(t=>(console.log("[Service Worker] Activating"),t.waitUntil(caches.keys().then((t=>Promise.all(t.map((t=>{if("static-v0.0.1.guid.324"!==t&&"dynamic-v0.0.1.guid.324"!==t)return console.log(`%c/*************************************************/\n/*     Remove old cache ${t}\n/*************************************************/`,e),caches.delete(t)})))))),self.clients.claim()))),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((t=>t&&200===t.status?t:fetch(e.request,{redirect:"follow"}).then((t=>200!==t.status?(console.warn(`cache returns status: ${t.status}`,t),t):caches.open("dynamic-v0.0.1.guid.324").then((a=>(a.put(e.request.url,t.clone()),t))).catch((e=>{console.error(e)})))).catch((e=>{console.error(e)})))).catch((e=>{console.error(e)})))}));