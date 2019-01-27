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

var precacheConfig = [["2018-10-28-web-build.html","9c75aa818172de84af69d8ad530d935e"],["2018-11-11-hello-world.html","badd396f99a20ba177a98c384e593948"],["2018-11-18-new-starting.html","40b78825efadd598e3cfb65f77131cd4"],["2018-11-19-winter-trip.html","e0a63b26954e8ed547e17b1d90a052cc"],["2018-12-31-wordpress.html","0cc680eb920b797bc240fc7f1043786c"],["404.html","d4f80ab4a08dd088261588eee78d6dec"],["404/index.html","5ee28ce299c06146fec007ab758995ee"],["archives/2018/10/index.html","9e50912833903d3b12bccac73f03585c"],["archives/2018/11/index.html","8d827b3c59238d5ea249a375e67d4671"],["archives/2018/12/index.html","6052b08d12bb21474e726b6b651f92ea"],["archives/2018/index.html","d88345960ca3e743e2b3b498f41170cb"],["archives/index.html","c95b755ab915dfdcb88075a17fba817b"],["categories/index.html","c01a5c7748eb7fdaf6bd71bc2d6a0eba"],["categories/呢喃/index.html","f89bf34bc63400055e5fdeb5e7d5900a"],["categories/折腾/index.html","dee27e4a2ea9ea86f9fefcbfe4c16c4b"],["categories/造作/index.html","452fb6185637196dd2e89f07466356b5"],["css/main.css","838b82a8a7a80740b1d13bd5d2f4927a"],["essay/2018-10-28-web-build.html","0fe82c1db92f03a890c8819025de1d65"],["essay/2018-11-11-hello-world.html","62d0de6d12b3358c886dd815c63a3972"],["essay/2018-11-18-new-starting.html","c2c1282dda8e5fc90bea176e1208e44b"],["essay/2018-11-19-winter-trip.html","7cefbb8f0629dd51fdab30ed2a542413"],["essay/2018-12-31-2018-y.html","8c007282d6e72d2f8af077eda198a411"],["essay/2018-12-31-wordpress.html","8ac2d21798376d27d83cedfaf2ce1438"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/icons/icon-128x128.png","0838b41a435f05c38aa7a7af0ddf2684"],["images/icons/icon-144x144.png","b1ebbcbba8bfcc8ad9896ff4b64fdee4"],["images/icons/icon-152x152.png","c4780c29f686aff4ffced0d9fa166269"],["images/icons/icon-192x192.png","786b68982a169bc074ea6eb72eef9a79"],["images/icons/icon-384x384.png","1edb511164c2d37e0e949896bfee4aa8"],["images/icons/icon-512x512.png","bc3adfaef949d7e6628e64a9cdb85a65"],["images/icons/icon-72x72.png","ac1328add35fab6e5b9942cf065c7894"],["images/icons/icon-96x96.png","bf819061aaf2a333ed0c49cd825a8aa4"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","3976eeac984467d17ceb02ccbc2a2926"],["js/src/affix.js","e076f770fb02f1f88b7a0a7b8e6badad"],["js/src/algolia-search.js","211f0597ccafa1576ed1886501eb69de"],["js/src/bootstrap.js","0079d80b538000317b220b50db2b058f"],["js/src/exturl.js","c21281d406d0123ce041093a24431c60"],["js/src/js.cookie.js","d3a853924e724843685e28471dec0f0f"],["js/src/motion.js","9400070c88f56af5534e7fabb752359f"],["js/src/post-details.js","7b56b7c35c57e60637471e557ef64e46"],["js/src/schemes/pisces.js","625fd3c77cb6cbfb4525280efa94198b"],["js/src/scroll-cookie.js","807994290a7b758c6362cd9788c61924"],["js/src/scrollspy.js","2ccbedc442d952625bbbb5ff4c8a9a58"],["js/src/utils.js","8512f5e19444aa9b02f46e78e2517ffb"],["lib/canvas-nest/README.html","2d5d7672917c211778f4f7d50139b2e4"],["lib/canvas-nest/canvas-nest-nomobile.min.js","018468603ef2da2bb2b994dc29d80e78"],["lib/canvas-nest/canvas-nest.min.js","05ee63859fb638b8d0c034c253197c99"],["lib/fancybox/README.html","9599b01cfd7ea987035d807155425aa1"],["lib/fancybox/source/jquery.fancybox.css","dc01f08b9bc73f5ebd35e03c2c4df6f4"],["lib/fancybox/source/jquery.fancybox.js","3ade20c753beb7a96a0db30f861c2259"],["lib/fancybox/source/jquery.fancybox.min.css","16c9940afd695e86704551bb58341ef6"],["lib/fancybox/source/jquery.fancybox.min.js","745bd1c8c4d0b6577e3b8920924b8758"],["lib/fancybox/source/jquery.fancybox.pack.js","fa409b5051743494fc4b77d1972633cb"],["lib/font-awesome/css/font-awesome.css","ad28caaf1ef9d509372e551879d3c55f"],["lib/font-awesome/css/font-awesome.min.css","1ec088b311f5000e98adc6c4b629c98b"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","fc0071fcfa19f35be743a4e364ffaca7"],["lib/ua-parser-js/dist/ua-parser.min.js","82bd7a5f3fd66ad17523f82bd9783f9f"],["lib/ua-parser-js/dist/ua-parser.pack.js","8fdf8c9aa51e4cfc5d088f8518d78cee"],["lib/velocity/velocity.js","1a7401369080e31edc3bbac49ac09f96"],["lib/velocity/velocity.min.js","a831607b78a454fd8ba0ee84eefdd8c2"],["lib/velocity/velocity.ui.js","452f05cd2dbdafe35d348fcd46adfeba"],["lib/velocity/velocity.ui.min.js","6ef3da9d8db71c94b3a4f0924355d118"],["tags/blog/index.html","1a16952549b3fbc33e24fdf8ec090a36"],["tags/diary/index.html","aae38fff6138b693fe7a6b871cea6d83"],["tags/github/index.html","00ce142c5f58bcc0d64c4dfb9127a7d9"],["tags/hexo/index.html","df9523ae8ae05f933a1899e8bd3e68f3"],["tags/index.html","9efe29e59985f2f9ee2845e9df39ce33"],["tags/termux/index.html","449c709e598696f612f9f21fe73216fb"],["tags/web/index.html","b05c5dd2f730c9c10dd13ea43a613e74"],["tags/wordpress/index.html","ea263fa4506e7aaabb783dc8034d5008"]];
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







