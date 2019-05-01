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

var precacheConfig = [["404.html","62ae3cc95eb85842091310abdf6e9bb8"],["archives/2018/11/index.html","eb646fd6d76933e6b5dd0b9d4b62d572"],["archives/2018/12/index.html","18b7310e4c77d2194e00d308a6ba28ab"],["archives/2018/index.html","12759821ac0b14ed08f32fbec41b050a"],["archives/2019/02/index.html","7d7504152937bf3b7daf744adea370ac"],["archives/2019/04/index.html","c289c3ac8dc73b41fd98ffccfd12cbec"],["archives/2019/index.html","2d0986abf5bfcf527e29a1b97546e6ab"],["archives/index.html","034c95f99add6b963480f15d9eff4eae"],["categories/index.html","8cddc4be6b7ba3324f6c77640b9c8f5c"],["categories/呢喃/index.html","82817bd82453db4d86b06abd1984d266"],["categories/折腾/index.html","88ed88d488c42b811198d310e53673f7"],["categories/矫情/index.html","0314d9da39d19793e0de07ee8089c5f9"],["categories/造作/index.html","ec756e6697dad85b6a0d7ff310ac59d2"],["css/main.css","ce3c470e829cc6ff5f10322bd9a6b81c"],["essay/2018-11-11-hello-world.html","db7262f9bb29763f1738c844109cfd7e"],["essay/2018-11-18-new-starting.html","7013d88266b4ac13402943ef94d3c3ed"],["essay/2018-11-19-winter-trip.html","da337d75644c362cc559b641db964997"],["essay/2018-12-31-2018-y.html","c11c2cf2258ecb85426346d5caae1461"],["essay/2018-12-31-wordpress.html","44eb41a77f3c1239269aa902ec643b9f"],["essay/2019-02-05-hello-world-2.html","3be9e166c322b0b4c5040888cc0abdd4"],["essay/2019-02-19-add-crisp.html","780d6671f677021c3d5ee9b72178b418"],["essay/2019-04-14-senior-bye.html","1ca499b197fb72e235ff821e1079ac1b"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","a93a1020621bea4d4bd7391d529a3970"],["js/affix.js","b1288ac8ee0099f60a3850c201dd102b"],["js/algolia-search.js","e09e1c1bb1c6dd5b98dffddb5be315eb"],["js/exturl.js","b0ef3fa304a6500e0425513aa6971f02"],["js/js.cookie.js","2a6939fad65ccc09391b46864c0694aa"],["js/motion.js","20ef7c56d60200608cb092e6c58ca9a2"],["js/next-boot.js","313a9ffd2acb5abad183f7ea7146652a"],["js/post-details.js","f35a8f6f0a273859173b7e648a142559"],["js/schemes/muse.js","092dded4514a6e105eb6afafe999745b"],["js/schemes/pisces.js","c7d9951ce85431a282836fb272b97f4b"],["js/scroll-cookie.js","411dd38cf0532bf74018170db24e7875"],["js/scrollspy.js","9b36c35b9213b2ef816bf96f0ca9128c"],["js/utils.js","fa5bb534d2b8d4cd9614b42e21b30286"],["lib/canvas-nest/README.html","042d00fa3e36971548b4eaedc3682d1f"],["lib/canvas-nest/canvas-nest-nomobile.min.js","974d6f9fd33aa406ca203a8ccdc73488"],["lib/canvas-nest/canvas-nest.min.js","4bf3b7208343ced0fa14b55d16676d13"],["lib/fancybox/README.html","1058bfd9510cf26d5e24e3850529dfeb"],["lib/fancybox/source/jquery.fancybox.css","467cfa461bc5677cf25a387d0dc581e7"],["lib/fancybox/source/jquery.fancybox.min.css","118ceafd21caf6286e175c674582e427"],["lib/fancybox/source/jquery.fancybox.min.js","c9b514d41866694af0a8d40e2480a84c"],["lib/fancybox/source/jquery.fancybox.pack.js","7036fec8915a7c64a35745d6555aa26f"],["lib/font-awesome/css/font-awesome.css","0582c469f0ad2191a4c3448534ea6079"],["lib/font-awesome/css/font-awesome.min.css","d6eea94180dc58a790d32c51b129df46"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","8b2d8ebb68534b8086f59a96fea10a26"],["lib/jquery_lazyload/README.html","46373b198b18aec203c9cf2ef0211afa"],["lib/jquery_lazyload/jquery.lazyload.js","30d352d2de5f2933317479b0e3a188bc"],["lib/jquery_lazyload/jquery.scrollstop.js","39eae374c097f026905abdd9f17f55ba"],["lib/velocity/velocity.js","c54d6b7a864e78dd80c667a302345e8e"],["lib/velocity/velocity.min.js","1effbc516008ad2922acded181123d9d"],["lib/velocity/velocity.ui.js","e5139c71284fa744b6193bc8589c998d"],["lib/velocity/velocity.ui.min.js","c5b7f36ff9b4bd94847aa4fadf10eb43"],["tags/Crisp/index.html","9980f265a467faf5abdf75aeefe13d5c"],["tags/blog/index.html","3d80d3db5d2961768b57f68e8f9f008f"],["tags/diary/index.html","7c46a4c27a559122b16c9e8c3a75aa5f"],["tags/github/index.html","207ea66ae6d0064991514cadd6675215"],["tags/hexo/index.html","00ccec5bbee42ffa92a105ec1b27942a"],["tags/index.html","838b3564fc4a39fa9ab61ce16cef06ec"],["tags/termux/index.html","d865c1ca1e3d5663ff67736569411a92"],["tags/web/index.html","d8cb82d66d6cb46acb90ad91cb407b94"],["tags/wordpress/index.html","da2672588dc3d35de83058618da7e306"]];
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







