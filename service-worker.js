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

var precacheConfig = [["2018-10-28-web-build.html","9c75aa818172de84af69d8ad530d935e"],["2018-11-11-hello-world.html","badd396f99a20ba177a98c384e593948"],["2018-11-18-new-starting.html","40b78825efadd598e3cfb65f77131cd4"],["2018-11-19-winter-trip.html","e0a63b26954e8ed547e17b1d90a052cc"],["2018-12-31-wordpress.html","0cc680eb920b797bc240fc7f1043786c"],["404.html","d4f80ab4a08dd088261588eee78d6dec"],["404/index.html","aeac7ba56db84fe0d0d41e27ed663b79"],["archives/2018/10/index.html","334de6b7b334992034ce0f9f1c31c282"],["archives/2018/11/index.html","09eae4a0773c63badf2976fa82c39c4a"],["archives/2018/12/index.html","516b0a35a8124067d92712a8147b4868"],["archives/2018/index.html","d7ed166396f59f74509ce1d05a8fa0de"],["archives/2019/12/index.html","1d8624d6058ec7ae9ada189c66ec38b0"],["archives/2019/index.html","d962b922e418b5666dd677a2676ebe00"],["archives/index.html","17eec3de0d7f85ab6b6a6d1da4177b1d"],["css/main.css","14ab7d3815769b386d83f4892120a6df"],["essay/2018-10-28-web-build.html","38ab2674ad2331ec17c957fa55640c0c"],["essay/2018-11-11-hello-world.html","5a1ad1ac720bf5fd17c00fe133dc45d3"],["essay/2018-11-18-new-starting.html","60fc00e1e6dfb8b9ca9b1cce2c0fb297"],["essay/2018-11-19-winter-trip.html","d6189db0e62fd79e9a59d6c4e3925fc8"],["essay/2018-12-31-wordpress.html","4bd07a4be71336b50dd172028886643d"],["essay/2019-12-31-2018-y.html","18a17ae9eb3431ed063177230595888a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","c20534d291b75a624e44a2eab0def77d"],["js/src/affix.js","d742936b68c4e1085e9e8bb466e6edfd"],["js/src/algolia-search.js","64b71f68a41f52e3c8b15bd916fff9b2"],["js/src/bootstrap.js","fdc737af3c260c3b93b28e62c4382853"],["js/src/exturl.js","bff279db686e743f1e743fea7b6b3508"],["js/src/js.cookie.js","c1139dd7b3ba883b1b01930a454cc3c4"],["js/src/motion.js","4f9f31926262d898066e6bd0455a2719"],["js/src/post-details.js","ea99015afddea394d0036dff914dcc10"],["js/src/schemes/pisces.js","b7783895bb7f9831ef65c46cdddd7724"],["js/src/scroll-cookie.js","d2406a121978d5ba6b6b68af7cec0255"],["js/src/scrollspy.js","dd1e7ca3d9e695c27f15ce372c9748c4"],["js/src/utils.js","a757bb06c0ad2e8acd4ec712c12fe30e"],["lib/canvas-nest/README.html","c15dd8b2374fe428e4c21e746fca6074"],["lib/canvas-nest/canvas-nest-nomobile.min.js","5556d04edada70b1a7069a98bde44057"],["lib/canvas-nest/canvas-nest.min.js","5909e9266a749cd65fe91f0df49df650"],["lib/fancybox/README.html","8fd399f7d595ad64645c460e977141b5"],["lib/fancybox/source/jquery.fancybox.css","d1845606c3462eedf2689bbf1ed742c7"],["lib/fancybox/source/jquery.fancybox.js","06929ddd1abd5f69fef0274cbb365f56"],["lib/fancybox/source/jquery.fancybox.min.css","e16f0ea9b70c6fddcfb62840c6f11d42"],["lib/fancybox/source/jquery.fancybox.min.js","de62c7a333ee62d5349bce3c5ffbd8f6"],["lib/fancybox/source/jquery.fancybox.pack.js","6fc4bc089f046c3d3d237f0703320f0b"],["lib/font-awesome/css/font-awesome.css","04b3aa7d9e7f0cb936b85959cea34bfa"],["lib/font-awesome/css/font-awesome.min.css","fa3055aed7f2e10d7d7e423cfcf8c3d9"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","94d3e42c81716713ad99e86d9720b40a"],["lib/ua-parser-js/dist/ua-parser.min.js","ac846582bdeeef28011defadb49aec72"],["lib/ua-parser-js/dist/ua-parser.pack.js","315c449ee555134ca60703ad87160383"],["lib/velocity/velocity.js","4cbd5151fdc4682bc7868b77f60226be"],["lib/velocity/velocity.min.js","2660c623648e314b3c33fbf16a60140f"],["lib/velocity/velocity.ui.js","2c8389ae4d5866a9d9252db9aa850ec9"],["lib/velocity/velocity.ui.min.js","7b2991f01b8236ad4b012bcd42762e41"],["tags/blog/index.html","fa61b403e07d5be3ccb5dc61d881984e"],["tags/diary/index.html","4a441d782e4eb795eeab6f37492888f8"],["tags/github/index.html","27c4e2ecd91090122961c72173fbd8b4"],["tags/hexo/index.html","a24118c4d8b8ffe7c792631cfbbd64cc"],["tags/index.html","b0b95f3e050ef4261b696bb75d7929ce"],["tags/termux/index.html","893fd8a26f18ab0274e12c87cfdc2ef2"],["tags/web/index.html","ffcbdca5092ebf78893ff2f01295abb2"],["tags/wordpress/index.html","c3d97bd2b08c2c514c10a51fbe8910e7"]];
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







