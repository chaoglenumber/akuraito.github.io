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

var precacheConfig = [["404.html","4e9bf7e874d5a39a5b305762e3022935"],["archives/2018/11/index.html","0f1681ce8c7cf186445309902bacd8c6"],["archives/2018/12/index.html","7e6c1e545b8faac4a492ec9d72e0208d"],["archives/2018/index.html","350fc5204be0490ffbe198742ed7c809"],["archives/2019/02/index.html","15cbd76947bed9606d5105b0c47e0fea"],["archives/2019/index.html","a18aea06b888b7b89938dfc43f3a1ca1"],["archives/index.html","40c35dc87ac5c513bfaf3cb370380390"],["categories/index.html","69a201a96d8c475ce36fdc23add6f0f7"],["categories/呢喃/index.html","06d544f4d446cb0324cce405b892d57e"],["categories/折腾/index.html","2f5bed67a366a1a4deb03208a4994f56"],["categories/造作/index.html","9c0ae7256b56ba0f736bafc5546fcc84"],["css/main.css","94955d5ef0da0154810dc0c476ce3779"],["essay/2018-11-11-hello-world.html","bc8bd68203868a6f6023329f9df6afce"],["essay/2018-11-18-new-starting.html","6f922982ebb69eaffca702d8ffb96595"],["essay/2018-11-19-winter-trip.html","a27acf9fd5330e151b34f548863eadf4"],["essay/2018-12-31-2018-y.html","7fb532e4159c7ae28e0f2979cc1603b5"],["essay/2018-12-31-wordpress.html","419bd6b5364b899a22703083a0105db2"],["essay/2019-02-05-hello-world-2.html","945fb17e51139599adeb40e1e8ea9001"],["essay/2019-02-19-add-crisp.html","30a729b9bede8344d40d35803845c635"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","b25a2035683f01fd1eae6827251453ed"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","549617c8d4e19029334563820817a5f9"],["js/src/affix.js","f08952b6b8ebbf8ab78b4dc554d65104"],["js/src/algolia-search.js","da99d50a1e4c73f9378be98b7bfcc95a"],["js/src/bootstrap.js","db703953caa33e301533d23c9fcd1508"],["js/src/exturl.js","124b3a0654eb0fb012b2f90d81dec6a4"],["js/src/js.cookie.js","de7d773e8939e7e89a0e167316b93011"],["js/src/motion.js","9475a295d6469546d074cb11ece1d0a5"],["js/src/post-details.js","3c849d2d14d959bfb0439117a2bb0899"],["js/src/schemes/pisces.js","a207c12f9b9050821a4afd20161347bc"],["js/src/scroll-cookie.js","5dbddbadb0fa866bb10b32c5a1f7abc2"],["js/src/scrollspy.js","cdc3fa1afd5449096fe6dbcce874be03"],["js/src/utils.js","2c7656b6b8f4e9fac2a0cb9ac0ec6d8b"],["lib/canvas-nest/README.html","cbee27a107ada94f10b8e83b97cf707f"],["lib/canvas-nest/canvas-nest-nomobile.min.js","a233f14c580d910a23c8eb2ea3f0b7b1"],["lib/canvas-nest/canvas-nest.min.js","6f20b6c507cf1cc534514f45f92cb82f"],["lib/fancybox/README.html","0292903700408400dd0f60f437684f24"],["lib/fancybox/source/jquery.fancybox.css","31f78aae5a66e83fe8d85d2420ae46dd"],["lib/fancybox/source/jquery.fancybox.js","803018b5700d7f2b733573f549c9b4b2"],["lib/fancybox/source/jquery.fancybox.min.css","1df9f5e6b383192a72769aa615eb2f1c"],["lib/fancybox/source/jquery.fancybox.min.js","4381d3c07bed21c30075ac4413266d43"],["lib/fancybox/source/jquery.fancybox.pack.js","803018b5700d7f2b733573f549c9b4b2"],["lib/font-awesome/css/font-awesome.css","afb797316444eed127d6af3209482f49"],["lib/font-awesome/css/font-awesome.min.css","850e1c39e9beb5a6ef27211df6adbbfa"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","b78f6a8568e6ae6532f06ad3af441501"],["lib/ua-parser-js/dist/ua-parser.min.js","50485c5711f06461a0ccfe32f4026b94"],["lib/ua-parser-js/dist/ua-parser.pack.js","b4c4103c8436f156d3ed897a0361dfe2"],["lib/velocity/velocity.js","577821490846513b5f66b04e791d600c"],["lib/velocity/velocity.min.js","997e5e5a597d432dd2da8adbc6b86e92"],["lib/velocity/velocity.ui.js","c02217dd73d9122c9bf263d7b4136223"],["lib/velocity/velocity.ui.min.js","e710b17205534c60640f32b728f9492b"],["tags/Crisp/index.html","f49ec7bf3dd93de92b2e3142b00a31c2"],["tags/blog/index.html","85fd4094113210cf4b5608a3befb1d51"],["tags/diary/index.html","8b216f4e952d150448761efc3020d06f"],["tags/github/index.html","d7dd4dd7ae0312db4a9d78245cdec8e6"],["tags/hexo/index.html","5ba8a2678fb93d0b43d1d6f1432be9e2"],["tags/index.html","fb0f3d940dd8e29b7a987f71b83538d5"],["tags/termux/index.html","45866ee8723190590e7303ede19f0f05"],["tags/web/index.html","a3219df7a19261c992867a76edd2fefb"],["tags/wordpress/index.html","49cf3edd0724a61d3f1a1c9ef54d294d"]];
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







