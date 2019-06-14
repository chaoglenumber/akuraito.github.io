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

var precacheConfig = [["404.html","9593dd3df5cc1ae6a93ea1029844b00a"],["archives/2018/11/index.html","7ce322610da423e78738d8110dfda3ef"],["archives/2018/12/index.html","a330b4b27dab321e8cba99d3904d0d73"],["archives/2018/index.html","7a70707b9278661ed1bd61907620284b"],["archives/2019/02/index.html","13c56b9c00aa799f49bcdbc0f44a811a"],["archives/2019/04/index.html","6dd4bc431597e16a3edea2fd5294be7e"],["archives/2019/05/index.html","8f7e19d6badde9da900dec865b6e967a"],["archives/2019/index.html","a50b0421c74e683ed3512ac5cbbcdaf6"],["archives/index.html","e5607c49a5946102891d3b4c1609a451"],["categories/index.html","f2706d650e3c14c4d56588eea8bd2dc3"],["categories/呢喃/index.html","14eb614a909af821adfdb3a550b7e623"],["categories/折腾/index.html","d98741a614018cf386678132779736a8"],["categories/矫情/index.html","06f43e98953784e6eb9e2a351c58fd82"],["categories/译文/index.html","8c5d6cff97b3e2bf294cf0db4b3d39ee"],["categories/造作/index.html","ba1978674a280cc032cd76690519e098"],["css/main.css","e9eef047fed48617efe229020f5ea7e0"],["essay/2018-11-11-hello-world.html","a24b2ac9966a8361fa1f039071fdb54d"],["essay/2018-11-18-new-starting.html","fb33b07c039bd7b89b40bab258fc5135"],["essay/2018-11-19-winter-trip.html","dd20ee5317083f2d105b75a028c295aa"],["essay/2018-12-31-2018-y.html","483e43c2e999121a6c675f8cc6a26dc8"],["essay/2018-12-31-wordpress.html","90e990859b68b858f783d7585fad7d83"],["essay/2019-02-05-hello-world-2.html","95f82a589ed5ef5ff85b027575ba205b"],["essay/2019-02-19-add-crisp.html","db2861f245512b6abe9b9837179ba679"],["essay/2019-04-14-senior-bye.html","b32ece6679703b8145e5da86443afa28"],["essay/2019-05-19-hugo-on-termux-tslt.html","b78bb3182e716a961fb37f65ac2166d4"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","8ba000d0b7565a6750840a4de80943d9"],["js/affix.js","95105e430654c0eb8f89257bc13f9cb3"],["js/algolia-search.js","1a48c716984d91364e11f58b6c296394"],["js/exturl.js","840b9d8fb90a145637bafdbcd74722b2"],["js/js.cookie.js","7fc9faa7e7bc40635bd4d4959c02aa26"],["js/motion.js","1bb034f669fb856df89ef5e8256ed825"],["js/next-boot.js","fff3e2fdaea87f66014f83a7616e654c"],["js/post-details.js","6a92749925a4f892d47877f18813aabd"],["js/schemes/muse.js","2a4071153786ce0c305377114db4971c"],["js/schemes/pisces.js","9e0dfbfb4ae49beb218567e0a415ae52"],["js/scroll-cookie.js","a2a0c8b4a29e2fdfc6121040f9b587e2"],["js/scrollspy.js","717596efe7d25e51f68aa4b40acdc9a8"],["js/utils.js","f35a1272cc4643e16abbe17f45db8175"],["lib/canvas-nest/canvas-nest-nomobile.min.js","66dee47f08c735ace746498bed72f568"],["lib/canvas-nest/canvas-nest.min.js","1bc9f24f5bb5a9c3ffa0e448999c731f"],["lib/fancybox/source/jquery.fancybox.css","d071ee9db1707bc40c7e053e5a23b67a"],["lib/fancybox/source/jquery.fancybox.min.css","1faedddbbbf135a3772b661bcc882fb0"],["lib/fancybox/source/jquery.fancybox.min.js","6b6689b20425225db3cb21584d0dc495"],["lib/fancybox/source/jquery.fancybox.pack.js","a3932a79373e14683f8aa433ca2a0264"],["lib/font-awesome/css/font-awesome.css","ef3c92968092646f75ef8d1dc6433500"],["lib/font-awesome/css/font-awesome.min.css","bf5bdb7e4c3619c4c50fa2e4fcc90320"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","f7c2803f021056a191446f0971366886"],["lib/jquery_lazyload/jquery.lazyload.js","0f560d15c5b6c5d3c3a8d9b5c86b5e0a"],["lib/jquery_lazyload/jquery.scrollstop.js","d3fb563544010780c10d42c3ca9cb724"],["lib/velocity/velocity.js","3b01ba89593b490cd724d60be3929381"],["lib/velocity/velocity.min.js","72a9583dca5d4b0c52c0fb693cd6d113"],["lib/velocity/velocity.ui.js","345667eccda014975316d769838be1c2"],["lib/velocity/velocity.ui.min.js","b38367ba55139e975b2c51b7a8d0a5f7"],["tags/Crisp/index.html","79d6b07775f0bb385e32436e70c355e1"],["tags/github/index.html","3fdd45c311954e3a5d67170553bdc69b"],["tags/hexo/index.html","769dc37439e49d5088db98bbcaf5d8be"],["tags/hugo/index.html","cc0470359ed1222c1fe7525982c9298d"],["tags/index.html","e6be3e52329805867586637533bc9113"],["tags/termux/index.html","732ad6833652056148c8c778c4941aec"],["tags/wordpress/index.html","e4d523e7f9d2a3db12885279c8cc858f"]];
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







