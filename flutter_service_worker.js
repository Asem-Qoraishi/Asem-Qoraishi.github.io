'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3e2c04522af156f1c6b7a7625a67caa7",
"assets/AssetManifest.bin.json": "7028d8e45722fb173408cf518103bc47",
"assets/AssetManifest.json": "f9aea1cb7d6d8937ee7b9188ee78bcb2",
"assets/assets/fonts/Vazir-Bold.ttf": "8cea4a72681429a50b77de1d8aa609f3",
"assets/assets/fonts/Vazir-Light.ttf": "00f48b2a2bde26034df6e71ef3efadfe",
"assets/assets/fonts/Vazir.ttf": "398b39dd0060814801cd1cbfe43fe0b5",
"assets/assets/icons/add_to_cart.svg": "1b88a63f92bea03889b46995e13a325b",
"assets/assets/icons/athletic.svg": "02612a97bdbfacc8874b483271bec0d8",
"assets/assets/icons/cart.svg": "eed117f9e84d159af5d83905b5613f87",
"assets/assets/icons/category.svg": "9ba0d720fbf4a96a9925e8af77f108d4",
"assets/assets/icons/clothing.svg": "b9157cdae029d232e15bfc45b0577e70",
"assets/assets/icons/delete.svg": "76ed13ce2c1518f083a5ef991e0e249f",
"assets/assets/icons/Donut.svg": "7881641b31b1a5ee28e82fe3a0b5739c",
"assets/assets/icons/drawer.svg": "42f4aac03f5a7d2bc26d1f2a3cd30e5a",
"assets/assets/icons/electronic.svg": "15a8bc53c050fa633d8b94f84ce23bd0",
"assets/assets/icons/filled_heart.svg": "afa755a7e14b816f1104c7efa71dc498",
"assets/assets/icons/google.svg": "94dcb304dec10f6690de1268fd6fd9ad",
"assets/assets/icons/heart.svg": "ef3416b25faf87a000f96784e73571e5",
"assets/assets/icons/home.svg": "f8bfe47e596a7a7c9d71a252e86b167a",
"assets/assets/icons/home_appliances.svg": "3bc367323e04438dc3e1396e1dba55db",
"assets/assets/icons/info.svg": "db25576821c0d935a15596e24b002498",
"assets/assets/icons/kitchen.svg": "0f2e1049b34f8881b66171b22003285a",
"assets/assets/icons/logout.svg": "f90f62cdc66bcadbed751cab9f98fdf6",
"assets/assets/icons/message.svg": "615631d3b9f3ae3acc12c7be1e16ad3b",
"assets/assets/icons/notification.svg": "2f00a4f346f1481643d87d44990a5cce",
"assets/assets/icons/profile.svg": "958afd23763c08a4aa308bff1c0bb6a3",
"assets/assets/icons/profile_background.svg": "3a85ea1b64e3ea9fedbc8486e5583b7c",
"assets/assets/icons/search.svg": "0fa510e32625798c4f939e7cbf627bbf",
"assets/assets/icons/star.svg": "cce906f0eafb474df0126f207ccdc4b7",
"assets/assets/icons/stationery.svg": "676ed24b9b1df4176ec4c6f5b36a1f31",
"assets/assets/images/head_phone.png": "e9a0903348e5513ccb8d360a9a688d44",
"assets/assets/images/introduction_1.png": "04e557fab34322fb3bc6d8b48477e028",
"assets/assets/images/slider.png": "f07601c4276cac2993a75840306b81fd",
"assets/assets/images/slider02.png": "dec27ae98537b00535f8aff9df359c8c",
"assets/assets/images/slider03.png": "5945e8cd8b3713c66e66a7510dbe9f0f",
"assets/assets/images/slider04.png": "54ffe5ed2678ceaa741bbef521fea28e",
"assets/assets/images/smart_watch.png": "c7e3d41447ab9c5670a572cfb7444039",
"assets/FontManifest.json": "e34148d8c0354dc88a020a9e126c13cc",
"assets/fonts/MaterialIcons-Regular.otf": "fb98d253a6593ff39f8dc4aed45a3667",
"assets/NOTICES": "337f6e3de1e10a92283c2f3b94792b63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "df7fcbd3248f934eb9f9d8ea0e1b4eeb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3f950ba1c261157a2093131430937f3",
"/": "e3f950ba1c261157a2093131430937f3",
"main.dart.js": "07a1760136d2410abed229b96b6b4072",
"manifest.json": "83db267d8fab8748db80eb808fa14bd0",
"version.json": "8b64fd550041195fabd3aaf360bad87f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
