'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "5e1ec1f3ce95a5f29bae8033680b8b43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "6ccbbd1a5a6221960f0f190d0dcd5c3c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "884a867069e54493942973c6d734735d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4189f09345f26679bf4a6c4610c8abf5",
".git/logs/refs/heads/main": "f4734bb25a3b114ea538c76076e536d9",
".git/logs/refs/heads/my-feature-branch": "4c6e7d598af6f923d8f6b3c2b0b42612",
".git/logs/refs/remotes/origin/main": "ccc86bdf71c7d963a4503288f5d17c3c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/5322e44991ca3099fc3a78aace0a58ddd56d51": "17bd5aa5fb7e1c18bea6a0c1b1c3a23c",
".git/objects/07/5820a12dc09b8f2bd5f03c0a056bff18d7aa34": "54a9f7d5070cb84ac3db065365c8c927",
".git/objects/17/06d2d911c4232145ad0cf1e31eba1f8daa1bb1": "f877db5f1790cfda4fedf93a7c4199d0",
".git/objects/1b/dcc945deaf946d0701b1e0a3553d115d483948": "490b581efcddf8e2579a48a702cff78f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/5ce5cd38f3f58c90ab49badce04ef33b95d93e": "a81fa6a9d7395afcfa6ffb5b68f3488d",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/9d3c797ef12448584583fd4540158bcb5ca83f": "bd156cae6805319add5f1e5532c6007e",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/2d/46e6b072da8ffebd0d1505f622be3c19feab93": "442e133fc234c45c0ba8d79b1b6cf682",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/42/f2c929ad173a8ed9a8b483389bf9978e713468": "d445e16a0e23b8facac1e7731d2ba42a",
".git/objects/43/c479777c975be16adacdb674acffc4cf28b81e": "a9bbe71612234c8c93b065265b11115e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/66c44de6307d08cdd7e53baba4bb4b6de0f17f": "eb619ebdf82fd1708efd05d6f72d53fe",
".git/objects/4e/00c7a37a9920394327755edb5c55f4530b47aa": "ca984c9c07ba9bfd94bb2b365e7d7634",
".git/objects/51/1e5ddaa52eedd5a7922a522af14cde68be8708": "1e362fe5bca9e3cfb006aa89dfc4ea61",
".git/objects/5e/ba85cf3754fb77bbea105447b5b3c8f1d7aa49": "8c72ad4ca444940532e33d0cc04f8c44",
".git/objects/60/9f9f8ae24a6c5f14ee98368889c4a6304d33b8": "3b76b39441e25be9d2d8eaf47b599cc5",
".git/objects/67/8fad1d191a70cb27c3e434ae1622adf25a3d10": "8ce625027cfd8fc690b70d2ad192f420",
".git/objects/6a/9c74d9e3c8fe1204f07eee5f42e9e942852502": "0bacdc5559a8f3f9c45ad53eb3a3ac9c",
".git/objects/7d/1086b0c6534ecbdb7c85ea5897478498982402": "b71c7c7a7becaf47ee5eeb6725315f1e",
".git/objects/7e/7fd4e82ba8cc16575cad912e722586cfa7ef91": "a197d0c86ae0aa16b9f9073ae93ce79d",
".git/objects/80/705430e590deec8bb609dee7c38940ac457535": "bd184cf5eac562451e411fea1fd409e6",
".git/objects/84/97c772a7ced87ab431479c5d9b56b69bd54a26": "75ce7a8d2539531314b8fe973ea0cc35",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2efc0e2036139b8f611595b11e3ba7609374fd": "befcb639a317984990a753edf95c8e6e",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/d8fd4708821e86d366944435c652d4e58ba6fa": "ab234c445e1fb819c650031ad5909dca",
".git/objects/94/34e3bd2f226b80d3d2ff640abff03984d83e84": "5a525cc1b464d1d3bee57fee6d0bb846",
".git/objects/9b/7c32e0e1527b3ae9e9ad37fc2d027a9d850d1c": "fb3d8474aa4ffbf42f740c39663b6ba8",
".git/objects/9f/a612fff9979daae81e2e7708ab0396b89b376e": "95b69f75c64eac53c39706163309e5db",
".git/objects/a3/e25ea91c09fc4cfc1fc1762738b190efc13ee4": "0c47b46fa5d2ef611b6b86e342ad8db7",
".git/objects/a6/5a7c46f49bfcb62f07ab947caa1a4f92f4fe4d": "8db81ef14f2c05580194572cb1f98d16",
".git/objects/a7/06bdd2b2900985dfc6c86960d8b2857215c78c": "b757c31659773f0b4c6fa4779a522495",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b5/27bb6e2ea66d814ceaaba79eca9f183b084d56": "217bf626aa9b481058c3584b36cdcdf2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/46806a4fe22f63af633f7d993610f992e17f2f": "81f87dabd6bcb8324dd8a3c929331de6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/fb7fdc1943d92cbcdb2006aa19a05b16a7f3af": "84c1f95ada9109d6d787f045342d04be",
".git/objects/bf/5906a2c62f1b89977cd3013a53a6023c475fb6": "42b293c2ddb846c07543d5b3a9522680",
".git/objects/c4/c6c56721e5ad031aa6bd92cf412c1414f69fd8": "146e0be355c421f0da9d67820c64db38",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/9951c6a85439492ca2d1726ded239043a5f223": "069d2adb7a8e6619bfe3cc9e01c8d358",
".git/objects/e0/6f7a991fe8ad4b86a272f90e4ae2a2c18a5ede": "ac82b4373454dcfca3d7f4bdeb5d24d8",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/454ec4e65113ddd021bbb63c4221f3acf94952": "d0fc5b16e0166fcb63598c8e3dffa23c",
".git/objects/f0/e7dd48638e18a4bac647ce94e8584327c75ebb": "cb3fe916aed452dd2e9261465db35442",
".git/objects/f9/93c72e56f450372e87e7a132410b0c071aa7f2": "39e8ebe69fec790ccb55f1b0472cff92",
".git/objects/fb/02b5aa30ca5206a44162c957ee2a5d824ab6fd": "9ebefd5245a473ee12451f61641e1504",
".git/objects/fe/9f78fa47ee605d378f0b67d8ac757cb607e9eb": "277b6b8f327472ce122a1b55f08e34f1",
".git/refs/heads/main": "40db111bf376fa60bbde2305021b49e0",
".git/refs/heads/my-feature-branch": "40db111bf376fa60bbde2305021b49e0",
".git/refs/remotes/origin/main": "c0d451f3b3e067102683b8df61aa2fd4",
"assets/AssetManifest.bin": "5db8d35d282d672b8d899bed7c8d0d69",
"assets/AssetManifest.json": "841d3925f647297c3c0f96b4cb03ca43",
"assets/assets/images/chat_logo.png": "8c46b0e77a62d3d6e097b0f9ede355f1",
"assets/assets/images/doctor_png.png": "a38bcb49e0057c615d47d01eae352bb3",
"assets/assets/images/mind1.png": "9e892030775e297ccd426c1dec255452",
"assets/assets/images/neon2.jpg": "0beee9a496b30779aa07fc05045cccf8",
"assets/assets/images/openai_logo.jpg": "6dfdfbfa502ec22ebf5b1e7e7b9109d5",
"assets/assets/images/person.png": "dc1bcece73dedab8467fc1a6e272ec35",
"assets/assets/images/user2_png.png": "891f8bde1f29df7afb07c0e7f342e1dc",
"assets/assets/images/user_png1.png": "8984f92a1030e1ae7c83ef2ad205749d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "460950d7958fb4a9afdb534b7bac9889",
"assets/NOTICES": "aa9087240d2c2cfca7019066cc9fa4c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "e5b1f72690096075e25fe1f481cb6ce6",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "347841c04107bb5a17164bee251d8307",
"canvaskit/skwasm.js": "831c0eebc8462d12790b0fadf3ab6a8a",
"canvaskit/skwasm.wasm": "2cb965595f656f0c58ad6bb5988f8280",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58672302d6211a69244bd1837adb3527",
"/": "58672302d6211a69244bd1837adb3527",
"main.dart.js": "ef302a142b1e513c2fb42434d8a9f0e9",
"manifest.json": "bfcad4fd9cf7588e5b4ff399178b4137",
"version.json": "110e9e3508a12eae7c7df8d47fd27a08"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
