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

var precacheConfig = [["404/index.html","42374d149688936eaf5612ffdc5be79c"],["archives/2018/10/index.html","2c6c7547ca3f825288224f261227ddca"],["archives/2018/11/index.html","eacbc4e56d87ff9eb91f10b8f97a5800"],["archives/2018/12/index.html","c29d5e32c325d7083804dcbf6a0196aa"],["archives/2018/index.html","dbfe48661d78e1acc408b6e06fdfa863"],["archives/index.html","a1d2544dd2fd33e8af89852c8c537309"],["categories/index.html","0457aa57a27a07e26a6722f80d4e6378"],["categories/呢喃/index.html","b77d78361a66f752d8c77a755623b27b"],["categories/折腾/index.html","21aa4ec2f70a8b8c7c4e1763083e726d"],["categories/造作/index.html","c920f9babd72699d9b8403f4249ca862"],["css/main.css","f00f8b151b41f473108d398ed6af2e80"],["essay/2018-10-28-web-build.html","54a2bf87d517263768a4b40ad98108e5"],["essay/2018-11-11-hello-world.html","e85f434e9f1226083a8ee4ec8e21f744"],["essay/2018-11-18-new-starting.html","275a1ca1c9962dec5a44f2f6a3d8b818"],["essay/2018-11-19-winter-trip.html","b8052e0b48122f20241a613f851d6f3d"],["essay/2018-12-31-2018-y.html","fb06952a7969a38d77b0758edccf9af4"],["essay/2018-12-31-wordpress.html","9f7fbef5f37ef550aa78280af9574bd4"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","df635e9cea34d4e26ced518c4c840c4d"],["js/src/affix.js","2b0497541c1f752a801cc656c42ac7e3"],["js/src/algolia-search.js","5f7df2b5b06ed6853c74ae5559fb2485"],["js/src/bootstrap.js","95a8f6fe2bb2ea65331afd4cbefdf6b6"],["js/src/exturl.js","feb6b27dca177ddf8318afd6804a1c79"],["js/src/js.cookie.js","1a6b1e1a42ef212ec02ea36737bf30bf"],["js/src/motion.js","4aaef8efb059d0fcd232f616b0e15156"],["js/src/post-details.js","81aa262f466484616679df8058d70524"],["js/src/schemes/pisces.js","be0f3e85e7a3e2f5bdfa42f461311868"],["js/src/scroll-cookie.js","bd1cb7a3d10b6fdf93ea86a048fc5b16"],["js/src/scrollspy.js","53c92585a5b90193b71eaf51ee5628c0"],["js/src/utils.js","41149427226107bbd383713f5369475c"],["lib/canvas-nest/README.html","6515337b23af5f677b4835146bb70ef5"],["lib/canvas-nest/canvas-nest-nomobile.min.js","71dc299652f077e465bfb8ceb459a3a4"],["lib/canvas-nest/canvas-nest.min.js","94330a30eb07a3963c45312248d922e2"],["lib/fancybox/README.html","ce6af9c47c14ded3e4c9c952f42e501f"],["lib/fancybox/source/jquery.fancybox.css","f9e23e74a27808bd764708af1bd4c35a"],["lib/fancybox/source/jquery.fancybox.js","05437ab2d4b50340e300661cb1357701"],["lib/fancybox/source/jquery.fancybox.min.css","317f34fd575e54aa16b72bf3c0b42739"],["lib/fancybox/source/jquery.fancybox.min.js","1d45a430ecb26ed847ecb7fb81e6fc8e"],["lib/fancybox/source/jquery.fancybox.pack.js","0735a09e1a954389b3f6400e82c82850"],["lib/font-awesome/css/font-awesome.css","9594fa6f3cf38f69828d6a3fa951254a"],["lib/font-awesome/css/font-awesome.min.css","fd462af8b3dca0f104cee23701514f8a"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","dcec0daa91616ffcc40921edd627ec5e"],["lib/ua-parser-js/dist/ua-parser.min.js","e3fdf64490f162a649854979dfb965ce"],["lib/ua-parser-js/dist/ua-parser.pack.js","97e40691219d82417c9250e097c46373"],["lib/velocity/velocity.js","cf604ab2a2b743d9352ae79c42820188"],["lib/velocity/velocity.min.js","4d91f6367471124e61a6ccd9c52cda18"],["lib/velocity/velocity.ui.js","c27002433c055f09d5e4109eeb516650"],["lib/velocity/velocity.ui.min.js","a5426d468916480bfb5a3a1e29537be3"],["tags/blog/index.html","a378f73ed47c7a7d8212e6def13a6d93"],["tags/diary/index.html","366191ba3879849d3fefb08e7bf1215d"],["tags/github/index.html","052d107aceaadfd38af70f0dd3a28102"],["tags/hexo/index.html","51d1ec4dc65add885f45079c562c7b35"],["tags/index.html","8b778c146f39220e2a58dad35f651a8c"],["tags/termux/index.html","42b7fc6539a9c254320dbd17e15055db"],["tags/web/index.html","4007e41ef94f29d7031383d928f8fbbf"],["tags/wordpress/index.html","2bdbc148bb1f60f5b0578d9dc3f24780"]];
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







