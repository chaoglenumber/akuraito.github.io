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

var precacheConfig = [["404/index.html","f99613a00d07e3bc2083ae903505b3ff"],["archives/2018/10/index.html","2ff798d1ec04750cb9381f5fddbba5f4"],["archives/2018/11/index.html","7626c9d9d9cd01a5e1fa6bebff47da95"],["archives/2018/12/index.html","d6f754bcbeaf1e58b28fbbeb3d84165b"],["archives/2018/index.html","2063f7783f0bb8d04d3a3306e35303f4"],["archives/2019/02/index.html","cf2437ce260ec238a847db4af8e30134"],["archives/2019/index.html","9cb0b4ab27ad8bb63b135d1d1ec50500"],["archives/index.html","a76548eda203e8b8ed3d6e40834e326c"],["categories/index.html","05d77fe81f300495c30747ed9a6a5742"],["categories/呢喃/index.html","0dbccdb16734fda80140856144cd4e52"],["categories/折腾/index.html","9e48989aaac9e37587a130c8f0626fbd"],["categories/造作/index.html","a6af8fd2ee159f1be6cacc18ca451fbe"],["css/main.css","cac89005b65af92833548f08e30c6462"],["essay/2018-10-28-web-build.html","45b2087c003707137a164cbd72b43eae"],["essay/2018-11-11-hello-world.html","bd61aba3d8b0f79514df1f3a24e99ee4"],["essay/2018-11-18-new-starting.html","db3e3e622c86500af4b0254ce02f1997"],["essay/2018-11-19-winter-trip.html","0cc26204b31848b9e51a828ef05c57dc"],["essay/2018-12-31-2018-y.html","7afbe9e4b4f39e6bccd7f2a45750da47"],["essay/2018-12-31-wordpress.html","357f681fcfc7eb0acf6e27d11c3183e2"],["essay/2019-02-05-hello-world-2.html","1c514705abad7400991609604825ea56"],["essay/2019-02-19-add-crisp.html","ce4da0360953403fc3a2668319843d23"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","625f03953b9d2f3571f62ba73549c205"],["js/src/affix.js","8896ab92d94a71160c08739d8baec38a"],["js/src/algolia-search.js","f37ee342bdfb2caf8a9439f6a0f26d92"],["js/src/bootstrap.js","5be63fb2a17c804eb0b1b871f04e854d"],["js/src/exturl.js","4bb0ce9b467ee85f529492bd373b679a"],["js/src/js.cookie.js","d44d925a35261ac9f734f92273974041"],["js/src/motion.js","5efe05bd1456f3d974a92256b829efff"],["js/src/post-details.js","2f20ab577126dd52ec53e22fcbfac156"],["js/src/schemes/pisces.js","6cde014f3a3cadde17afe093d8110c86"],["js/src/scroll-cookie.js","0cac9464c58e6d7e576f4c751fbb8bf4"],["js/src/scrollspy.js","b0b0581ecfcb3e9659750a7adfbd001b"],["js/src/utils.js","bd259265181c4ebd37c34e83586ec68d"],["lib/canvas-nest/README.html","58083629bb3540847322a4c86afbe7a9"],["lib/canvas-nest/canvas-nest-nomobile.min.js","115cb8fe5c8639264aa450c687809184"],["lib/canvas-nest/canvas-nest.min.js","dce6a99825801f458c05d116cc82a73d"],["lib/fancybox/README.html","969b8720f036d26d91de519423342839"],["lib/fancybox/source/jquery.fancybox.css","1d4d97af3038c8b20ac77a903fa8c377"],["lib/fancybox/source/jquery.fancybox.js","9c6636486c99c103a4ba91f4282dbcf7"],["lib/fancybox/source/jquery.fancybox.min.css","79a27d7b1487ae9c3c75af50baf40edf"],["lib/fancybox/source/jquery.fancybox.min.js","98d90c0da61ad04d36dc5765c8e1db4f"],["lib/fancybox/source/jquery.fancybox.pack.js","9c6636486c99c103a4ba91f4282dbcf7"],["lib/font-awesome/css/font-awesome.css","592854dd8877b2375501a455377f8c0a"],["lib/font-awesome/css/font-awesome.min.css","4c9f494e6b8ef9b0053e9755c8bbca1f"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","cb80cb734ab69aa4d5ea7e402c6c873d"],["lib/ua-parser-js/dist/ua-parser.min.js","c145bb2d073165459030e4aaff4ba959"],["lib/ua-parser-js/dist/ua-parser.pack.js","a8980ad820435f1f6d65c81b730e72e2"],["lib/velocity/velocity.js","104702a433bf35b612fb8d8a580f4d92"],["lib/velocity/velocity.min.js","21c791dd8abfa335414c4526606a0688"],["lib/velocity/velocity.ui.js","9010b202c1b26917e2a98877a44e9769"],["lib/velocity/velocity.ui.min.js","07caf69877debbe87df95738f3658884"],["tags/Crisp/index.html","d9b2e6333ec17374a59fda852d9a9bf1"],["tags/blog/index.html","e3833a157953a9719c4da2d6e0e516eb"],["tags/diary/index.html","38ef05fcad20f4097e5f6215d17cd692"],["tags/github/index.html","4117d990fb8edb3b4ac04996d993f786"],["tags/hexo/index.html","793709be9e005cca86b16c66d13e2806"],["tags/index.html","95d676a6958a0e35b7dcc5b279d0f678"],["tags/termux/index.html","51efa94ef4ee65929854823926ac4b6a"],["tags/web/index.html","e22239c7c5dbff77059f406809c08587"],["tags/wordpress/index.html","5b8fcdaef4518c6bd29b1d27e4084050"]];
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







