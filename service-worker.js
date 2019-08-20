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

var precacheConfig = [["404.html","b6ec605a935774866d9e7138264d1fda"],["archives/2018/11/index.html","c9657b8a7893f409e688db11e55df6ae"],["archives/2018/12/index.html","bd22afedfbe536dbe3a90dbf893b0aca"],["archives/2018/index.html","cae201f2ddf5ff6e42747853e755a78b"],["archives/2019/02/index.html","0dc8b91937aebd18163c96623ec6354a"],["archives/2019/04/index.html","bb7685de26aad62cf89aa407e9d457e5"],["archives/2019/05/index.html","76b972a04ef0f23567b3fdce55da8cb4"],["archives/2019/07/index.html","7a61c0b2fed6af9f3316343d507bf259"],["archives/2019/08/index.html","73d89b5d370e1af921eab7fe56f8dbb2"],["archives/2019/index.html","6eca451958705af76e3c15af9fb54f9e"],["archives/index.html","123949e1533019e6a2d602f5e0f15f30"],["archives/page/2/index.html","28fdff12e8ad471e1b230d943b64e188"],["categories/index.html","2feb818bf9a60bdb389edae6926e8497"],["categories/呢喃/index.html","abfae0b68e3ac36b3a41777092fcd112"],["categories/折腾/index.html","43ecce3ca8755c6ad6ad937721245d20"],["categories/矫情/index.html","ff6d5cd5f1f65b62e59bf2383c185e1d"],["categories/译文/index.html","378a4b95ca2eeb87395daef6f4407711"],["categories/造作/index.html","869255d1564be2f128a32ad6c7167f69"],["css/main.css","46e7223db0de514effc5d02bdfd5d1eb"],["essay/2018-11-11-hello-world.html","2e4d7c86134d5bda17ade0a3cef55a43"],["essay/2018-11-18-new-starting.html","48cf74a7f7f262e446bff583d5ea3819"],["essay/2018-11-19-winter-trip.html","509e07651986db0daec42493e6d84910"],["essay/2018-12-31-2018-y.html","20575dfcb780b1c76c3e1ba66a00912e"],["essay/2018-12-31-wordpress.html","03a97bc358bfc5216651545ada02715f"],["essay/2019-02-05-hello-world-2.html","dec9dcc7861dde4c52c4efd28c74a291"],["essay/2019-02-19-add-crisp.html","c1d1ee96c9ac0f7386f9e54343710d11"],["essay/2019-04-14-senior-bye.html","c9e013e96f6fe5d345d88785faedf71c"],["essay/2019-05-19-hugo-on-termux-tslt.html","ae803874c5919e0ef7c260c6b347c046"],["essay/2019-07-09-anime-saw.html","eb89258344c4bb58c82d246219efb834"],["essay/2019-07-27-yandex-mail.html","717b57129c8f3fad61fcec6a42a1e08f"],["essay/2019-08-19-with-my-nokia-7.html","d539e13d02d2663f60c3bdabe628566a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","3a0f350c8ec429948c573b09c30ef40b"],["js/affix.js","24808f53819fbb0357432d62c9550921"],["js/algolia-search.js","3bdbbf0e43b4efe59064f7c702dba580"],["js/exturl.js","3c3244408973b45810a2366a368fea10"],["js/js.cookie.js","92b0e652dd93ae5e6df8befd9289357e"],["js/motion.js","08cbcf5e1787782106ff46676b853517"],["js/next-boot.js","0c034fefa3ba94a1806b40dc8b038637"],["js/post-details.js","4af4248470a4f483f0cff847c8eceaf0"],["js/schemes/muse.js","ebe73c3dade2a54c5299483b399449dc"],["js/schemes/pisces.js","15737e4ebf39996ed832cdb2567ef4f1"],["js/scroll-cookie.js","0ada3284960f97c2eb317dbf97f2b7c4"],["js/scrollspy.js","47c487f5d7c47a0aeb50b16ad826cc77"],["js/utils.js","874404c3c77561613f1bc35605277d24"],["lib/canvas-nest/canvas-nest-nomobile.min.js","b007436037ad11dabf0e118d4d3956e8"],["lib/canvas-nest/canvas-nest.min.js","6d681e3084e32abfe774f3f4ac8f9bb7"],["lib/fancybox/source/jquery.fancybox.css","52a25a302b433092afbafd367c53313f"],["lib/fancybox/source/jquery.fancybox.min.css","ef6e40a0f80d7ea642e75e714b8b364c"],["lib/fancybox/source/jquery.fancybox.min.js","c12ca39a3c19da3bbb0dad8acda0976e"],["lib/fancybox/source/jquery.fancybox.pack.js","6464c96c07b5c60e0b08786e9847d45d"],["lib/font-awesome/css/font-awesome.css","8d9350312851a2ff8afc9eec0cc15b3e"],["lib/font-awesome/css/font-awesome.min.css","a408b9c7a5eebc83e3961398a0a51545"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","6077e63f56378d74e9049b74d2f2b6cc"],["lib/jquery_lazyload/jquery.lazyload.js","50d05b5f369c6c2d47c30cdc4a4c0b9a"],["lib/jquery_lazyload/jquery.scrollstop.js","1191ed63f832c35e00b79073dcf197a1"],["lib/velocity/velocity.js","e8627810cb887017a77c9a64693466d9"],["lib/velocity/velocity.min.js","00712c698199cdce0e7ad005bbfd1008"],["lib/velocity/velocity.ui.js","6f64204d50dde696a73d1ae3f238e6d8"],["lib/velocity/velocity.ui.min.js","a1cd3605a45f57dd74b8a5b84c8e3af8"],["page/2/index.html","2d368fcb6f973263d26fa0dff3c9cbd6"],["privacy-policy.html","a96bb6d163c2e41c4cc094f248b5f320"],["tags/Crisp/index.html","728205f5c36cc02d0ca3e661345dabc1"],["tags/github/index.html","329fd63b563792232dda047f3e4a1847"],["tags/hexo/index.html","625de83665ea355869fa9026ee2d0592"],["tags/hugo/index.html","31a999ac53c7e04a58047ad82c539449"],["tags/index.html","2d50b679de0058b9ec2c51db922d7f9f"],["tags/termux/index.html","bd6f5140d5fd55654140484b3ea4d6fd"],["tags/wordpress/index.html","6f54db7d3826de1812720db19fb2711f"]];
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







