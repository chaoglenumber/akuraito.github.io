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

var precacheConfig = [["2018-10-28-web-build.html","de88db4ad2f17c0c076f3c5e67e74bfe"],["2018-11-11-hello-world.html","b7570713d2db8246c603f485f935dbb1"],["2018-11-18-new-starting.html","71b121a2d7d9af87c71bf15718952a2a"],["2018-11-19-winter-trip.html","160e09aff07150e91e881b097fc04dec"],["2018-12-31-wordpress.html","2adeb1a4c092153b93f10fce24a03934"],["404.html","b034da0f718a1e9099710f094600024b"],["archives/2018/10/index.html","4449d47c5c5b17973cd175ec9d8f3b79"],["archives/2018/11/index.html","70ba485bdea2ff930978a3df3b5f8047"],["archives/2018/12/index.html","125dc6b62e268f343074258cde7f8265"],["archives/2018/index.html","707373769b2e697600d5199e49029478"],["archives/index.html","9a15bedf08dab85415e6aa6f1061f354"],["css/main.css","955e7ccd22d07093fd7c097b2598276b"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","49cd0304d130914a7017b217b44a5fab"],["images/icons/icon-144x144.png","2ae6e39c0dcec56a770a42ec83eaad3e"],["images/icons/icon-152x152.png","f0e20393c81acddc09b3142dbf2b3bfc"],["images/icons/icon-192x192.png","24981de2142524ac57442b1e942f0839"],["images/icons/icon-384x384.png","1c2ca29c6fbcf715613ad53c2ab747b0"],["images/icons/icon-512x512.png","b4af95a4f063dcadc53b5c9e4d5a6a12"],["images/icons/icon-72x72.png","d2172809280e153232d58680704addf1"],["images/icons/icon-96x96.png","b0a8c633cd49b94ab8738ba25b1d8bd4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","b86e3754f2c9acaf941fa6ffd28fb34d"],["js/src/affix.js","966c606254bb3ab372669a290cac0ab2"],["js/src/algolia-search.js","9c786cd8689c487d324ba7a62e47c62e"],["js/src/bootstrap.js","42d1be0f2c9cc5add3c662518af34a08"],["js/src/exturl.js","9fd8755789c238c2a060f71abc481d1b"],["js/src/js.cookie.js","79826075ad382ad709dc75ad9a9e9cb2"],["js/src/motion.js","b722aa5cfdf2f72c57f6134551be65f9"],["js/src/post-details.js","3542baef8fa72e69371682b4e5825127"],["js/src/schemes/pisces.js","139e868bb956f7ca106a553d11eca796"],["js/src/scroll-cookie.js","68f0a4edfa72a0e5d0e190e7877f71be"],["js/src/scrollspy.js","4057865aea16109fbc9e77bfbc5eda5f"],["js/src/utils.js","8cc760130294c4f2307481e807b5701b"],["lib/canvas-nest/README.html","c711ad1a753200bc375de58071db9f94"],["lib/canvas-nest/canvas-nest-nomobile.min.js","db3755fb42f853dec3a85a6243b09199"],["lib/canvas-nest/canvas-nest.min.js","a6958ed1be343b92551b3a1b74e1aefc"],["lib/fancybox/README.html","501898b641fc566b106f467732bf2772"],["lib/fancybox/source/jquery.fancybox.css","3529091f998453193f907d18b5ef7ba7"],["lib/fancybox/source/jquery.fancybox.js","8c89be0d71c2193a9e13c4f7991b519a"],["lib/fancybox/source/jquery.fancybox.min.css","b02c6ee65029538cf033c273e54bfa7b"],["lib/fancybox/source/jquery.fancybox.min.js","e47c47196955f068a7928a9f7dca28da"],["lib/fancybox/source/jquery.fancybox.pack.js","d050382dd29d91c4ccec9f0d7924e4e8"],["lib/font-awesome/css/font-awesome.css","c35c620d2ad3af8d636140e9de38e68f"],["lib/font-awesome/css/font-awesome.min.css","04c93f96c627a60f703f17e7708a9e93"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","3603fda34b4e843c65b62afdc04b056c"],["lib/ua-parser-js/dist/ua-parser.min.js","8731cbdeba858f1a9637035ea09c3208"],["lib/ua-parser-js/dist/ua-parser.pack.js","4a40794d53f40be4651853dff77795a8"],["lib/velocity/velocity.js","bff05ca3b8fbde5854af33e44670ddb2"],["lib/velocity/velocity.min.js","03955fd3c1d581d287a1e0492f5b5223"],["lib/velocity/velocity.ui.js","f57b73ae8411d229e6b8dacfc1fae035"],["lib/velocity/velocity.ui.min.js","a7158dccca68d680c58917e599d7c124"],["tags/2018/index.html","e287446162188e401abe78e0b33dbc4e"],["tags/blog/index.html","1eaf30209f11df7e2caee4635c17315c"],["tags/diary/index.html","a41f7500aa165e12d0b60df3e4d0be1b"],["tags/github/index.html","52ca7541147a82ec66b6a8977c51ec53"],["tags/hexo/index.html","09d3a77b0971c3d3e17353ff8c103d4c"],["tags/index.html","88ef9c0a220d8a3e24b620d65b7bc985"],["tags/termux/index.html","9d52570955daeb34b025de8e02f09fa2"],["tags/web/index.html","4bc62782259ec404850ffc9ea7646be2"],["tags/wordpress/index.html","8e331e0d2afe3c17032665620f0a9b13"]];
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







