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

var precacheConfig = [["2018-10-28-web-build.html","dc4787b7eb82cc6f474bc596860023a0"],["2018-11-11-hello-world.html","23d3d3517b210140d3f9a2d3f906e5d9"],["2018-11-18-new-starting.html","27ca8f62ecb2f2c3e4a6f99ca1459cc7"],["2018-11-19-winter-trip.html","143d8e05895859a74c57c54cd2588263"],["404.html","02c39c29a59a0623d73414d7cbebb6eb"],["archives/2018/10/index.html","d2b4428bc2c955cb8fbb9fbfc7571730"],["archives/2018/11/index.html","8fe74454580e6ff7d9edb5fc7557889d"],["archives/2018/index.html","40312a5277f0aefc84b6bcebedaca467"],["archives/index.html","448a61887646e6a93b615b5ab761bdf9"],["css/main.css","b7ada68ff70773e573c9643c6c310a3d"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","49cd0304d130914a7017b217b44a5fab"],["images/icons/icon-144x144.png","2ae6e39c0dcec56a770a42ec83eaad3e"],["images/icons/icon-152x152.png","f0e20393c81acddc09b3142dbf2b3bfc"],["images/icons/icon-192x192.png","24981de2142524ac57442b1e942f0839"],["images/icons/icon-384x384.png","1c2ca29c6fbcf715613ad53c2ab747b0"],["images/icons/icon-512x512.png","b4af95a4f063dcadc53b5c9e4d5a6a12"],["images/icons/icon-72x72.png","d2172809280e153232d58680704addf1"],["images/icons/icon-96x96.png","b0a8c633cd49b94ab8738ba25b1d8bd4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","5f8e49a068da3d411ac8de9ef9467565"],["js/src/affix.js","8963d1bbfd14927844f3155b51fb60b0"],["js/src/algolia-search.js","b432813141cab71483fab5d9ec28e157"],["js/src/bootstrap.js","f8f997ea893bf2fe36f70e0ca6802a28"],["js/src/exturl.js","b536aeb30ce4b0551a312b7f1f064a5a"],["js/src/js.cookie.js","8ab42f4b0ca4a6424ba113a2d9f81154"],["js/src/motion.js","cbf3f87d7a25526b9cf168f8e5ab91cf"],["js/src/post-details.js","200be89c71f86064d8702ec157802ac5"],["js/src/schemes/pisces.js","91cee854e6ed1bebe80b3bd8129ff3ad"],["js/src/scroll-cookie.js","de1a6a1868fd4d6baf93fcb03745ace7"],["js/src/scrollspy.js","c1c612a00201ffdc2e796704aed0c494"],["js/src/utils.js","bb6f06d0d39e7389cb95b86a8d6ff33f"],["lib/canvas-nest/README.html","12e431c74701b1f5c3d21ffc0b02a175"],["lib/canvas-nest/canvas-nest-nomobile.min.js","495cfce63b0dcc7843d30d388583d14c"],["lib/canvas-nest/canvas-nest.min.js","53e71dbe1c028a54b70140b01ac4dd47"],["lib/fancybox/README.html","3027368b348856a34560738b2d54426c"],["lib/fancybox/source/jquery.fancybox.css","8fdbc7d460253a1bceb311fb463cc5de"],["lib/fancybox/source/jquery.fancybox.js","aa7ba0620d3646fc00b58d41ea44e3c4"],["lib/fancybox/source/jquery.fancybox.min.css","190ba9dd1c138ce138e1823f3e8352e2"],["lib/fancybox/source/jquery.fancybox.min.js","482e3ba8c9c601693d6b0e4deb25d27d"],["lib/fancybox/source/jquery.fancybox.pack.js","68756a1ba26cca1c85a722fcf6c1b6a2"],["lib/font-awesome/css/font-awesome.css","01ee2024734e8763682e066966327f14"],["lib/font-awesome/css/font-awesome.min.css","37ec2c49a369f2a0f75e16815c416f74"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","6b8178098b14bc395ac987ae7325ffc5"],["lib/ua-parser-js/dist/ua-parser.min.js","609d50862cda3278fd07a5a5d8380fa8"],["lib/ua-parser-js/dist/ua-parser.pack.js","f9c3cd8889028ada7239cc93310d1369"],["lib/velocity/velocity.js","39b1305d410988c1d955070e6cec0132"],["lib/velocity/velocity.min.js","1902610b036d0cdeb2b785c5142a564f"],["lib/velocity/velocity.ui.js","dba6a7943b40c9ecfcd625ad9d6b273c"],["lib/velocity/velocity.ui.min.js","c8c7088535c9e3043940a7f2efb9026a"],["tags/2018/index.html","151bb222455b1a4b866724137e51b3df"],["tags/blog/index.html","3eb53577b1e26d7adaef0d1bc0a6eaaa"],["tags/diary/index.html","516b982c56f6ddc7aaff2ff9ffc1225f"],["tags/github/index.html","e8835a24e973568828c12407746891b2"],["tags/hexo/index.html","518bfc89ee2819bc66ce4814f47672c9"],["tags/index.html","880955f09ff35a68c208f8231d121a58"],["tags/termux/index.html","5656b8b8e353c0e7f38f37dafb7c3c77"],["tags/web/index.html","ba6836d7287e2582dccc6681b80b9ea2"]];
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







