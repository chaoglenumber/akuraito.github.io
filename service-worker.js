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

var precacheConfig = [["404/index.html","a13590599ba0d53bdf9c4f6707435d4b"],["archives/2018/10/index.html","3e75dbfeec72d0373dd63ccbc38886b0"],["archives/2018/11/index.html","546361a8536b6d2eee551234798042ef"],["archives/2018/12/index.html","09d24722acf3678d2b07589cba0f8838"],["archives/2018/index.html","6169697249da15c3100aaba32ba7b0d1"],["archives/2019/02/index.html","cc6077ae569ab38bec9d18650e1a7392"],["archives/2019/index.html","8683f4f26fca493da6ac1cab77019717"],["archives/index.html","94dd2402bfa75ba83c421f02097f1180"],["categories/index.html","c42f879c93421923734b8504fb970756"],["categories/呢喃/index.html","fc93b199b5e7daad399220652acc6e2e"],["categories/折腾/index.html","92947e03a98c7fc02140baf86888cd34"],["categories/造作/index.html","c0157f6b6205e397922b36c8e12e3628"],["css/main.css","cac89005b65af92833548f08e30c6462"],["essay/2018-10-28-web-build.html","95168db9f00ee20577b217ff8032eecd"],["essay/2018-11-11-hello-world.html","829f64894309fe5233d91a038110a757"],["essay/2018-11-18-new-starting.html","e6918d3c7e1e8899f5f4cccd1f2c99aa"],["essay/2018-11-19-winter-trip.html","5bee985f3b6c719bf1fe176b280dedf2"],["essay/2018-12-31-2018-y.html","45713574bd6ed23588e6752517157b7a"],["essay/2018-12-31-wordpress.html","6cc987b99d5a67e5c629d4d61d608695"],["essay/2019-02-05-hello-world-2.html","2837f0a8f6ae930bfc49976eb769727f"],["essay/2019-02-19-add-crisp.html","a1686f1fbdb6761786f94bfffc17a30e"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1cdcbd22476289c327d8a709a8d16bee"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","dc62c91c5a1f621d6c79a6cba184ff59"],["js/src/affix.js","8896ab92d94a71160c08739d8baec38a"],["js/src/algolia-search.js","f37ee342bdfb2caf8a9439f6a0f26d92"],["js/src/bootstrap.js","5be63fb2a17c804eb0b1b871f04e854d"],["js/src/exturl.js","4bb0ce9b467ee85f529492bd373b679a"],["js/src/js.cookie.js","d44d925a35261ac9f734f92273974041"],["js/src/motion.js","5efe05bd1456f3d974a92256b829efff"],["js/src/post-details.js","2f20ab577126dd52ec53e22fcbfac156"],["js/src/schemes/pisces.js","6cde014f3a3cadde17afe093d8110c86"],["js/src/scroll-cookie.js","0cac9464c58e6d7e576f4c751fbb8bf4"],["js/src/scrollspy.js","b0b0581ecfcb3e9659750a7adfbd001b"],["js/src/utils.js","bd259265181c4ebd37c34e83586ec68d"],["lib/canvas-nest/README.html","58083629bb3540847322a4c86afbe7a9"],["lib/canvas-nest/canvas-nest-nomobile.min.js","115cb8fe5c8639264aa450c687809184"],["lib/canvas-nest/canvas-nest.min.js","dce6a99825801f458c05d116cc82a73d"],["lib/fancybox/README.html","969b8720f036d26d91de519423342839"],["lib/fancybox/source/jquery.fancybox.css","1d4d97af3038c8b20ac77a903fa8c377"],["lib/fancybox/source/jquery.fancybox.js","9c6636486c99c103a4ba91f4282dbcf7"],["lib/fancybox/source/jquery.fancybox.min.css","79a27d7b1487ae9c3c75af50baf40edf"],["lib/fancybox/source/jquery.fancybox.min.js","98d90c0da61ad04d36dc5765c8e1db4f"],["lib/fancybox/source/jquery.fancybox.pack.js","9c6636486c99c103a4ba91f4282dbcf7"],["lib/font-awesome/css/font-awesome.css","592854dd8877b2375501a455377f8c0a"],["lib/font-awesome/css/font-awesome.min.css","4c9f494e6b8ef9b0053e9755c8bbca1f"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","cb80cb734ab69aa4d5ea7e402c6c873d"],["lib/ua-parser-js/dist/ua-parser.min.js","c145bb2d073165459030e4aaff4ba959"],["lib/ua-parser-js/dist/ua-parser.pack.js","a8980ad820435f1f6d65c81b730e72e2"],["lib/velocity/velocity.js","104702a433bf35b612fb8d8a580f4d92"],["lib/velocity/velocity.min.js","21c791dd8abfa335414c4526606a0688"],["lib/velocity/velocity.ui.js","9010b202c1b26917e2a98877a44e9769"],["lib/velocity/velocity.ui.min.js","07caf69877debbe87df95738f3658884"],["tags/Crisp/index.html","5704d6903230629813a8c58d50ff2ac5"],["tags/blog/index.html","bea18847da2fe7a1e761e44f9b2b2956"],["tags/diary/index.html","85c80da1cd277695a8cc0843c496f8b1"],["tags/github/index.html","eb74d760fd04b3b2777673e85c9d0d4c"],["tags/hexo/index.html","e67b7659ab55dfa4e8561ea3cd445c6f"],["tags/index.html","9bf478d08800649d94f92d307c0d278c"],["tags/termux/index.html","4f13291c80cef24a0613d2c3390d0c5d"],["tags/web/index.html","d819cf9d5dce20ece8c6a0e31a6a60bd"],["tags/wordpress/index.html","9642f032246bec022ea25c457f61e74e"]];
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







