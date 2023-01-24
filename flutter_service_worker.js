'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a43dc49220e6f531a7998cb2035776b4",
".git/config": "835177a0a12bfefa934a58271bf8658e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "68d395a6ac2a6ac114f899186173e250",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "156dc9e841f1c8c823675184b4f48e0e",
".git/logs/refs/heads/main": "156dc9e841f1c8c823675184b4f48e0e",
".git/logs/refs/remotes/origin/main": "0cece7a7666068def2d1c1dc017b6f2c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/10ee055509d1740e7d68b99a6cd93c99516724": "b14577be094f25b37e737dfa98320d93",
".git/objects/0e/5809dc6c5feb865c65c84b3c14155949c4692d": "03516b02ec6e5df6da4b1994000645e5",
".git/objects/0e/e48c759f9c30baa62b3a2548d1cfe18753ea4e": "38bf89a7a9113116fc9c560bbe71321f",
".git/objects/13/9dc5a24dc97502fb9639f11d0e31b5ad126ba8": "c371d1dd42d7aebdff27e73942a2f8a7",
".git/objects/1a/9ddfe14cdfcf339195171caf161b5240c199f7": "45e5375015cc6d336c7e102cd08d4edb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/37f93bbb68952f718b0ab0a5f14a65677397d0": "d1cf361841e24a665ce2111da669ef88",
".git/objects/1f/a16d74ac43cff6e5b5c2f59f00d8bf64cf4ee1": "36e893f07a124ab898d496ac775759f0",
".git/objects/21/2e690aa31716a7c5b7fa0356d96857a322ac41": "f98dc2a61b4cbcfb8334832abffeae14",
".git/objects/24/80b285ad71c9f389318a1959294d45c0b98e2a": "ad4053f2360e9c29c2adbd6539c3d9ae",
".git/objects/28/1acbcda2ddc61a8266d339f80c136a192b938f": "871c74831e31fa7d82b98d34c64ec9b8",
".git/objects/28/4f6107660bcb8502d1d51e04f74e03b8ebdade": "c440c588f5a711bd6c5f97808189e743",
".git/objects/28/e2818cd569772d8305f08608e497e14892f011": "c4850df8fcf9ef40a7c529fa7e22d575",
".git/objects/29/6d1ff1a27d0825b4d97afa19525a7815798138": "7918ff7d595d8291db21ae7e3319fff6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/ea2eca5bba94c68f3711154612a4026228daea": "12736f96ead2eb1f59b9e156ca012e13",
".git/objects/2f/ba1549587fae86f06c1b3a44cc085d3f4a340b": "8b10e30651d7c6f0d61518480159e0c3",
".git/objects/33/83bfefd96dbcbd165c12047d94bd7eb02d8fce": "f837052a58456bddaf64cb1832e07d09",
".git/objects/34/f47f31ffbf5b23236fb53ce99d1a6300437084": "5c0433d4856cbb4becfbd72057c423e2",
".git/objects/3a/27aff78d52cb71e7b649a374e0eea2b4698801": "58034b873732548fe79d03867a831918",
".git/objects/3e/a1554dbfdad80ea5f906080b80137e6d416114": "502d377332e5b9d98b4ddc59ceb98d21",
".git/objects/3f/4cc8385c8e16e7b7fe3fad448e0507cb2dddb9": "fec6e749e6396257f618d28f96fc7a0d",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/c975eff1c6229f0e9eb94e48ddeab2a7dc25f7": "0147564d2b9daaa31b828b57f4d7212d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/da2f9f067489896dad9a6f02949ef85bcad9da": "205955be9afdc9acd09bce6aaab704ad",
".git/objects/4d/212b16d594de9735e036718eadde76c7f908d6": "5980cee7eafcfb24a84fae99eb40df6e",
".git/objects/50/1b666ec04d962b664ca0412640cab57ef0516c": "12a95699096847776b7ab67b019818b1",
".git/objects/50/76ce028bdb90be9e8ea7040252e1dcc583fbf9": "347908a558d38c5076d3f5e6b40188ac",
".git/objects/61/66fde6b0404057396519d136ccb43db89f1598": "973944b7548aab7b8c7ad14ddb9a7611",
".git/objects/66/a0212518b37aceed4b90aa28de478210c7bb6f": "dffc73e47fc2df12be7eb6948be8a87e",
".git/objects/69/ef558d28a5559f69f6446b782b278447d10861": "1e4d343f61723603c86806e9e15cae58",
".git/objects/6f/e63f1a6308f427b74256767a38b17da8bf2620": "801651c015d08c7d7bba35240fcb521e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/676643891448f1ae599fb17118eb36a02309f3": "3854910a6cbf0cc28e17d455b5ad8d57",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/81/e62f7305fc627356159190b70addb87f48f447": "9b31378b31af4a2afd6462a9fc10f5a7",
".git/objects/88/336638a7c8d565f7bc4093b8eae8f4d0067872": "2a68c4d082cbe329497d3054b960eaa0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a85a82384fa6391d80d9ed353830a1162bbdeb": "9ed9b686ff8aa3c45e161b3b74056888",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/6c3753e376337304c58697706fac77fa0f23b8": "4ac5a6465a647de22f80da7c662ef0b4",
".git/objects/8e/da65b44bb2f03e2f2c7f87aae3fc29734dcb0c": "2014a91944d20dc8357f6112dbb94efa",
".git/objects/90/098a0bd9d8270cb082475675b7ac73a06e61f1": "96a2c5291e17e0d74b31f3ca37151b85",
".git/objects/95/c16b7c560743f1de0e950d68e6929301a11f4e": "2cd65cd930e8a85630c55e8be97bf745",
".git/objects/96/f4dacea01f2fb7737439813de9faa7bd38205e": "73d259668b5eff2138f6c820fac2bab8",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/6b768647ad55e03914e25a16525426d99ef1eb": "e5b0f5262bbb24e3b54c1a9a89f45b77",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/3f596e8995efbbb966cce71da84ad0bcb04b58": "cd8f33bbb0cfc6d6c1e99ff5d335cca2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/180576f6df979c94f9ac04545f5d451df9f727": "92000aeb6161cf4ed5317349bbdbf696",
".git/objects/af/c4f843305c1d415e5f2a0eb47cba896b95cf52": "fc9598106f2cf9029e4381b5e706fc18",
".git/objects/b2/3c5cc57afad9fe0a11df4f281f861bb6f096d5": "dcf2d3941ef511b1cdebfd2e1f2d617f",
".git/objects/b3/8c4e94f1817fbaca8b3be8d6c5cecfd29bb3ea": "92bbb3b86c759187211008f01fbfe826",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0cc64fe4fc42d441f3a7706a5566ad7394c5e0": "ad145cf861dfbcf04f6349c2b6051380",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/b774f625df72350225c4bf6815be1916aa9140": "db7fce966cf63d31a7027b1116e5cbcd",
".git/objects/bf/7e975fde4fec98ded6a534d1ec1c7dac4ee945": "07bf0350d0fd89504d71da34486e172b",
".git/objects/c5/adeeed6d2527689e7fa1e3b16bde189eda1f68": "a1b6ed67b5073501f69cf7f5829654e6",
".git/objects/c7/33345b31b70432fe1c13f9eecb6108b8398208": "7d090ac49e3d2c2f12cdd3abfcd0f8b1",
".git/objects/c9/a1f05680ed4f40366817589e56159f3f5633ac": "93d64d034ea65ae75a84e35d65fc7997",
".git/objects/c9/ac520e2e9c522fe2dbfc1165413b394b95ae11": "e55f693bb8145e71e3f3469281a4c4dd",
".git/objects/cb/0b0e12deeb56a8db6453aa94be5cb41edcc017": "0c3d6e59aae2aaeae529299033f2d2c4",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/8b7c94efe9a0f7622c1a48ce8286e51da58554": "b9d7842e6d61d77eac240709a0e4db0d",
".git/objects/cc/a8920acc55c9e94aa657537c5033a129b3d2c0": "c37e7ad5b5053b8b161b0a3bd202cf07",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/b7f4594d36858d5008aa22586e3262e9b0aed6": "2b25365d3ab3d331e67898c5a2411418",
".git/objects/d1/45c7eb07eaf0d59bd377444c045f9db131cd2c": "e2b7daa11c2ec88dddab574111aa3ca1",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d4/18d6c34d5f67364141b69f9fa8723a932b01f5": "e67944180ee35d5494cdd392406788e1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e81347902f1542d42c5d9ea86fd3f54138cc26": "dfd10270abd2175a7ae7aaafdbeaea73",
".git/objects/d9/0ccea22e813e3807416776452b68d25f6c1f27": "f2b7b8204c6cf1183ce09c6bba1386c0",
".git/objects/dc/389159f558d43f507ffbd4c1f91641418940a0": "54fc9a4584f103cfb7beb058da03da0c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/c2541e5d54af2b832a169478978867f5abcc09": "fc0f63333209ebd5d4d04da9eea4b6f9",
".git/objects/f0/e72a884836f9f51e0ce1c8edaa5f5c5d377784": "47b17933fde4fbdd4d9e737ada04d2fd",
".git/objects/f2/df2eb11033aae88bd24edea296bbe394c74888": "6261b3ccbc17444696071a8c6b0a5d76",
".git/objects/f4/8bfda969474a4450efe5975e52e36857e19682": "f4e8afa936498385306db0b835c6afc4",
".git/objects/f5/e0335824cd19cded55fef52c0c71aad4e269f9": "28770c8498a00c088a1c3b8647c21f51",
".git/objects/f6/72ad83c5ee961b39cf064b95d4f0aac52a466d": "359cb552bb0674ced0c2423a3dca56ca",
".git/objects/fd/561a30d41b8b70683c3eb7b71e1a84019bbc2c": "281d2a6433cdb8d70ca43a852ded2735",
".git/objects/fe/dabeaae1f9831b5e502252cd774c264675fe61": "41d84f0ab2a920636a39acb56156009c",
".git/refs/heads/main": "c1213329a8e805e6cf0c7ffe330da254",
".git/refs/remotes/origin/main": "c1213329a8e805e6cf0c7ffe330da254",
"assets/AssetManifest.json": "6aae20702ad53a450284e0eb4c2d6091",
"assets/assets/data/Krishna_Stories.json": "0fc67779d056d72c0b07933b394fd267",
"assets/assets/images/background.jpg": "891456eb5d1593c15591fba882124c65",
"assets/assets/images/bird_on_tree_portrait.jpg": "958455f3b59ffdd9a6f988b93e70ac7a",
"assets/assets/images/blue_hills.jpg": "dc7b7c4c24efc36d19ce9ca6328faef4",
"assets/assets/images/brown_hills_portrait.jpg": "086a5f1761cb664ebd8ec69a330d6a97",
"assets/assets/images/demon.jpg": "178073dd4c12dd395941d21ef639388a",
"assets/assets/images/demon.png": "71e3ad6001cf71904ac9d69b8a52dfee",
"assets/assets/images/saint_meditating.jpg": "2e4be4380dba631751666cc6ef494a6a",
"assets/assets/images/saint_meditating.png": "2065ce4be8298204f523d21fc835555c",
"assets/assets/images/saint_meditating1.png": "2065ce4be8298204f523d21fc835555c",
"assets/assets/images/temple_carvings.jpg": "72dfe04489862f805260f32ec5db6ec3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/background.jpg": "891456eb5d1593c15591fba882124c65",
"assets/images/bird_on_tree_portrait.jpg": "958455f3b59ffdd9a6f988b93e70ac7a",
"assets/images/blue_hills.jpg": "dc7b7c4c24efc36d19ce9ca6328faef4",
"assets/images/brown_hills_portrait.jpg": "086a5f1761cb664ebd8ec69a330d6a97",
"assets/images/demon.jpg": "178073dd4c12dd395941d21ef639388a",
"assets/images/demon.png": "71e3ad6001cf71904ac9d69b8a52dfee",
"assets/images/saint_meditating.jpg": "2e4be4380dba631751666cc6ef494a6a",
"assets/images/saint_meditating.png": "2065ce4be8298204f523d21fc835555c",
"assets/images/saint_meditating1.png": "2065ce4be8298204f523d21fc835555c",
"assets/images/temple_carvings.jpg": "72dfe04489862f805260f32ec5db6ec3",
"assets/NOTICES": "479f552121fa6f9a969f081e3f527bc8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9bc4b77b36d7be86ef37109871a1359c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "231d1a421a7dbe7a60819bc3a4ad1cb4",
"/": "231d1a421a7dbe7a60819bc3a4ad1cb4",
"main.dart.js": "09c44f02cd6a1ea71a4502d1219b40c9",
"manifest.json": "c076c323f5dfd6e93d7de6fd9bda7e1c",
"version.json": "7e2791b948e108a4438c33c417cddf7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
