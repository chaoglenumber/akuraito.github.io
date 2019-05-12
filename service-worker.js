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

var precacheConfig = [["404.html","672b59e3d4fd9a1bfe1f36a86504445a"],["archives/2018/11/index.html","3fb7b92e4926e8bcfa643fabe68d9d20"],["archives/2018/12/index.html","68b326008bd50c7523b580cea4c5998f"],["archives/2018/index.html","08a90ed9248ca90714e57a838326df15"],["archives/2019/02/index.html","ef429f3eb9cbd3938a09c9d61845c795"],["archives/2019/04/index.html","39d711973d26b44578aa16ed76766bdf"],["archives/2019/05/index.html","97851e4dab7b6be3a47f9a4d301ad611"],["archives/2019/index.html","a6e83ccbebf7646aaa8c8462c92567ea"],["archives/index.html","11bb9ffd7871de6d61733602a0448575"],["categories/index.html","77d1c99fb6d26d65336ae6103137b6d5"],["categories/呢喃/index.html","8fd96266de2312d1ff47965e75934306"],["categories/折腾/index.html","0677ebcd13c3b2dd5e5d05687e37eaac"],["categories/矫情/index.html","1a84abd2c6b8846bfd6cb5252f52d85f"],["categories/转载/index.html","ef474aa0f6bce9c0ea87c51da27070bb"],["categories/造作/index.html","353da37cab59ae4d4bfa195c3ece9d9e"],["css/main.css","27868ef02819e4228df1259d46e7bbfc"],["essay/2018-11-11-hello-world.html","a80265b0b02f54c5bedc71841666b948"],["essay/2018-11-18-new-starting.html","14094850aaccc33c76b850ab5e3c61c0"],["essay/2018-11-19-winter-trip.html","79939992adf30d68aabf25192e147133"],["essay/2018-12-31-2018-y.html","007380f814b7be0c387142488e67f38e"],["essay/2018-12-31-wordpress.html","e531227ade18952c49cc0ad4a308b873"],["essay/2019-02-05-hello-world-2.html","04add0da2271375135775d0dc7ca4e56"],["essay/2019-02-19-add-crisp.html","a5c03bc2ed1bde67dc419bf256e35f19"],["essay/2019-04-14-senior-bye.html","060e60920b3536183ee86ce8c134dba5"],["essay/2019-05-12-novel-the-sound-of-silence-from.html","459397d3af4f7acb932851276a4914d6"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","8f89870e4cf2628572bfdd0bf6d0d571"],["js/affix.js","e84c2c7f1fb92f1e5d559ba5a1aa5e19"],["js/algolia-search.js","88f540e65c6c86c174bdd7f5b016babf"],["js/exturl.js","acc02d798bf37418d1cdb87249211d60"],["js/js.cookie.js","e712c2dbd2cba6c8ce1073c15d2cb40f"],["js/motion.js","237560b9d85d1f638981c54bb14a9cd7"],["js/next-boot.js","9c177f60d834b3786e5c428ad16d0fda"],["js/post-details.js","fc33ccd992e967693bd4740c233030d7"],["js/schemes/muse.js","b6a04d521f6abe3cff29355229760425"],["js/schemes/pisces.js","6fa1cc2ae5687035d82b4a03c3ea9024"],["js/scroll-cookie.js","98fe784ce7684f321501ba398e2ed00f"],["js/scrollspy.js","2ca5eefba6ca451a97d3e19c40807dc7"],["js/utils.js","efcffe9dd2fe68492b0d38853566b254"],["lib/canvas-nest/canvas-nest-nomobile.min.js","b40176c38132406d2f60ba57ca17b921"],["lib/canvas-nest/canvas-nest.min.js","0b555c05343f355c17ad9a19ee05e5a3"],["lib/fancybox/source/jquery.fancybox.css","fc49a676343d7ec257c3ab8ea0c53851"],["lib/fancybox/source/jquery.fancybox.min.css","6547011a40e9da5673bee1f5de90ce30"],["lib/fancybox/source/jquery.fancybox.min.js","dc8cee00cdf07186e5f237b37a052785"],["lib/fancybox/source/jquery.fancybox.pack.js","70bf4dce02df2aee65975848f1c69213"],["lib/font-awesome/css/font-awesome.css","931813e2c95b50122397f8c5cc242fd3"],["lib/font-awesome/css/font-awesome.min.css","4b3c77f709809f8e03ef5917ee979f2c"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","ac61eaca889a34d6e02037233c2b3d6d"],["lib/jquery_lazyload/jquery.lazyload.js","75801e4be634293c4e4a0efcf3332281"],["lib/jquery_lazyload/jquery.scrollstop.js","5f196f7d999dfa2714586cd5df310599"],["lib/velocity/velocity.js","c57451edda35ec8eb74fa0ab2ed5189d"],["lib/velocity/velocity.min.js","4831003aaead3e26fbf0cb0ce8892f78"],["lib/velocity/velocity.ui.js","bf7519db1ab803420eaffe859bb3b653"],["lib/velocity/velocity.ui.min.js","515e76aadc445818cda2b593db2e9d7f"],["tags/Crisp/index.html","38d4c8b85ebe08342b4aaf88356e99c8"],["tags/diary/index.html","6a61761c2bebb89b8ebac1a364f3bcfd"],["tags/github/index.html","1d7e0f1a7c65ffd6af4f27313af6883b"],["tags/hexo/index.html","cd6ef5a59b1ff3e3fc69208887fb685b"],["tags/index.html","ce9de40e56d639a8999e437ef508a14a"],["tags/termux/index.html","fdbbd6fdc8ad7e51ac18d596249c3216"],["tags/wordpress/index.html","639eb0e8ad28af748484df6e5715a354"]];
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







