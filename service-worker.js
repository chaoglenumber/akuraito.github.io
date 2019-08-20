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

var precacheConfig = [["404.html","fd29223ca49616b8886aeb0e03d9c35c"],["archives/2018/11/index.html","45a5fc1af712152de596684460638e57"],["archives/2018/12/index.html","7d259d3bb630a07eda17fc3ce7a5e147"],["archives/2018/index.html","1b1984a9c215e6f8e535414e388ea2f0"],["archives/2019/02/index.html","a6dff547df35cefdc9cf8e073eaee69f"],["archives/2019/04/index.html","b82e1426833e7393d265046781decb49"],["archives/2019/05/index.html","1c3430512f3e3f6013a679483c2b6913"],["archives/2019/07/index.html","ea3f990f3eaa2d5dfcf141f00adc87d9"],["archives/2019/08/index.html","02555dc2fc7591c11aa31f1cc3e42f8b"],["archives/2019/index.html","031cbe6bdfdbd05dc6d3d707712bfb23"],["archives/index.html","f4a872e9b1848f5dbec23d24ed4fecea"],["archives/page/2/index.html","6edcb1cd3d5d2eca4caf495a77c78014"],["box/privacy-policy.html","ae17d6bb4437a4bd3c5304237ad66eb4"],["categories/index.html","f0c01e5efc9808b6cbb5f2f2a93126d1"],["categories/呢喃/index.html","921ea1479dc58d016befacccfc4a6562"],["categories/折腾/index.html","70452369a01944f456492f0d811f93ee"],["categories/矫情/index.html","60314fc333de833602fb2fb7a0727fa7"],["categories/译文/index.html","319e8f16c03d79d52feba66c2b5d62bb"],["categories/造作/index.html","bb11a17ecb06a24adafb1a9f80274d8c"],["css/main.css","d9684e335f4ce36821cc05841045b7f0"],["essay/2018-11-11-hello-world.html","9665cbdbd345dc6268bb27de665b5204"],["essay/2018-11-18-new-starting.html","f807af6fbc9c3d5095568c2efd8c7e1b"],["essay/2018-11-19-winter-trip.html","3f7e2e23e789759b6f0d841ff507f356"],["essay/2018-12-31-2018-y.html","38084ea8e9e3bdbad2ef344e186e32d9"],["essay/2018-12-31-wordpress.html","7abf3ad770292fa18a7ca7a17611ee7b"],["essay/2019-02-05-hello-world-2.html","e5a171ae0ea702207d6c35d118a87dba"],["essay/2019-02-19-add-crisp.html","0db4b32cb0530a487bbd8fefa43f67f8"],["essay/2019-04-14-senior-bye.html","261dd42bf103dd8a04d72a813a43985b"],["essay/2019-05-19-hugo-on-termux-tslt.html","ba65fd6c4123875d4b7a06120fbc937c"],["essay/2019-07-09-anime-saw.html","d75013a19b1afd79556f090236788547"],["essay/2019-07-27-yandex-mail.html","98779ba2e7d4b6742a19ba426c0f2f02"],["essay/2019-08-19-with-my-nokia-7.html","876a9cf5eab62962cd4ad33773abf6c5"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","e7f4191150d89a2712e07d1c1698e842"],["js/affix.js","88299c3476fdf270c9a2433cf7516765"],["js/algolia-search.js","cb9e8dbd2525916d85c2af5f144b1c3c"],["js/exturl.js","2e1a07c93e148530b08f6e0930d49006"],["js/js.cookie.js","0559389b28c129697de0b90d0500d2bc"],["js/motion.js","6eedd699dd5b0e30256cc6603348ab34"],["js/next-boot.js","2bc123457fd8bfc74786a49b0ffa51b5"],["js/post-details.js","c57148ce86de801127d58faafc66508b"],["js/schemes/muse.js","2fb5bd5055ab89742b30835df3abcdbe"],["js/schemes/pisces.js","18358c6e93eced4713b8468c6c8eaca8"],["js/scroll-cookie.js","bed0dde23643557c0fd96fcea6db3101"],["js/scrollspy.js","4c71c3be0c083d13f38410e8253d72b6"],["js/utils.js","b7e08edb49d2638533f2238cb974d410"],["lib/canvas-nest/canvas-nest-nomobile.min.js","34630eb7f8ee066e7822bf1cc9cdf0aa"],["lib/canvas-nest/canvas-nest.min.js","b8d37cc4c3a20fee0b866a75d2c40500"],["lib/fancybox/source/jquery.fancybox.css","4c90923e2e58388895dcf8c811d0a6e6"],["lib/fancybox/source/jquery.fancybox.min.css","e5884d39e41d72008e531a44318b4381"],["lib/fancybox/source/jquery.fancybox.min.js","73ad21315bf87bc6a78f3b488b476ac1"],["lib/fancybox/source/jquery.fancybox.pack.js","97026b53d5283ddb4a4835d05a07f3a8"],["lib/font-awesome/css/font-awesome.css","b32c3550c92ddf4bbd8927c5c33e41c2"],["lib/font-awesome/css/font-awesome.min.css","f6953648f0f7a882fd4932cae769356a"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","4397b3056e3f861bef65e4c504c077b8"],["lib/jquery_lazyload/jquery.lazyload.js","32c621efc6fbb03de3323bd7808414f8"],["lib/jquery_lazyload/jquery.scrollstop.js","9c062f6e09616264982b11b97be9edb0"],["lib/velocity/velocity.js","197b43f9f1011f131b5384591f7ecf0b"],["lib/velocity/velocity.min.js","b196e94031a2f57fe892d7e8ff100613"],["lib/velocity/velocity.ui.js","1b90bb7ac3a82b1db791ddde09c18c6e"],["lib/velocity/velocity.ui.min.js","9967b2fccf68f3245f563adcf54594da"],["page/2/index.html","bfb1f5abd6a869e071a7905b3ae17c41"],["privacy-policy.html","a96bb6d163c2e41c4cc094f248b5f320"],["tags/Crisp/index.html","24018d87eec0b8f2eaf7650f92c3deda"],["tags/github/index.html","5d1d5780226052a1dddfab1bb6d00870"],["tags/hexo/index.html","3146f6214eeefe67cfa3446fe2079db9"],["tags/hugo/index.html","8e12db99d0c4d31ec968370d2d59707e"],["tags/index.html","79e92659a1b24a86e012aff44f431c57"],["tags/termux/index.html","f9c0fa7989c0f43a144b504b487f4db5"],["tags/wordpress/index.html","c8f18e3a74db40a65d616e932fa40a05"]];
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







