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

var precacheConfig = [["404/index.html","c1f5e62ddd1567d620f0ce16179c4b29"],["archives/2018/10/index.html","eb322c1e9b180565a0c1083bcd6ea53d"],["archives/2018/11/index.html","7e444eb6184e0caa72352d4f01b4c9b9"],["archives/2018/12/index.html","7e870065be5372f058e8da16f37e3309"],["archives/2018/index.html","0642f8b4c7b854a7e8239f08dad0f81b"],["archives/2019/02/index.html","241220ff40d2bf93b19d85dc9283438f"],["archives/2019/index.html","575a8415f99111be41190d5145a8c795"],["archives/index.html","baf219295c7cedb7db610ade4c0a94c9"],["categories/index.html","cf5328c64435a2c63e2f60da5956d69a"],["categories/呢喃/index.html","bede598ac58617fe622001bc0ebe7ce5"],["categories/折腾/index.html","f95d11ebfbeca77cc92e807f35622a0a"],["categories/造作/index.html","b5c9650db956bbb849810092c844928f"],["css/main.css","33163a2851ab1002fbdf2a993fa24002"],["essay/2018-10-28-web-build.html","6bd4554a5ae0e4680c8182fcb9daba7b"],["essay/2018-11-11-hello-world.html","35e215c3bf4c3270587326b94dc5e1bd"],["essay/2018-11-18-new-starting.html","767d1eac2cc5d3f7a01c5864bed8ca41"],["essay/2018-11-19-winter-trip.html","52d5f678960842a8f7680042cf22b3e2"],["essay/2018-12-31-2018-y.html","29d71a26ed560f917f8d97d5c870b744"],["essay/2018-12-31-wordpress.html","5ab2c53e199141ed6f55e2c1e2b0a0a3"],["essay/2019-02-05-hello-world-2.html","567ba11a43610007ac4f3fcedfeb6578"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","dec6d7578e2fb3154c477c2aa736996c"],["js/src/affix.js","33db3434c07170729e779dd5ea22df2d"],["js/src/algolia-search.js","a11793810fe60edec68a046003bb7f83"],["js/src/bootstrap.js","27becdc4e9bef40ff824dc64c165966a"],["js/src/exturl.js","583c1a4bd5aa84e1abb025d079dcaa9d"],["js/src/js.cookie.js","9ff6cc133694529b6e12a34e42a8d172"],["js/src/motion.js","f50c78745f6860c844ed8a24b08e2fab"],["js/src/post-details.js","6681ff49c167497d3d3392c7dd888d7b"],["js/src/schemes/pisces.js","b2554cab9c05d85dc1b6cee81b522d1b"],["js/src/scroll-cookie.js","af94606050fd96d848dad8abb46496e9"],["js/src/scrollspy.js","2f79768d973344884940d835b63ab027"],["js/src/utils.js","58aaf252a9d8cefd0d705fba4be1226a"],["lib/canvas-nest/README.html","82ffef4133df70aabc2d14ae8f246023"],["lib/canvas-nest/canvas-nest-nomobile.min.js","2362d513d2d3b7c7b7fbb5e7053928f3"],["lib/canvas-nest/canvas-nest.min.js","470b3076807447e6b7c978b762e2a06f"],["lib/fancybox/README.html","7824f371f44b485e35e20b788920f5c2"],["lib/fancybox/source/jquery.fancybox.css","b98eb140ff0b30be21069d41412a698f"],["lib/fancybox/source/jquery.fancybox.js","9e4f83f247c77c22eee45526275d92a8"],["lib/fancybox/source/jquery.fancybox.min.css","7b05c5cae4b1a3953b48b257d0b4a958"],["lib/fancybox/source/jquery.fancybox.min.js","5f15cb24ce7fee1ea58dc26c985d0a70"],["lib/fancybox/source/jquery.fancybox.pack.js","2a6d97f64b7aeb1b982c5e208d1aed52"],["lib/font-awesome/css/font-awesome.css","cdefef7b1093b3ceddabf72ef63f21e7"],["lib/font-awesome/css/font-awesome.min.css","10b7c07f16d6a3d01ba07ca65c6088f5"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","bffd2bb3724e8f2bde87038c16e1052b"],["lib/ua-parser-js/dist/ua-parser.min.js","5eb4f79cd9d0de1819e7e262fe42793a"],["lib/ua-parser-js/dist/ua-parser.pack.js","0835da0a0970949e27a865c470d0a22b"],["lib/velocity/velocity.js","fcabaeff4b8dea77fb9cf6e1d6312d74"],["lib/velocity/velocity.min.js","92a954bfc3fb6714563993c347d905b4"],["lib/velocity/velocity.ui.js","f045466be21fa83d073cd8f21aadd8d3"],["lib/velocity/velocity.ui.min.js","3119c458fa171e10e0ae91237c5c1081"],["tags/blog/index.html","7ffebe715332f690a56e25c6e676e7f9"],["tags/diary/index.html","d592addaa2401ef09caa3a7a12d286f1"],["tags/github/index.html","ec26334f1d34f8fde62395bab3b76a29"],["tags/hexo/index.html","e0afc872c6bd8b6397620e6b9ab37896"],["tags/index.html","e40d155334b9133dae632721eaf87d7c"],["tags/termux/index.html","a03609f65229ec1860cec0abab59c19b"],["tags/web/index.html","d5a9efebc2e870da13156a159e911ed0"],["tags/wordpress/index.html","b478eddbd404616a568131c0c29c4f21"]];
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







