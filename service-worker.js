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

var precacheConfig = [["404.html","4f6ca1400afe264fec2e589fdf855545"],["archives/2018/11/index.html","cd18a793573c6d3059fae4c5208050ae"],["archives/2018/12/index.html","9e3359e449fa8668833c9442daa1b7e2"],["archives/2018/index.html","b1565ae20c1ab6bc6854e00db20dc983"],["archives/2019/02/index.html","93df9f1d72afc7662e1af38364fc8f39"],["archives/2019/04/index.html","06f86583c4994c1fb7b6ba153078e8b7"],["archives/2019/05/index.html","8e03bf6055337b68c502aeb64580eb4a"],["archives/2019/09/index.html","fc691582c540733a93c1e6c1c7b92ebe"],["archives/2019/index.html","ffd196f0ab440ea41d86e8151d91c59c"],["archives/index.html","fb5baf9df0bcb668aed4bc5bd0805deb"],["categories/index.html","c8960d1aa5e4a55f03c49c076fe05fc5"],["categories/呢喃/index.html","1e45767ef533b78b2b1fa998018c2d43"],["categories/折腾/index.html","918a18ec33302be7d8e9b21fc3adc8d3"],["categories/矫情/index.html","01e4b31290b2311043cf9fd2555fc51e"],["categories/译文/index.html","da0622888875db322d2e57d583705ff2"],["categories/造作/index.html","c89edd4753253c50764ee38dfb5191b4"],["css/main.css","e5e522a01f4f7793150546b6832f6e9a"],["essay/2018-11-11-hello-world.html","b6d92ddad244ad129b6caa319b94d14d"],["essay/2018-11-18-new-starting.html","e9452b52a40a788f15e6b3b042e25a20"],["essay/2018-11-19-winter-trip.html","2abe0168b9a8c7ea1524c048bab432ed"],["essay/2018-12-31-2018-y.html","49e4eae7a696cb6ce194e5db3da47f91"],["essay/2018-12-31-wordpress.html","28e810ac694ac164b57c63f5902991d2"],["essay/2019-02-05-hello-world-2.html","218220464af713fb1b6dd8d6f1c9978b"],["essay/2019-02-19-add-crisp.html","5c1dcc0e7d6f80de995b7560f39fc416"],["essay/2019-04-14-senior-bye.html","1c27881f131b6d7cc2eb8fe0c233a9d4"],["essay/2019-05-19-hugo-on-termux-tslt.html","e62d533ae9d5025ca9a64ee81c22d5f9"],["essay/2019-09-07-anime-saw.html","133e41d566d6333de19295a24a5d1270"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","3ab7a45bc62b4d8b1bd2f08c73d4b8bc"],["js/affix.js","ab08a0331379e11eaac045580ac760e4"],["js/algolia-search.js","fc238a87c023db2a5d040509a0f4bb25"],["js/exturl.js","74a608e37a32a65c9f83f1134da93aa8"],["js/js.cookie.js","b82d1925e1dcc19a7867886c883243c1"],["js/motion.js","6c9e2f27d9a1b234c72961459fb953f6"],["js/next-boot.js","f2273d5fbbaa6ef3605669f0dba8c96d"],["js/post-details.js","b121a874fb917b911644fc4bd662880f"],["js/schemes/muse.js","4b9eaa3f200ec0d8fb69c5f97446f590"],["js/schemes/pisces.js","ae734c33903313020572b331676d191a"],["js/scroll-cookie.js","c9150e3594e6142705f2a01976f32473"],["js/scrollspy.js","34d9c27e1314f6e684b00b1f7b8caed3"],["js/utils.js","1b6b4ec0c2797f7bc3602d2c880d27ea"],["lib/canvas-nest/canvas-nest-nomobile.min.js","c4b2210429b7412c4bb72af5025366af"],["lib/canvas-nest/canvas-nest.min.js","4ad7734413aa2eaf030a17ecbaa64e71"],["lib/fancybox/source/jquery.fancybox.css","5ac472d4b15a019d453520449a48b411"],["lib/fancybox/source/jquery.fancybox.min.css","a9f53c7f8f4d1bfa8206363133213673"],["lib/fancybox/source/jquery.fancybox.min.js","9fbe9b999604e5f338d8a7ee24cc6c80"],["lib/fancybox/source/jquery.fancybox.pack.js","bee4c8b99c7bee4b7c1cb447e5006124"],["lib/font-awesome/css/font-awesome.css","e7e082b517d61c95b00ad17f10e095b6"],["lib/font-awesome/css/font-awesome.min.css","9c5756d7abc4e5935f6deab1ea5ed79d"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","a82d1487da9eb10d8af2bc21e24b2620"],["lib/jquery_lazyload/jquery.lazyload.js","a509f4bcd9d3a13c453bc107b3be753c"],["lib/jquery_lazyload/jquery.scrollstop.js","ce3271971e47514294cd79499b23c63f"],["lib/velocity/velocity.js","c22afd9b5a645fa75fafaab70eeeb862"],["lib/velocity/velocity.min.js","0c1893fee14448dba0ed255faba203c2"],["lib/velocity/velocity.ui.js","520f8805e20e92c7532228f7a040f941"],["lib/velocity/velocity.ui.min.js","316bbc15b5fc4b6df731a2e0f1d1e00b"],["privacy-policy.html","c7a3c005391922eb45f4fc7cde1da45a"],["tags/Crisp/index.html","dae11c3d2f9059d5b92b63fd99358b8d"],["tags/github/index.html","e5512442e35109a41caaca26715d02e3"],["tags/hexo/index.html","2f5fa28d17752df30be82015bedac314"],["tags/hugo/index.html","4122ff4dc72145bc23630a54636b7cd4"],["tags/index.html","87607690558619bfb969f88821c7e950"],["tags/termux/index.html","1b059d5c719803873d272e7fd8e86ac4"],["tags/wordpress/index.html","0f9e9169df6a49dfd3697f784fb62831"]];
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







