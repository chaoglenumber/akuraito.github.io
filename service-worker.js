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

var precacheConfig = [["404.html","0325bcb1e94bd7e665c982f4a0e0a0d4"],["archives/2018/11/index.html","92f418341d88da6202997edb56d1c896"],["archives/2018/12/index.html","628c541d5367aa9b26d57162d50c1dbe"],["archives/2018/index.html","4519701ca815a6660fb90200a37048ed"],["archives/2019/02/index.html","fc9378d349414d3bc63e96ea89642c78"],["archives/2019/04/index.html","c4e28cc9edb84cb4954d9932c80b3f71"],["archives/2019/index.html","fb32a59f9a4781bffaedbd9ff757d7c0"],["archives/index.html","8403ef3759574f091f85209ef3583dd0"],["categories/index.html","32c9c2c2d51cc2be7ffe13deae196a94"],["categories/呢喃/index.html","ea5b9fe72dad579f7e0de76947d1981f"],["categories/折腾/index.html","ed1eab02270cf0b1e1a09ff38bda7ea9"],["categories/矫情/index.html","d856bbf38670ebd76af105d336be34d7"],["categories/造作/index.html","80208fc95c7ca4e3406be39ba4fc1533"],["css/main.css","5d705a5ae3e4479aca634e46614ce566"],["essay/2018-11-11-hello-world.html","ed242bee55e294697184bffe6b7ad471"],["essay/2018-11-18-new-starting.html","9e8fa1d951e47a1cd6199c2a84829297"],["essay/2018-11-19-winter-trip.html","c62a6c55222b551b8a6e81d27a1c4057"],["essay/2018-12-31-2018-y.html","2040f6390e7e10153386659077a241d2"],["essay/2018-12-31-wordpress.html","b031f172db337c255f215c5cb1a2ee80"],["essay/2019-02-05-hello-world-2.html","b43cf4d72309448ee448bc8405dc509d"],["essay/2019-02-19-add-crisp.html","a8213e24e9c1b832b89c28424092d77e"],["essay/2019-04-14-senior-bye.html","ff9c100f60db997b16e64c02c893c9d5"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","86efceec96402b5fd90c8fe49873a39e"],["js/affix.js","446a7a606f13787cb3e17adbb81c82c6"],["js/algolia-search.js","c6c86107b672bdb31cb54a8a04c75e24"],["js/exturl.js","f2e7a6d4ebd113e30630c82c818fc5bd"],["js/js.cookie.js","733537cde8f05d81cb77d50409449290"],["js/motion.js","cb2ede119e559cc6d8ef72bfa6641163"],["js/next-boot.js","94b97fb09a05f76a303aa0ec8a5a7f37"],["js/post-details.js","e40de2a21254e9c0ec88ebeb2b7c83d8"],["js/schemes/muse.js","6958d524dc12402e94c06d3e8b9bdeeb"],["js/schemes/pisces.js","799161c23fd7a02f26165485ecb3106c"],["js/scroll-cookie.js","dfd7bf529e27b5804a7cc972963eecc8"],["js/scrollspy.js","d4527ed1812167441a35873bdb5aa83b"],["js/utils.js","6a6fc05177deea58f40a9f0b86325a1f"],["lib/canvas-nest/README.html","1ed3aa5942883a25dfab2ee28d2d9195"],["lib/canvas-nest/canvas-nest-nomobile.min.js","6c8aea8fad1624d1986432fed7ae06d5"],["lib/canvas-nest/canvas-nest.min.js","5dd0c59551f13e39f24a9682c3022188"],["lib/fancybox/README.html","52d5e4606e4915217af3a4205ceb31a4"],["lib/fancybox/source/jquery.fancybox.css","3b2a835008dac7bbc97845c64807256a"],["lib/fancybox/source/jquery.fancybox.min.css","1611b33e51356ec6d1479b93a241db0b"],["lib/fancybox/source/jquery.fancybox.min.js","4da08007826909f571821b927cdea89e"],["lib/fancybox/source/jquery.fancybox.pack.js","d4ebbbd6f41cab784e7b98eb25310265"],["lib/font-awesome/css/font-awesome.css","7e760cf3ad3a108eab770dc46c8adebc"],["lib/font-awesome/css/font-awesome.min.css","fc6e2823cefc5edbf70cc66d9e1904fb"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","8601de46b37f2f632aa158a065b628d4"],["lib/jquery_lazyload/README.html","841d1da2f8001783177c202c5ebaa1f8"],["lib/jquery_lazyload/jquery.lazyload.js","b3aa64749de9e98778c75be16aaf6234"],["lib/jquery_lazyload/jquery.scrollstop.js","fd4084a124b81a1c148e391f363acef4"],["lib/reading_progress/README.html","e74060eb997323c13363dd4bb9e55eaf"],["lib/reading_progress/reading_progress.js","87abb9cf330560edbf846c26efa08c91"],["lib/reading_progress/reading_progress.min.js","334262df0cf2ea1d2de74b091c053bbb"],["lib/velocity/velocity.js","8f39869db0efebed64db8b7bbe460097"],["lib/velocity/velocity.min.js","caa298fb452ac3da8c799737e1997ef9"],["lib/velocity/velocity.ui.js","72183d7c7c7758294f978a2231a12c90"],["lib/velocity/velocity.ui.min.js","3d415bc39880792848f97d9b73164aa9"],["tags/Crisp/index.html","81b94f14e5b33ae76b9945f9588c812b"],["tags/blog/index.html","34098fab0b606f65c96d93327d3a4ff3"],["tags/diary/index.html","f70ba030ee33367c0ad0af2dd0ca9841"],["tags/github/index.html","10092eac2983d78314790cabeb1583be"],["tags/hexo/index.html","ab13287696b3caf53c007880a45285fe"],["tags/index.html","b207453fa2bacd382ad8c2fe57dc76d1"],["tags/termux/index.html","de1184a75b89274da6375a3b6e14ce1d"],["tags/web/index.html","1b311fa654bae066eca61a197cd64f16"],["tags/wordpress/index.html","69f88db9731e77871b2c78b0966047ff"]];
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







