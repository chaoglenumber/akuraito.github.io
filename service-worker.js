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

var precacheConfig = [["404.html","275de7721a9a4b5f175844b1165ea565"],["archives/2018/11/index.html","05b8275236391b920dc1ccd75686b524"],["archives/2018/12/index.html","4d4ba4e6729b08e9fad4c18e7b3efd52"],["archives/2018/index.html","3071cfc851b374de58a6b738b79074bd"],["archives/2019/02/index.html","4ee18b725f4f0f91acf31e0f794da3c9"],["archives/2019/index.html","ebac24d4311f0c5af1ef1d5b65a9b8f7"],["archives/index.html","425e4b9d7c52b3c69add522ed6608eaa"],["categories/index.html","c56b7e8479aa56ac0be19b5a632c5686"],["categories/呢喃/index.html","4206fa5b5c8747bb03c5676fcfe82639"],["categories/折腾/index.html","54aefb481956f582c216bb4378b52e5b"],["categories/造作/index.html","504d18418603becf5258b98f66fcd8b8"],["css/main.css","efe83d6e8c29a8685d53eb9e6c7fa2fb"],["essay/2018-11-11-hello-world.html","795af0375a72ccff7308fd40b09870c3"],["essay/2018-11-18-new-starting.html","2f26d014e9f4e89baa4bc9b68390a011"],["essay/2018-11-19-winter-trip.html","3f3e1b4490cff655c05e8c4db39e6965"],["essay/2018-12-31-2018-y.html","9f6df07514740864ec3e70ba7be78886"],["essay/2018-12-31-wordpress.html","a6af5f266ac207b414f849fed7292048"],["essay/2019-02-05-hello-world-2.html","29382a2daeee3eca9da142b522234df9"],["essay/2019-02-19-add-crisp.html","662b5ab30c27a993a6e84290e55b7a1c"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","788ca98b3baf4bf3372cf7479e535f60"],["js/src/affix.js","bf1ce36eeba92c025153420d04f3d8a7"],["js/src/algolia-search.js","8fbaec3d9ad2083be52609c2c0d58881"],["js/src/bootstrap.js","f515f45e057d56a4e8c8a772a4753f0c"],["js/src/exturl.js","34bc7efaa35e9b01e19aef785f8f9a8f"],["js/src/js.cookie.js","17bf8422deead01f0bfe254ab248d123"],["js/src/motion.js","a632d6f025a465ae52948246c9f11c93"],["js/src/post-details.js","38d65c2cf1dd2661b119f03b4f16e713"],["js/src/schemes/pisces.js","716fdb108dec430e36e8be064b2ae322"],["js/src/scroll-cookie.js","4b257b8737441e2dc1cfff4dfdc56c97"],["js/src/scrollspy.js","17ff4786fdcc0e34bf13c16d1b325923"],["js/src/utils.js","923455da4048489410a91efaa25607d6"],["lib/canvas-nest/README.html","b8e87a10890f3fa9669023d84648bfc6"],["lib/canvas-nest/canvas-nest-nomobile.min.js","fb1e57e2e16aa892c3f8c0c61b4be26b"],["lib/canvas-nest/canvas-nest.min.js","f681a2f7592be9e3a886aadcd871219d"],["lib/fancybox/README.html","c27071495bff483db575a8588a1ba1ef"],["lib/fancybox/source/jquery.fancybox.css","27bc660bf3b30daa309257d183e0107b"],["lib/fancybox/source/jquery.fancybox.js","58c89ec9668d8cfe280e4a3a25cd75ce"],["lib/fancybox/source/jquery.fancybox.min.css","537d0bdcc598bfd748a8c0ff09465619"],["lib/fancybox/source/jquery.fancybox.min.js","369463b1ae7bbbad5d256cd92adf36c8"],["lib/fancybox/source/jquery.fancybox.pack.js","58c89ec9668d8cfe280e4a3a25cd75ce"],["lib/font-awesome/css/font-awesome.css","45559f2640eb26fc14d9b71b9fb705ec"],["lib/font-awesome/css/font-awesome.min.css","73aa08292926fff83f6330e357d8ca47"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","f51571b49e524d744ef689d604bfe35c"],["lib/ua-parser-js/dist/ua-parser.min.js","37234b397014b17395ecd6ac6bb2008d"],["lib/ua-parser-js/dist/ua-parser.pack.js","98c8144b0f95a5c6c23ec49f48c4d5ec"],["lib/velocity/velocity.js","440d51d53b13340dcf90480c62592185"],["lib/velocity/velocity.min.js","db958d049919c61b942a0d878b7fa346"],["lib/velocity/velocity.ui.js","11d6d983d1725ea78c5fc337ae53ce17"],["lib/velocity/velocity.ui.min.js","a06dd10de1862e5a62aa2b847b627979"],["tags/Crisp/index.html","887efb38b705aa0a6a9830a88334676e"],["tags/blog/index.html","92d8b0f9d707129cd81d15bf24bf367f"],["tags/diary/index.html","5ddb5f112ed4c4ea30def3474235d0ff"],["tags/github/index.html","8aa70cacf447085acf91422cae964294"],["tags/hexo/index.html","0eacd513a14bd15bb8035cc657a64b8c"],["tags/index.html","d7e38e4fc4fd149be2c8636c437a8124"],["tags/termux/index.html","ad813db53dd18d6c7867d1d1971b4890"],["tags/web/index.html","67983030f196fe5b8be3a956da9ed7eb"],["tags/wordpress/index.html","4e6f65513dfbb67dff8175f889e32715"]];
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







