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

var precacheConfig = [["404.html","34410d90ab0961dbd26a57e11b7d9aeb"],["archives/2018/11/index.html","6fe3eeda07de997cf0d5325dada231ad"],["archives/2018/12/index.html","0f2b37517f5b33bde2e384879618bff0"],["archives/2018/index.html","a31dfbd34c2fa9a7cf02547828027da1"],["archives/2019/02/index.html","62872962fd2f8df3b4a4e5efa499989b"],["archives/2019/04/index.html","27acb356638f5870269fcc64aea2a83e"],["archives/2019/05/index.html","45a8f246b7c58e0e339045c79921b8b5"],["archives/2019/index.html","120bcacb21ad97816bdefba88020d6a8"],["archives/index.html","9e53b658c16978abcfad901aa51d8738"],["categories/index.html","5cc8d0b1240024444bab3e057396a193"],["categories/呢喃/index.html","6c26598e1ae8a02c346bcd6cc4607987"],["categories/折腾/index.html","20cdd9a4b8fc7125bbf2648b4730dfa3"],["categories/矫情/index.html","9d187dc5985744b4b2db1fbd3d5d85ce"],["categories/译文/index.html","ae679fcdb7aae019f0784cd167a8e354"],["categories/造作/index.html","5ba19ae1fc867a5a818e8dda09a19cc1"],["css/main.css","3e41b74bca213ec49ae0b6d84a2468df"],["essay/2018-11-11-hello-world.html","ae61f5a9f9f172f81b623cd7c65c40cf"],["essay/2018-11-18-new-starting.html","2f05a12762d03e0045c69be0a68920e6"],["essay/2018-11-19-winter-trip.html","9eafcf2dab3337c559a69b39740a4f4e"],["essay/2018-12-31-2018-y.html","2b460a3ffceca64b7ac9b9d0cdbfb72a"],["essay/2018-12-31-wordpress.html","9a1a2c95c5e3d27f7fd7576a764877e4"],["essay/2019-02-05-hello-world-2.html","6ba3fc816ae80f64cf6d3e2d9f3fa71e"],["essay/2019-02-19-add-crisp.html","e3df0a318bfa3a984efaf5d6734a9b9d"],["essay/2019-04-14-senior-bye.html","d8da1c387634ef18d2cd6381c7670a90"],["essay/2019-05-19-hugo-on-termux-tslt.html","1612e1a3c1f303710902f6e6113213ae"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","ca9286408707471c2652ae9c37d7d77c"],["js/affix.js","16d9b3527bdd76eeb54160b870e953ca"],["js/algolia-search.js","541ce55dc0f8f2a597df4d723d4641f7"],["js/exturl.js","670f5ed8e2cc49403d0e21eeb607c741"],["js/js.cookie.js","83f55010640f2b2eaa7ccdec0bb5c06a"],["js/motion.js","256343761fa41de030fa5460590b2948"],["js/next-boot.js","9879dea646f2cb5f36fb5d28d6fda915"],["js/post-details.js","8b217f09b668d3e1e58af747c1f85ae7"],["js/schemes/muse.js","60a0fe7a4f6aa2b53dbf20e8fad7e913"],["js/schemes/pisces.js","82c4787df98d2f0c287aebe2285d2eb2"],["js/scroll-cookie.js","c712c796b2664fe2d13d40c3b2b2cdff"],["js/scrollspy.js","4a8bf4974d66b281d37c749b00235e8a"],["js/utils.js","299fe080c6efc413ccfd84eb495b02f0"],["lib/canvas-nest/canvas-nest-nomobile.min.js","62bcadfb2e1f7782017ec532c7fe0064"],["lib/canvas-nest/canvas-nest.min.js","bf3d3570ee89beca8f73633d520d4177"],["lib/fancybox/source/jquery.fancybox.css","6b08c6e87d34eb29be0a2921a0dd65e1"],["lib/fancybox/source/jquery.fancybox.min.css","19f5e7b92dd10f9740867144cd670e18"],["lib/fancybox/source/jquery.fancybox.min.js","c18de5500fc2c49b7f54744f2992a635"],["lib/fancybox/source/jquery.fancybox.pack.js","024549869af4890557e9a1575a5ba87a"],["lib/font-awesome/css/font-awesome.css","f98ef3ddb6d0aabced602797744aaecf"],["lib/font-awesome/css/font-awesome.min.css","df7daf0d14dc1b74247995c44d59a52d"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","4eb5196a63cd5cd74dc7fab352b93665"],["lib/jquery_lazyload/jquery.lazyload.js","c1653fe8299ca9b9f3eae8d6c50eaab1"],["lib/jquery_lazyload/jquery.scrollstop.js","ff4e627927d9f90c73663f7bb5377cea"],["lib/velocity/velocity.js","67ab60bc29861315318d45eb101d9bbb"],["lib/velocity/velocity.min.js","a0a19798e48a8d66d2888e7206dbcc78"],["lib/velocity/velocity.ui.js","c3c2be30f8967afbd164e59a1d23be48"],["lib/velocity/velocity.ui.min.js","b3c9204eb628e082d36b801f4e8ad16b"],["tags/Crisp/index.html","b4ae7dfe88088156067580cbdccaa9ec"],["tags/github/index.html","a2ede8feaad12a23674ac247fbb45468"],["tags/hexo/index.html","a104c5387d4f1ef885a368d6c298be3a"],["tags/hugo/index.html","ab9ea5702e8803714524fe5201288c03"],["tags/index.html","6c0775eacb69ff32e10c476891703410"],["tags/termux/index.html","b53162d4608bd5eb05a6af86a488ecaa"],["tags/wordpress/index.html","b8c84020765742eb71c42deb581cdf56"]];
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







