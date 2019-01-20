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

var precacheConfig = [["2018-10-28-web-build.html","9c75aa818172de84af69d8ad530d935e"],["2018-11-11-hello-world.html","badd396f99a20ba177a98c384e593948"],["2018-11-18-new-starting.html","40b78825efadd598e3cfb65f77131cd4"],["2018-11-19-winter-trip.html","e0a63b26954e8ed547e17b1d90a052cc"],["2018-12-31-wordpress.html","0cc680eb920b797bc240fc7f1043786c"],["404.html","d4f80ab4a08dd088261588eee78d6dec"],["404/index.html","b982328fe08b9ad393d979ff0e416a37"],["archives/2018/10/index.html","4354ac4496c846b2f6dae2cc6b5b3f32"],["archives/2018/11/index.html","ea743287508a8a0e1c9509df2811bf73"],["archives/2018/12/index.html","7cd360e973dc49d77ef032220f18a20f"],["archives/2018/index.html","2fe017d481cace5018d462b494c3bd5c"],["archives/index.html","92c6f547e9054161e1426e3a5f357fc4"],["categories/index.html","cea66e982ff0fa5d57b0e28312dc5e6f"],["categories/呢喃/index.html","af254754deb4bb1998a089a59945fbec"],["categories/折腾/index.html","31fc251e2f76e39ffa047f8aeabc13b6"],["categories/造作/index.html","f488674b7a01cfc8ccee2fd79264d44c"],["css/main.css","8aec567823564801b4ad9844f08e0cdd"],["essay/2018-10-28-web-build.html","19fa30729ab52b771b4989718be3a0ef"],["essay/2018-11-11-hello-world.html","4fc868f202d7a97b559f55c562fa9b77"],["essay/2018-11-18-new-starting.html","b27910fa3cc621f85e30c254de2adc73"],["essay/2018-11-19-winter-trip.html","b4c25e09605227619f29f436a4bc6677"],["essay/2018-12-31-2018-y.html","e96718200101257980ccbd23fcde8589"],["essay/2018-12-31-wordpress.html","5da55657ce5c427ec76616f8fe7527b1"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","4d0fca45d12a067b5b6b0d6222090203"],["js/src/affix.js","019100cd5d57d4701d4cf9b453badc7d"],["js/src/algolia-search.js","12fd1bb6aeb46f520a60baa969e48d0d"],["js/src/bootstrap.js","c67b5efa90f47335818fa8b885cfa437"],["js/src/exturl.js","3dc9dd6df4c4b24a14ed27d8a26a237c"],["js/src/js.cookie.js","2dc6a561b5f97575ab7faacd0de7d352"],["js/src/motion.js","786ce1d8e387752c159b3601bd8601b8"],["js/src/post-details.js","b112a489ec476470665182a6e4c10409"],["js/src/schemes/pisces.js","8784dda302fb5d844dff0a4d136537ed"],["js/src/scroll-cookie.js","6903b98486d4ba0c73c404f43f4e3050"],["js/src/scrollspy.js","c1b7487ed4c768aed764fbcbaf41e3a8"],["js/src/utils.js","93c18a9071fed7d4bb2c1d763a13de78"],["lib/canvas-nest/README.html","b67379be000f466057b7dad1d6e346a8"],["lib/canvas-nest/canvas-nest-nomobile.min.js","b5d185c8a9de19dfcafe4aaac9a78036"],["lib/canvas-nest/canvas-nest.min.js","b84edc8d57ecc88554bfa1d138a352df"],["lib/fancybox/README.html","dc0786f2ec31d4e61e49da3258918ea1"],["lib/fancybox/source/jquery.fancybox.css","0ef388723fa5e9eb2607d3711fca0c3c"],["lib/fancybox/source/jquery.fancybox.js","ae3db4ab475a112f75ef4949fa4983dd"],["lib/fancybox/source/jquery.fancybox.min.css","cde0b34e3592ce81abd8e054d783f569"],["lib/fancybox/source/jquery.fancybox.min.js","fa6fbf6353433ed752325ca40cea9bec"],["lib/fancybox/source/jquery.fancybox.pack.js","af66017cebe5651fff1e69eab6fa9f53"],["lib/font-awesome/css/font-awesome.css","85463644426bd992c4ae5318ca7e6f33"],["lib/font-awesome/css/font-awesome.min.css","7369ca8aaf56d0851039c2805dd98310"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","5988332cd3d38a2cf7d7dc23862faf2c"],["lib/ua-parser-js/dist/ua-parser.min.js","959a783664358cc9b58919fb14236640"],["lib/ua-parser-js/dist/ua-parser.pack.js","77999f89b421b5bc3bfb223140cf3feb"],["lib/velocity/velocity.js","2694856af7ec98a4f9f89efa7815d3a6"],["lib/velocity/velocity.min.js","37a93ded98558d4f34af44f05f49b328"],["lib/velocity/velocity.ui.js","727d9a9da7518174030174ed26451399"],["lib/velocity/velocity.ui.min.js","832b32075f23f1d98f37a555a26f859b"],["tags/blog/index.html","60b61054efbab8ebad49db44c3205923"],["tags/diary/index.html","cb86b9206c64deeb6e0544544e1095cf"],["tags/github/index.html","b43dedda317b7c565c235b1a0fedc115"],["tags/hexo/index.html","b55431437a17903ee4c3f84abf658795"],["tags/index.html","d1f8158bc589c017b23025fc636fb0d6"],["tags/termux/index.html","df44ee157eeaf34ed25e0a578ce17c27"],["tags/web/index.html","56374e80c607f2eb72a49ff9acd7ffa2"],["tags/wordpress/index.html","cd1720e17544cf5a365e27f886633b7e"]];
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







