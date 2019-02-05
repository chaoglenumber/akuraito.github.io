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

var precacheConfig = [["404/index.html","06f3d9b83d402047a7dbdcef7a0a085e"],["archives/2018/10/index.html","2b13573a4e0f691cbff7bfd76e7c6e19"],["archives/2018/11/index.html","51bea456059e2871071e555741378c6d"],["archives/2018/12/index.html","333c9f6a943d1f604bfab1f9859c7a19"],["archives/2018/index.html","d4f04a75a9ed8ab8e71259db94e93cab"],["archives/2019/02/index.html","322b950239e67ca911979f5aa370185e"],["archives/2019/index.html","817677a7cb108001530d13fec5035827"],["archives/index.html","a0f9a42fe6639aefcfb07252009aba73"],["categories/index.html","34e57a13b92684c3b31e8e05e645739a"],["categories/呢喃/index.html","486c18475e1fb351b07739586b9853ab"],["categories/折腾/index.html","8a322d64fea8193ab4ba2e68bd5f638e"],["categories/造作/index.html","f5f841fca0f8147e3832d886ad5361b1"],["css/main.css","287b226550684cee6c9392d417366b1c"],["essay/2018-10-28-web-build.html","91f5f19c9f6106699133bb46a4195697"],["essay/2018-11-11-hello-world.html","c536da0de574e7e853cf73d1df6962cc"],["essay/2018-11-18-new-starting.html","360d7625c7939ddbd94c5530cb2845ac"],["essay/2018-11-19-winter-trip.html","d2510c2e7c631a40d5b7147b08da0379"],["essay/2018-12-31-2018-y.html","e272e050e09b13ae73772826d9e938c1"],["essay/2018-12-31-wordpress.html","9f21eba7cfd27e6d1d964c88f06d7026"],["essay/2019-02-05-hello-world-2.html","7adc1045e22e6a6486b01ca840b9e5a4"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","ff0e3e28c9c5a14d26f21686f1f79ce9"],["js/src/affix.js","ff0befb5c569a1f249ceb34b8e8479f9"],["js/src/algolia-search.js","39ff2502005572ff9a77b964c7093c35"],["js/src/bootstrap.js","eeef166bc34397f9fe379eeda1d5fe2c"],["js/src/exturl.js","867e559ddfdce4469a45c26f7371006a"],["js/src/js.cookie.js","5f38e3639f6e2263b7ec4dcf61b9456d"],["js/src/motion.js","233900f6e259397ff2e6cc1b151e10f0"],["js/src/post-details.js","4e6de9b8e95f01e44518e46c1ad54fae"],["js/src/schemes/pisces.js","a9e7b2994f14ba493d4ecc2560062b7e"],["js/src/scroll-cookie.js","8ad49a1527f7d82f18a129646eb85e1e"],["js/src/scrollspy.js","72125c17de92c12b56a5c652479bd60a"],["js/src/utils.js","3a82ba48c38c7e4978e2452c0145a909"],["lib/canvas-nest/README.html","eaca8fc13ba91c7f0ae5314c32a334b6"],["lib/canvas-nest/canvas-nest-nomobile.min.js","6f7c93bca370c5cfb59449f97a8cb2e6"],["lib/canvas-nest/canvas-nest.min.js","4cd818a7e57064ff3d7c729f5e0567d4"],["lib/fancybox/README.html","e727d71269bd5efb864080afd0e9f4b6"],["lib/fancybox/source/jquery.fancybox.css","c638c00ca8506b6f4ede7eacf2403ae7"],["lib/fancybox/source/jquery.fancybox.js","5526f646e9abe206d7bbfbf9dd27a3ab"],["lib/fancybox/source/jquery.fancybox.min.css","57dd62a79ebbd9c27bd20200fb8548f7"],["lib/fancybox/source/jquery.fancybox.min.js","70ffd9ac2cceea289241eef20c43351f"],["lib/fancybox/source/jquery.fancybox.pack.js","6645fd6d4a486dc4149a7f0d0a52320c"],["lib/font-awesome/css/font-awesome.css","8da7261d80d582f582b8a349f0e1c58d"],["lib/font-awesome/css/font-awesome.min.css","a6aa32f8b5afbb25df914ba6003e4d6d"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","5292a789676f4794f514e4abc09d225b"],["lib/ua-parser-js/dist/ua-parser.min.js","786c399708327e4ed69defe35b1054cf"],["lib/ua-parser-js/dist/ua-parser.pack.js","057d6c5d45cfd5b525ecd397352a7527"],["lib/velocity/velocity.js","08f94821d1524d74ab67e24aba8f9d77"],["lib/velocity/velocity.min.js","d70f92eeac9ff6e2ff4bcb6329e0615d"],["lib/velocity/velocity.ui.js","0b409c9cb6dbcd341b1ac727e0e88801"],["lib/velocity/velocity.ui.min.js","ecaa1187deb0552a0dac0a1f001a4836"],["tags/blog/index.html","8b0f78e5adb604f6469db21f01cfff42"],["tags/diary/index.html","20a0bafea0447edb9daec5ea378c038a"],["tags/github/index.html","b2b6bdd5008bf9c170a68b5d96a6f74c"],["tags/hexo/index.html","b8093dc49ec884a5d8a28734c4f94e90"],["tags/index.html","697b9e5b57b707cdd759b61f6b10a402"],["tags/termux/index.html","72a6c185d1c015344f397ea580a84689"],["tags/web/index.html","44f32f2f29dab4f9663036dc4a6e07e4"],["tags/wordpress/index.html","e35f0a1cc72199735f0582497d101e1d"]];
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







