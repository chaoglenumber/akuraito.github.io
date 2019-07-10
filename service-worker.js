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

var precacheConfig = [["404.html","4ae1ed53e3d60846682c580f0e35d107"],["archives/2018/11/index.html","0e1edf663722304aed2369f530700d0e"],["archives/2018/12/index.html","69a8b4d0146bcc999701d2c08f445f8a"],["archives/2018/index.html","d7121d0507d419e241b995749d9902f0"],["archives/2019/02/index.html","16d46dbdf76e91504538ba3398c14e1c"],["archives/2019/04/index.html","802393eb3e0eb1cc3f087863cc3e361b"],["archives/2019/05/index.html","810adc8d711b55c02a323f0215c29ead"],["archives/2019/07/index.html","4253a4ed2b1504b82d142abbadd4b267"],["archives/2019/index.html","1ae192e29206057e2636f25606e7e6c5"],["archives/index.html","f54d47b66422eee7217c6ddac670d46d"],["categories/index.html","e694ac43dd313c7cb4d9d4e268565c57"],["categories/呢喃/index.html","b989bbcc049254945873ffb3ed0481a6"],["categories/折腾/index.html","db2cf40539213148635d85b2cb0eeb2b"],["categories/矫情/index.html","70954fd3c1816ef0f61e4bb974fcf170"],["categories/译文/index.html","9b7c7a7d82edbe06ba185dfc7289cee2"],["categories/造作/index.html","1c52bb3167c38c7f2f44e7a699924cb2"],["css/main.css","b45ef1e312eeea0e4f3005c2999afa85"],["essay/2018-11-11-hello-world.html","2659a0012e11e0675ba9bba62cb34030"],["essay/2018-11-18-new-starting.html","93442feca52952ed068c21fc36f37786"],["essay/2018-11-19-winter-trip.html","b9e1fd5b03e04983b5de5ab370d4dc04"],["essay/2018-12-31-2018-y.html","318d759247d6a47c695e8e2ef76e2eb3"],["essay/2018-12-31-wordpress.html","5378c0822e8856712e300df249b62bb3"],["essay/2019-02-05-hello-world-2.html","f5b68e68f58d150252f98324e860f722"],["essay/2019-02-19-add-crisp.html","fa8c9f9e8f27d10c442fd0fb1f847edc"],["essay/2019-04-14-senior-bye.html","d4a3b42043a2924137b432a95af7643d"],["essay/2019-05-19-hugo-on-termux-tslt.html","e31e2e27bc3f578efec58d2d95c8e7d4"],["essay/2019-07-09-anime-saw.html","2d532dd00249db2eef24d470760d6bf0"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["index.html","91f3fce42f7f62734334e0aacea097be"],["js/affix.js","2506bdbef693c0789e2b94498807dbb5"],["js/algolia-search.js","62d96e579ccdd5fe9d99fa01666735b0"],["js/exturl.js","fd40cbb5a1db275f0a29577726ca3dcc"],["js/js.cookie.js","51dfe0802be11fcdd4e86f6034425bc5"],["js/motion.js","5dac0dfb5853f4b943d9cb0aaada1517"],["js/next-boot.js","743ab456a0260991e1f3bbddd1881e67"],["js/post-details.js","109f73636dcfc98c01f1631dbc3cd394"],["js/schemes/muse.js","cf326f223c7dab2a4d839cc1d7767f3c"],["js/schemes/pisces.js","73f0ea8a1154aae366f8069107cc8eab"],["js/scroll-cookie.js","cc0a23c267ed0b8d38f55b811b103e67"],["js/scrollspy.js","7224192b4e2341443515478c17dd19ee"],["js/utils.js","851e025addcdc5579ce51bc59e37f61a"],["lib/canvas-nest/canvas-nest-nomobile.min.js","03d16faf922f86c7af82c01ed2e36d33"],["lib/canvas-nest/canvas-nest.min.js","789d98f40e1be5e631b6542278d9266c"],["lib/fancybox/source/jquery.fancybox.css","20bfdbc326e3eff6b668c6820d1eb613"],["lib/fancybox/source/jquery.fancybox.min.css","843b19f029ca0206a3cc6a32e5d86dc4"],["lib/fancybox/source/jquery.fancybox.min.js","cb8b391b764ffbd68cae2ca89af553d2"],["lib/fancybox/source/jquery.fancybox.pack.js","9b0887f3802d5aa2953abfa84a09b735"],["lib/font-awesome/css/font-awesome.css","08c97babe7ec029eba4ab9550aa78d39"],["lib/font-awesome/css/font-awesome.min.css","b76583b03359c62764bee2e22965ef4d"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","4b054a0ed771f6cab61fe5da2155ef62"],["lib/jquery_lazyload/jquery.lazyload.js","b27f31f69c7bc5a078b561c3f39f9821"],["lib/jquery_lazyload/jquery.scrollstop.js","56237aaac6badeaee2e9ca93aeb8dab3"],["lib/velocity/velocity.js","95d2f05c9efeb09f7ea88bf3bfe384fe"],["lib/velocity/velocity.min.js","172f7b57bbfab20ee1e1366baaa87754"],["lib/velocity/velocity.ui.js","ba43af36a85189e2d80d22d80dbdef36"],["lib/velocity/velocity.ui.min.js","304d884dfa5dc2df5692fa24af17fd5c"],["privacy-policy.html","6487621460fe11f6c793824321199ae8"],["tags/Crisp/index.html","abb03eedb3ef9d03808338a17f8a75ba"],["tags/github/index.html","10201acc200922a03fcdc6847d89848f"],["tags/hexo/index.html","a31b7e397057675ab47ac52bb86aba49"],["tags/hugo/index.html","ce5c9952d2c89a0d28354b1dde565265"],["tags/index.html","cdba6d595239646df629b5873f98f0d0"],["tags/termux/index.html","e664c0517c838ba534ec81b3aab50c0d"],["tags/wordpress/index.html","f7b987112e843cae44cb238fdf8a131f"]];
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







