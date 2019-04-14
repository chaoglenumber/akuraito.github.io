/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","09d678cbffb941b8ff064acff18d144b"],["archives/2018/11/index.html","cf1d0d5ec29cc56788dc661d9de145c5"],["archives/2018/12/index.html","8404177e5a85696663f05ec8473affe3"],["archives/2018/index.html","54f912ca42b91f9584c3fa7082575fb2"],["archives/2019/02/index.html","50a7671868fbd83ed26b03c657e91af3"],["archives/2019/index.html","115af77417699ff11bd075db28176b65"],["archives/index.html","dc6069de633f858f0465006535646f3e"],["categories/index.html","98ac78893e54271652238983811a6814"],["categories/呢喃/index.html","76ed2c26b7b785190a817bf11af0e69e"],["categories/折腾/index.html","632b4db77ea87f1e88ad5b6b717e6d5b"],["categories/造作/index.html","be69fec6f025aa18284f9c638b923e03"],["css/main.css","2dd8aeffbe73c3aa93437057f78d2c67"],["essay/2018-11-11-hello-world.html","6b29faf433c390306bc4e19cda6fbdb1"],["essay/2018-11-18-new-starting.html","23a2b085da7d6ad921e813996be8b480"],["essay/2018-11-19-winter-trip.html","fd0a96aaae5b9ceea0e1ee2aa9f13d51"],["essay/2018-12-31-2018-y.html","2a3ec92a87949d1692794cd9799476b6"],["essay/2018-12-31-wordpress.html","24f7457c07d74be0fe73eff552fb9e1e"],["essay/2019-02-05-hello-world-2.html","df0230d5bcd7589b9004c13efd0616a9"],["essay/2019-02-19-add-crisp.html","a1e40010b9cc880690a2f7c38e869bb4"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","62e6a4e880d031555fbb82ed6ff3d316"],["js/affix.js","e2e86a427d92aa679215f53cda912189"],["js/algolia-search.js","222aa6469bef53233bb00c35a7d93a7f"],["js/exturl.js","456c8a3d1cdca357857688d0173e8fcf"],["js/js.cookie.js","e3401a033a5adced46ea34a22e8abf09"],["js/motion.js","ff6f47a100d7d3ca52c60aef41c3f317"],["js/next-boot.js","d75f18b6adebd21fb265373f4659e168"],["js/post-details.js","deb68f8e17f2435907544f96a2d1db47"],["js/schemes/muse.js","120d1e87f074983ecca71588562aec04"],["js/schemes/pisces.js","487ea39b33c133af1fd969c7f6c53eb9"],["js/scroll-cookie.js","9ed5759271144adce616159af4b2f4e9"],["js/scrollspy.js","f5debe571e71c3efaf4c627af5fcea3a"],["js/utils.js","a41f1b7d0080545c7258f9fa50d7e766"],["lib/canvas-nest/README.html","dbd1b3691b53fdbd7ca12aa2d93cbefd"],["lib/canvas-nest/canvas-nest-nomobile.min.js","6ad7a6211157ec95915be4edb59be556"],["lib/canvas-nest/canvas-nest.min.js","7fb69bdc43b98612703c68c7bffc3399"],["lib/fancybox/README.html","7b4cf0e4464dc749a010ad65534d391e"],["lib/fancybox/source/jquery.fancybox.css","f932c4d113e6d86e2c5e20eab91f3143"],["lib/fancybox/source/jquery.fancybox.min.css","9cdec1a78a84d803dcb5345559556603"],["lib/fancybox/source/jquery.fancybox.min.js","1c7b7c5b4681673a480de705e024b7e9"],["lib/fancybox/source/jquery.fancybox.pack.js","8ce220ca7e13fb9b79d6fa2b775c0f53"],["lib/font-awesome/css/font-awesome.css","25013a488eb90500a22a7a8c64c4b7bf"],["lib/font-awesome/css/font-awesome.min.css","4fe46a3a5f2caa5b47c5b6d14a1890c1"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","cff8517a076bd062a836769ec69f81c8"],["lib/jquery_lazyload/README.html","8cc710055b1dbcf39445952295d781e4"],["lib/jquery_lazyload/jquery.lazyload.js","b99aa8a1320dd2f4b1a713e835b3c93f"],["lib/jquery_lazyload/jquery.scrollstop.js","c596acad77157243eebd4f24c367657b"],["lib/pace/README.html","877b45b61c661496f5a2ad29e1573eb8"],["lib/pace/pace-theme-barber-shop.min.css","6633c95cd6a4ffabe92653d9a91b22f4"],["lib/pace/pace-theme-big-counter.min.css","10107acf751ee3579f722a66e407aa7a"],["lib/pace/pace-theme-bounce.min.css","cca878a53e9c453a62d33f3d085b7469"],["lib/pace/pace-theme-center-atom.min.css","d2c1680b817759447cd80c7f5b47f0ec"],["lib/pace/pace-theme-center-circle.min.css","af5986c67f41f8bdda6665bbaea2d088"],["lib/pace/pace-theme-center-radar.min.css","59d2a5e919d3dfe86db964b4759979ea"],["lib/pace/pace-theme-center-simple.min.css","325968d5b602630b0726576a463b01ca"],["lib/pace/pace-theme-corner-indicator.min.css","88a5479669d31a52b2c22d258b705f6f"],["lib/pace/pace-theme-fill-left.min.css","172f50899ece5ec25dd603f5566ba878"],["lib/pace/pace-theme-flash.min.css","3e1fcd2c6bc3eb8ae02acbec11ce667a"],["lib/pace/pace-theme-loading-bar.min.css","7df61e9df80b45cb8d68c43474b3af6f"],["lib/pace/pace-theme-mac-osx.min.css","cadfa9c93e68e175efe5f5f8e1d16191"],["lib/pace/pace-theme-minimal.min.css","43bbea82f06a0652a0714a0130156ca8"],["lib/pace/pace.min.js","33c00863fd83c074e9843568d7f0d25d"],["lib/reading_progress/README.html","eebff22b5f6740f642ee63f56bfff7c6"],["lib/reading_progress/reading_progress.js","07053cd56aea6934a4e6e7e85183bc1a"],["lib/reading_progress/reading_progress.min.js","edff89d0d955f718ec839c1008c90c09"],["lib/velocity/velocity.js","f161e5782a2729afcc0dce661d76ddf2"],["lib/velocity/velocity.min.js","0e83fce9cad36e4db282ea5b7ac074d4"],["lib/velocity/velocity.ui.js","7b6524db7fbd4534a098ef36da5d1b2c"],["lib/velocity/velocity.ui.min.js","d532935e2aa938d50354c3eff09a8db2"],["tags/Crisp/index.html","4f77518d8478c0a025c1af6f35c2b659"],["tags/blog/index.html","dc6a0e0bc48202bdd1bde8292a5b62b1"],["tags/diary/index.html","161865945f7c99fb4d4247f5a8fc5f97"],["tags/github/index.html","9e090d444be809b4fe794e53c113e949"],["tags/hexo/index.html","e62f93ff57f820b10ec2bca0815731ef"],["tags/index.html","d37807c04f51a3bd3a5d9097fbaaf545"],["tags/termux/index.html","65a5a94532d40e9c3f1ddf8c207fa8bb"],["tags/web/index.html","1c9fe5ec632ba052c902383c2a2d79be"],["tags/wordpress/index.html","97ae838f6faf931434964d62935cef0c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







