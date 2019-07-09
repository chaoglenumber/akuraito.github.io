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

var precacheConfig = [["404.html","03b12771d6fa10aeb095c34720b37af4"],["archives/2018/11/index.html","8fdad203b895aa1d4e7b8b62d88bb281"],["archives/2018/12/index.html","f171b8ab9558b7ed974ffad5a92704dd"],["archives/2018/index.html","f5af6752c7f0e9742b455f857aae8801"],["archives/2019/02/index.html","0d63a2366bc7702b9dd2e2b590664c02"],["archives/2019/04/index.html","78d2b8cfcaa7b11aea1fb32b55821c28"],["archives/2019/05/index.html","e40d6ffddaf8082120cc759c3fa0f47e"],["archives/2019/09/index.html","79a6f729eca6948419d32d4255d2780c"],["archives/2019/index.html","6a6465d1b9f481088fd0e721554403a8"],["archives/index.html","ec275c4a9f787e1c72be8e046954d3a1"],["categories/index.html","5038e013ef07f7622c96cc5aa1b51a77"],["categories/呢喃/index.html","f7cfacfd6989ba2aa7a28493c5063a79"],["categories/折腾/index.html","60e0fb612cab9fc9869526b85a9a1b18"],["categories/矫情/index.html","f038cf6e3838fbee1f85b933cf50d703"],["categories/译文/index.html","2e6564b53cc47bba48ae763b46b4474b"],["categories/造作/index.html","73428f73ba7142e27c7d772a72aaf2fe"],["css/main.css","e5e522a01f4f7793150546b6832f6e9a"],["essay/2018-11-11-hello-world.html","ccd43ae04efd2623c643ae27d620acb4"],["essay/2018-11-18-new-starting.html","91d5104a28cc5d847916a30fd1a2e0eb"],["essay/2018-11-19-winter-trip.html","3ef4e44969359aa38131a47c3dd00842"],["essay/2018-12-31-2018-y.html","79b51e0fd4930e2fa9602190e6067dfe"],["essay/2018-12-31-wordpress.html","6890931b618951e0c5f975cbc528a727"],["essay/2019-02-05-hello-world-2.html","ac359c9b467e12b5a84bf85f01827554"],["essay/2019-02-19-add-crisp.html","df0dbc67e16fa3559656e0371c715697"],["essay/2019-04-14-senior-bye.html","9f01d310b456e29bd632a371432cf8f8"],["essay/2019-05-19-hugo-on-termux-tslt.html","4a837f5d6d2d1ec761cea748cc82f427"],["essay/2019-09-07-anime-saw.html","ca61bcf6f2d9c578d0d776af25b07a66"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","68e5ff229abf0385a1d58d3e96264785"],["js/affix.js","ab08a0331379e11eaac045580ac760e4"],["js/algolia-search.js","fc238a87c023db2a5d040509a0f4bb25"],["js/exturl.js","74a608e37a32a65c9f83f1134da93aa8"],["js/js.cookie.js","b82d1925e1dcc19a7867886c883243c1"],["js/motion.js","6c9e2f27d9a1b234c72961459fb953f6"],["js/next-boot.js","f2273d5fbbaa6ef3605669f0dba8c96d"],["js/post-details.js","b121a874fb917b911644fc4bd662880f"],["js/schemes/muse.js","4b9eaa3f200ec0d8fb69c5f97446f590"],["js/schemes/pisces.js","ae734c33903313020572b331676d191a"],["js/scroll-cookie.js","c9150e3594e6142705f2a01976f32473"],["js/scrollspy.js","34d9c27e1314f6e684b00b1f7b8caed3"],["js/utils.js","1b6b4ec0c2797f7bc3602d2c880d27ea"],["lib/canvas-nest/canvas-nest-nomobile.min.js","c4b2210429b7412c4bb72af5025366af"],["lib/canvas-nest/canvas-nest.min.js","4ad7734413aa2eaf030a17ecbaa64e71"],["lib/fancybox/source/jquery.fancybox.css","5ac472d4b15a019d453520449a48b411"],["lib/fancybox/source/jquery.fancybox.min.css","a9f53c7f8f4d1bfa8206363133213673"],["lib/fancybox/source/jquery.fancybox.min.js","9fbe9b999604e5f338d8a7ee24cc6c80"],["lib/fancybox/source/jquery.fancybox.pack.js","bee4c8b99c7bee4b7c1cb447e5006124"],["lib/font-awesome/css/font-awesome.css","e7e082b517d61c95b00ad17f10e095b6"],["lib/font-awesome/css/font-awesome.min.css","9c5756d7abc4e5935f6deab1ea5ed79d"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","a82d1487da9eb10d8af2bc21e24b2620"],["lib/jquery_lazyload/jquery.lazyload.js","a509f4bcd9d3a13c453bc107b3be753c"],["lib/jquery_lazyload/jquery.scrollstop.js","ce3271971e47514294cd79499b23c63f"],["lib/velocity/velocity.js","c22afd9b5a645fa75fafaab70eeeb862"],["lib/velocity/velocity.min.js","0c1893fee14448dba0ed255faba203c2"],["lib/velocity/velocity.ui.js","520f8805e20e92c7532228f7a040f941"],["lib/velocity/velocity.ui.min.js","316bbc15b5fc4b6df731a2e0f1d1e00b"],["privacy-policy.html","807772d917292a26f0355815f176ef9c"],["tags/Crisp/index.html","142838bf2cf601e43edbc7db16843ba5"],["tags/github/index.html","f8595bf0e1cd8e07e50803cd4e78dc1b"],["tags/hexo/index.html","aa90be374261084e8de0db2833bffe53"],["tags/hugo/index.html","a88630bf17ed2a2875c523525fe7cc7d"],["tags/index.html","e8502bf4614c5c2a5d5f5bfe68d1a88e"],["tags/termux/index.html","69c2f9417e7b45bf93498a57f535336a"],["tags/wordpress/index.html","e54fa61c0ef96e0a8182be03b2ae11d6"]];
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







