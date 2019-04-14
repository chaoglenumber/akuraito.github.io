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

var precacheConfig = [["404.html","2024f96c9c1c4bf8863016ec3c592af7"],["archives/2018/11/index.html","cae53695df8ff511f05b70889e77b38d"],["archives/2018/12/index.html","dfebc17962442f03d0be248964e93ca2"],["archives/2018/index.html","54afe629abd5330aea1276cb8eb12362"],["archives/2019/02/index.html","117c833dca781ae36424bd015f667205"],["archives/2019/index.html","b76e6193cc993cd439ed7f690c5f1323"],["archives/index.html","1b05193d0803c480473a988f93601898"],["categories/index.html","b1556abe5a3ae396d77012749539b4dc"],["categories/呢喃/index.html","59b846d217c7ca07c2599a6bd95d37d1"],["categories/折腾/index.html","fad8688821d94bd4051eb36fa01b9822"],["categories/造作/index.html","f97fb1bebd74247d6afea144de125bdf"],["css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["essay/2018-11-11-hello-world.html","b56999834c2b9d2883b70a14d67c2209"],["essay/2018-11-18-new-starting.html","f80205809832d3f9dcf477aa433d7c17"],["essay/2018-11-19-winter-trip.html","76cc620fcde6543c51c1b087f0f26cd7"],["essay/2018-12-31-2018-y.html","2463b2613e5bb5c771ac278d4f309e2a"],["essay/2018-12-31-wordpress.html","949b4d40ccb0b6a518d930021641095b"],["essay/2019-02-05-hello-world-2.html","bd1a43857bb8b875bac68fb766631362"],["essay/2019-02-19-add-crisp.html","63bde44d39473b6fba569846a2799208"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","d40409cf1948fba3f05884344c9197b1"],["js/affix.js","4db11bf77af281c309ea66fd96e8df3d"],["js/algolia-search.js","040179fb8d35e6a77731030512a55549"],["js/exturl.js","02f10fababaf910864f53ee3023209dd"],["js/js.cookie.js","bde4ad701829ba4625ae4b04b6ab5a54"],["js/motion.js","693128c513302a6fd0d9a725e360832a"],["js/next-boot.js","d9913491e4a9618e9bb924bcba08670e"],["js/post-details.js","ccc2c02329fcb71fee0307195bca7af3"],["js/schemes/muse.js","43c7b3ba26d3b0af08770abd48ff0517"],["js/schemes/pisces.js","9421fe918698f13e707772b7d2abf456"],["js/scroll-cookie.js","99d47c728b34eaee083a44c3ea483710"],["js/scrollspy.js","a559d25b6d6f91c316d4a1ab78060aad"],["js/utils.js","5d91e4b6ad5b966cc947933d23ee4d8c"],["lib/canvas-nest/README.html","a6a5facbf03eef09c57f2c003847ab4a"],["lib/canvas-nest/canvas-nest-nomobile.min.js","53ec4acd5d626ff6d516f9c6da224521"],["lib/canvas-nest/canvas-nest.min.js","9c3e5af669a0b13b33e0cd4358c3e7c7"],["lib/fancybox/README.html","e9e9864be2d5f926ad5fe1bf14a8c53f"],["lib/fancybox/source/jquery.fancybox.css","8897211062d3ebd2afa832b9e7941ce1"],["lib/fancybox/source/jquery.fancybox.min.css","a60f2401baf6f4c7cb62b42b72e1c863"],["lib/fancybox/source/jquery.fancybox.min.js","0a2bfd7bb3691a3de254646dabaa0c44"],["lib/fancybox/source/jquery.fancybox.pack.js","4e913e3c566dcef823c5c650be1c59d7"],["lib/font-awesome/css/font-awesome.css","45559f2640eb26fc14d9b71b9fb705ec"],["lib/font-awesome/css/font-awesome.min.css","73aa08292926fff83f6330e357d8ca47"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","f51571b49e524d744ef689d604bfe35c"],["lib/jquery_lazyload/README.html","238193d1b5622f27dd3c8fe118f031d2"],["lib/jquery_lazyload/jquery.lazyload.js","1ed5be67e2852346dc80dfacfafb072b"],["lib/jquery_lazyload/jquery.scrollstop.js","f27ffda806ba6eedd3134e9957a6c06d"],["lib/pace/README.html","b2a55f5a49d2df5433f516a1f998ca6f"],["lib/pace/pace-theme-barber-shop.min.css","de5ec4fe335a5263a870a39f5d121447"],["lib/pace/pace-theme-big-counter.min.css","16834be63fbd9e6ae7153823687b6893"],["lib/pace/pace-theme-bounce.min.css","043b5c04620618d2868607788a866ace"],["lib/pace/pace-theme-center-atom.min.css","0e9e8b0fcae7c3c71513d0527c0bce36"],["lib/pace/pace-theme-center-circle.min.css","d049b7a2d97cd13c84df010c12de206a"],["lib/pace/pace-theme-center-radar.min.css","f4257541688b51a6f009bc0bf50ed0e5"],["lib/pace/pace-theme-center-simple.min.css","2997d231bc619d94dc24001732f391ab"],["lib/pace/pace-theme-corner-indicator.min.css","86719322d58a4df3fdc3b1a51ca896da"],["lib/pace/pace-theme-fill-left.min.css","1f257efbe41a6870801ee2d60002a983"],["lib/pace/pace-theme-flash.min.css","1365bde9b7afc806dc6946da873df3f2"],["lib/pace/pace-theme-loading-bar.min.css","f09d642015836971901e1b195646ff4f"],["lib/pace/pace-theme-mac-osx.min.css","0bdb2f02d3ab56b4f963e16d5cf8a188"],["lib/pace/pace-theme-minimal.min.css","c57d7109f2825c5764f83bedd8938d59"],["lib/pace/pace.min.js","aafad69759280e0368001a8aeddf0a48"],["lib/reading_progress/README.html","6462ab4e64737d75e2fc0c58a2b0ce92"],["lib/reading_progress/reading_progress.js","e2be852751987180d8a83440cab96db8"],["lib/reading_progress/reading_progress.min.js","3ecab69f856e7f9a57360647e3fe7c1a"],["lib/velocity/velocity.js","440d51d53b13340dcf90480c62592185"],["lib/velocity/velocity.min.js","db958d049919c61b942a0d878b7fa346"],["lib/velocity/velocity.ui.js","11d6d983d1725ea78c5fc337ae53ce17"],["lib/velocity/velocity.ui.min.js","a06dd10de1862e5a62aa2b847b627979"],["tags/Crisp/index.html","7329a0764e472b77ea1a72fe9a1aed57"],["tags/blog/index.html","ec61ce0a7a53f14aa73c3375430358b9"],["tags/diary/index.html","48483efabfa4408ec30b56db1d9d2650"],["tags/github/index.html","b002b4569232bc641ac0a5aeb3ae16ec"],["tags/hexo/index.html","6072f49f79099dbba8ac38b4f022e61d"],["tags/index.html","c680f96f39a4057bb60b9a553a507d05"],["tags/termux/index.html","211349a808665772dcf3f726303d5886"],["tags/web/index.html","2be7a336bc6c10b12f11aa2ded777d3e"],["tags/wordpress/index.html","e2c6cfb4e1f6e9ad68dacb1e0234ef00"]];
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







