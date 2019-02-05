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

var precacheConfig = [["404/index.html","04c0c2c9e79acb00261cb034a920aaf9"],["archives/2018/10/index.html","1e6770c54c1765c3a95f5540c8e336e0"],["archives/2018/11/index.html","40cf5ab63155cd6b66184d4c0b0779d1"],["archives/2018/12/index.html","be583b91741718bef0de4ab695f2cab5"],["archives/2018/index.html","ca30066ce2eee55f6827fef94e37b1ea"],["archives/2019/02/index.html","aa574dfd4f331e522ffd8dd5c8dd9c08"],["archives/2019/index.html","628594470fa0179e30629a369c183361"],["archives/index.html","710103daeb9492670130d668def0ad9f"],["categories/index.html","375762beeaa1feb59294b38c58639aff"],["categories/呢喃/index.html","4d1cb50aad38a392f514ed366c3bdea7"],["categories/折腾/index.html","5489666af762ef98f8b40025414a200a"],["categories/造作/index.html","0bab90360b2c5dcb621bd3d525f3f502"],["css/main.css","287b226550684cee6c9392d417366b1c"],["essay/2018-10-28-web-build.html","43e99ab02f40767fcdc5c27de52e4488"],["essay/2018-11-11-hello-world.html","1a22c8ae37a4972be314ef5557c12cae"],["essay/2018-11-18-new-starting.html","19e85ef6b62ed5e26abcc2b3b543b0d5"],["essay/2018-11-19-winter-trip.html","aff3371d21fedfb97d446a6ebb37a476"],["essay/2018-12-31-2018-y.html","2c702a4fc1705ea3481c954de8f92192"],["essay/2018-12-31-wordpress.html","a8ca32b28ff303ffc79f5e9176aebfe4"],["essay/2019-02-05-hello-world-2.html","8bfb8aa3eaa00d5604c6edc20c102bb0"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","88cfff3b9034c522e48637a03b81c17c"],["js/src/affix.js","ff0befb5c569a1f249ceb34b8e8479f9"],["js/src/algolia-search.js","39ff2502005572ff9a77b964c7093c35"],["js/src/bootstrap.js","eeef166bc34397f9fe379eeda1d5fe2c"],["js/src/exturl.js","867e559ddfdce4469a45c26f7371006a"],["js/src/js.cookie.js","5f38e3639f6e2263b7ec4dcf61b9456d"],["js/src/motion.js","233900f6e259397ff2e6cc1b151e10f0"],["js/src/post-details.js","4e6de9b8e95f01e44518e46c1ad54fae"],["js/src/schemes/pisces.js","a9e7b2994f14ba493d4ecc2560062b7e"],["js/src/scroll-cookie.js","8ad49a1527f7d82f18a129646eb85e1e"],["js/src/scrollspy.js","72125c17de92c12b56a5c652479bd60a"],["js/src/utils.js","3a82ba48c38c7e4978e2452c0145a909"],["lib/canvas-nest/README.html","eaca8fc13ba91c7f0ae5314c32a334b6"],["lib/canvas-nest/canvas-nest-nomobile.min.js","6f7c93bca370c5cfb59449f97a8cb2e6"],["lib/canvas-nest/canvas-nest.min.js","4cd818a7e57064ff3d7c729f5e0567d4"],["lib/fancybox/README.html","e727d71269bd5efb864080afd0e9f4b6"],["lib/fancybox/source/jquery.fancybox.css","c638c00ca8506b6f4ede7eacf2403ae7"],["lib/fancybox/source/jquery.fancybox.js","5526f646e9abe206d7bbfbf9dd27a3ab"],["lib/fancybox/source/jquery.fancybox.min.css","57dd62a79ebbd9c27bd20200fb8548f7"],["lib/fancybox/source/jquery.fancybox.min.js","70ffd9ac2cceea289241eef20c43351f"],["lib/fancybox/source/jquery.fancybox.pack.js","6645fd6d4a486dc4149a7f0d0a52320c"],["lib/font-awesome/css/font-awesome.css","8da7261d80d582f582b8a349f0e1c58d"],["lib/font-awesome/css/font-awesome.min.css","a6aa32f8b5afbb25df914ba6003e4d6d"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","5292a789676f4794f514e4abc09d225b"],["lib/ua-parser-js/dist/ua-parser.min.js","786c399708327e4ed69defe35b1054cf"],["lib/ua-parser-js/dist/ua-parser.pack.js","057d6c5d45cfd5b525ecd397352a7527"],["lib/velocity/velocity.js","08f94821d1524d74ab67e24aba8f9d77"],["lib/velocity/velocity.min.js","d70f92eeac9ff6e2ff4bcb6329e0615d"],["lib/velocity/velocity.ui.js","0b409c9cb6dbcd341b1ac727e0e88801"],["lib/velocity/velocity.ui.min.js","ecaa1187deb0552a0dac0a1f001a4836"],["tags/blog/index.html","b0efa9d02c6d7064061b3e32e5f1baa2"],["tags/diary/index.html","59afff24b94bef9acb6a0fb29d2a170f"],["tags/github/index.html","59dd2c6ad8f3dd323f82c8f8cbdf133a"],["tags/hexo/index.html","293104888e6eb201cb6e5714f9987802"],["tags/index.html","2846481780e5bd24ceabd5a767f8b1d5"],["tags/termux/index.html","67b6e8c58030b78ef025335e1f0fe6c8"],["tags/web/index.html","f6579382b6db6e5fb1c81f3db9a0042c"],["tags/wordpress/index.html","41aa7100014bf39c927e2506bb6af597"]];
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







